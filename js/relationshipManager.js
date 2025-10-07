import { gameState } from './gameState.js';

export class RelationshipManager {
    updateMoodDisplay() {
        for (let character in gameState.relationships) {
            const heartElement = document.getElementById(character + '-hearts');
            if (heartElement) {
                const rating = gameState.relationships[character];
                let display = '';
                
                if (rating >= 0) {
                    const heartsToShow = Math.min(rating, 5);
                    for (let i = 0; i < heartsToShow; i++) {
                        if (character === 'fable') display += '💛';
                        else if (character === 'kit') display += '❤️';
                        else if (character === 'tris') display += '💚';
                        else if (character === 'chance') display += '💙';
                        else if (character === 'ash') display += '🩷'; 
                    }
                    
                    if (rating > 5) {
                        display += ` (${rating})`;
                    } else if (rating < 5) {
                        for (let i = heartsToShow; i < 5; i++) {
                            display += '🖤';
                        }
                    }
                } else {
                    const negativeLevel = Math.min(Math.abs(rating), 5);
                    for (let i = 0; i < negativeLevel; i++) {
                        display += '💔';
                    }
                    display += ` (${rating})`;
                }
                
                heartElement.textContent = display;
            }
        }
    }

    displayFinalRelationships() {
        const finalDisplay = document.getElementById('final-display');
        if (finalDisplay) {
            let summary = '';
            for (let character in gameState.relationships) {
                const rating = gameState.relationships[character];
                const name = character.charAt(0).toUpperCase() + character.slice(1);
                let status = '';
                
                if (rating >= 80) status = 'Devoted';
                else if (rating >= 60) status = 'Trusted Friend';
                else if (rating >= 40) status = 'Friendly';
                else if (rating >= 20) status = 'Warm';
                else if (rating >= 0) status = 'Neutral';
                else if (rating >= -20) status = 'Wary';
                else if (rating >= -40) status = 'Distrustful';
                else status = 'Hostile';
                
                summary += `<div style="margin: 5px 0;"><strong>${name}:</strong> ${status} (${rating})</div>`;
            }
            finalDisplay.innerHTML = summary;
        }
    }
}

export const relationshipManager = new RelationshipManager();