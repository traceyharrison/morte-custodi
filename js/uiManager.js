import { gameState } from './gameState.js';
import { sceneManager } from './sceneManager.js';
import { relationshipManager } from './relationshipManager.js';

export class UIManager {
    selectBackstory(backstoryType) {
        // Validate and set the backstory
        if (gameState.setBackstory(backstoryType)) {
            // Remove selected class from all options
            document.querySelectorAll('.backstory-option').forEach(option => {
                option.classList.remove('selected');
            });
            
            // Add selected class to chosen option
            const selectedOption = document.querySelector(`[data-backstory="${backstoryType}"]`);
            if (selectedOption) {
                selectedOption.classList.add('selected');
            }
            
            // Update stats display immediately when backstory is selected
            relationshipManager.updateStatsDisplay();
            
            // Check if we can enable the begin button
            this.checkBeginButton();
            
            console.log('Selected backstory:', backstoryType); // Debug log
        } else {
            console.error('Invalid backstory type:', backstoryType);
        }
    }

    checkBeginButton() {
        const nameInput = document.getElementById('player-name');
        const beginButton = document.getElementById('begin-story');
        
        if (nameInput && beginButton) {
            const hasName = nameInput.value.trim().length > 0;
            const hasBackstory = gameState.backstory !== '';
            
            if (hasName && hasBackstory) {
                beginButton.disabled = false;
                beginButton.style.opacity = '1';
            } else {
                beginButton.disabled = true;
                beginButton.style.opacity = '0.5';
            }
        }
    }

    beginStory() {
        const nameInput = document.getElementById('player-name');
        if (nameInput) {
            gameState.playerName = nameInput.value.trim();
        }
        
        if (gameState.playerName && gameState.backstory) {
            sceneManager.goToScene('start');
        }
    }

    setupEventListeners() {
        setTimeout(() => {
            const nameInput = document.getElementById('player-name');
            if (nameInput) {
                nameInput.addEventListener('input', () => this.checkBeginButton());
                nameInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        const beginButton = document.getElementById('begin-story');
                        if (beginButton && !beginButton.disabled) {
                            this.beginStory();
                        }
                    }
                });
            }
        }, 100);
    }
}

export const uiManager = new UIManager();