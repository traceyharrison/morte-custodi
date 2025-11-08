import { gameState } from './gameState.js';

class DiceSystem {
    static #instance = null;

    static getInstance() {
        if (!DiceSystem.#instance) {
            DiceSystem.#instance = new DiceSystem();
        }
        return DiceSystem.#instance;
    }

    rollD20() {
        return Math.floor(Math.random() * 20) + 1;
    }

    createDiceRoll(title, description, backstoryType, successScene, failureScene, difficultyClass = 12, type = 'general', statType = null) {
        // Get both backstory modifier and stat modifier
        const backstoryModifier = gameState.getBackstoryModifier(backstoryType);
        const statModifier = statType ? gameState.getStatModifier(statType) : 0;
        const totalModifier = backstoryModifier + statModifier;
        
        let modifierText = '';
        if (backstoryModifier !== 0 || statModifier !== 0 || statType) {
            modifierText = '<div class="dice-modifier">';
            
            // Always show the stat being used if specified
            if (statType) {
                const statName = statType.charAt(0).toUpperCase() + statType.slice(1);
                modifierText += `<strong>Using ${statName} Stat</strong> (${statModifier >= 0 ? '+' : ''}${statModifier})<br>`;
            }
            
            // Show backstory modifier if it exists
            if (backstoryModifier !== 0) {
                modifierText += `Backstory Modifier: ${backstoryModifier >= 0 ? '+' : ''}${backstoryModifier}<br>`;
            }
            
            // Show total if there are any modifiers
            if (totalModifier !== 0) {
                modifierText += `<strong>Total Modifier: ${totalModifier >= 0 ? '+' : ''}${totalModifier}</strong>`;
            }
            modifierText += '</div>';
        }
        
        const bonusText = totalModifier >= 0 ? '+' + totalModifier : totalModifier;
        
        return `
            <div class="dice-container fade-in">
                <div class="dice-title">${title}</div>
                <div class="dice-description">${description}</div>
                ${modifierText}
                <div class="dice-visual" id="dice-display" onclick="window.performRoll('${difficultyClass}', '${totalModifier}', '${successScene}', '${failureScene}', '${type}')">
                    ?
                </div>
                <div style="color: #ffd700; margin: 10px 0;">Click the die to roll!</div>
                <div style="color: #add8e6; font-size: 0.9em;">Need ${difficultyClass}+ to succeed</div>
                <div style="color: #add8e6; font-size: 0.9em;">Bonus: ${bonusText}</div>
                <div id="dice-result-container"></div>
            </div>
        `;
    }

    performRoll(difficultyClass, modifier, successScene, failureScene, type) {
        const diceElement = document.getElementById('dice-display');
        const resultContainer = document.getElementById('dice-result-container');
        
        if (diceElement.classList.contains('dice-rolling')) return;
        
        diceElement.classList.add('dice-rolling');
        diceElement.style.pointerEvents = 'none';
        
        let rollCount = 0;
        const rollInterval = setInterval(() => {
            diceElement.textContent = Math.floor(Math.random() * 20) + 1;
            rollCount++;
            if (rollCount > 15) {
                clearInterval(rollInterval);
                this.finishRoll(difficultyClass, modifier, successScene, failureScene, type);
            }
        }, 100);
    }

    finishRoll(difficultyClass, modifier, successScene, failureScene, type) {
        const diceElement = document.getElementById('dice-display');
        const resultContainer = document.getElementById('dice-result-container');
        
        const roll = this.rollD20();
        const modifierNum = parseInt(modifier);
        const total = roll + modifierNum;
        const success = total >= parseInt(difficultyClass);
        
        gameState.lastRoll = roll;
        gameState.rollHistory.push({roll, modifier: modifierNum, total, success, type});
        
        diceElement.textContent = roll;
        diceElement.classList.remove('dice-rolling');
        
        setTimeout(() => {
            const resultClass = success ? 'dice-success' : 'dice-failure';
            const resultText = success ? 'SUCCESS!' : 'FAILURE!';
            const totalText = modifierNum !== 0 ? ` (${roll} + ${modifierNum} = ${total})` : '';
            
            resultContainer.innerHTML = `
                <div class="dice-result ${resultClass}">
                    ${resultText}<br>
                    Rolled: ${roll}${totalText}
                </div>
                <button class="roll-button" onclick="window.goToScene('${success ? successScene : failureScene}')">
                    Continue
                </button>
            `;
        }, 500);
    }
}

export const diceSystem = DiceSystem.getInstance();