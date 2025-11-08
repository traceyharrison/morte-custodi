import { gameState } from './gameState.js';
import { sceneManager } from './sceneManager.js';
import { relationshipManager } from './relationshipManager.js';

class SaveManager {
    static #instance = null;

    static getInstance() {
        if (!SaveManager.#instance) {
            SaveManager.#instance = new SaveManager();
        }
        return SaveManager.#instance;
    }

    constructor() {
        this.saveKey = 'morteCustomi_gameSave';
        this.autoSaveKey = 'morteCustomi_autoSave';
    }

    // Save the current game state to localStorage
    saveGame(slot = 'manual') {
        // Validate gameState before saving
        if (!gameState || !gameState.stats || !gameState.relationships) {
            console.error('Invalid gameState detected during save:', gameState);
            return false;
        }

        const saveData = {
            version: '1.0',
            timestamp: new Date().toISOString(),
            gameState: {
                currentScene: gameState.currentScene,
                playerName: gameState.playerName,
                backstory: gameState.backstory,
                relationships: { ...gameState.relationships },
                choices: [...gameState.choices],
                stats: { ...gameState.stats },
                lastRoll: gameState.lastRoll,
                rollHistory: [...gameState.rollHistory]
            }
        };

        // Log what we're about to save for debugging
        console.log('Saving game data:', {
            scene: saveData.gameState.currentScene,
            stats: saveData.gameState.stats,
            relationships: saveData.gameState.relationships
        });

        try {
            const key = slot === 'auto' ? this.autoSaveKey : `${this.saveKey}_${slot}`;
            localStorage.setItem(key, JSON.stringify(saveData));
            console.log(`Game saved to slot: ${slot}`);
            return true;
        } catch (error) {
            console.error('Failed to save game:', error);
            return false;
        }
    }

    // Load game state from localStorage
    loadGame(slot = 'manual') {
        try {
            const key = slot === 'auto' ? this.autoSaveKey : `${this.saveKey}_${slot}`;
            const savedData = localStorage.getItem(key);
            
            if (!savedData) {
                console.log('No save found in slot:', slot);
                return false;
            }

            const saveData = JSON.parse(savedData);
            
            // Validate loaded data
            if (!saveData.gameState || !saveData.gameState.stats || !saveData.gameState.relationships) {
                console.error('Invalid save data:', saveData);
                return false;
            }

            // Log what we're loading for debugging
            console.log('Loading game data:', {
                scene: saveData.gameState.currentScene,
                stats: saveData.gameState.stats,
                relationships: saveData.gameState.relationships
            });
            
            // Restore game state
            gameState.currentScene = saveData.gameState.currentScene;
            gameState.playerName = saveData.gameState.playerName;
            gameState.backstory = saveData.gameState.backstory;
            gameState.relationships = { ...saveData.gameState.relationships };
            gameState.choices = [...saveData.gameState.choices];
            
            // Validate and fix stats if needed
            const loadedStats = saveData.gameState.stats;
            const allStatsZero = Object.values(loadedStats).every(stat => stat === 0);
            
            if (allStatsZero && gameState.backstory && ['noble', 'orphan', 'outsider'].includes(gameState.backstory)) {
                console.warn('Detected old save with zero stats, reinitializing based on backstory:', gameState.backstory);
                // Reinitialize stats based on backstory
                gameState.setBackstory(gameState.backstory);
            } else {
                gameState.stats = { ...loadedStats };
            }
            
            gameState.lastRoll = saveData.gameState.lastRoll;
            gameState.rollHistory = [...saveData.gameState.rollHistory];

            console.log(`Game loaded from slot: ${slot}`);
            
            // Update UI to reflect loaded state
            relationshipManager.updateMoodDisplay();
            relationshipManager.updateStatsDisplay();
            
            // Update chapter indicator if it exists
            const chapterIndicator = document.getElementById('chapter-indicator');
            if (chapterIndicator) {
                // Try to determine chapter from scene name
                if (gameState.currentScene.startsWith('chapter2')) {
                    chapterIndicator.textContent = 'Chapter 2: In the Shadows';
                } else if (gameState.currentScene.startsWith('chapter3')) {
                    chapterIndicator.textContent = 'Chapter 3: Awakening Power';
                } else if (gameState.currentScene.startsWith('chapter4')) {
                    chapterIndicator.textContent = 'Chapter 4: Revelations';
                } else if (gameState.currentScene.startsWith('chapter5')) {
                    chapterIndicator.textContent = 'Chapter 5: Bonds and Betrayals';
                }
            }
            
            // Navigate to the saved scene
            sceneManager.goToScene(gameState.currentScene);
            
            return true;
        } catch (error) {
            console.error('Failed to load game:', error);
            return false;
        }
    }

    // Auto-save the game
    autoSave() {
        // Don't auto-save on character creation screen
        if (gameState.currentScene === 'character_creation') {
            return;
        }
        return this.saveGame('auto');
    }

    // Get save data for display (without loading)
    getSaveData(slot = 'manual') {
        try {
            const key = slot === 'auto' ? this.autoSaveKey : `${this.saveKey}_${slot}`;
            const savedData = localStorage.getItem(key);
            
            if (!savedData) {
                return null;
            }

            const saveData = JSON.parse(savedData);
            return {
                timestamp: new Date(saveData.timestamp),
                playerName: saveData.gameState.playerName,
                currentScene: saveData.gameState.currentScene,
                backstory: saveData.gameState.backstory
            };
        } catch (error) {
            console.error('Failed to get save data:', error);
            return null;
        }
    }

    // Delete a save
    deleteSave(slot = 'manual') {
        try {
            const key = slot === 'auto' ? this.autoSaveKey : `${this.saveKey}_${slot}`;
            localStorage.removeItem(key);
            console.log(`Save deleted from slot: ${slot}`);
            return true;
        } catch (error) {
            console.error('Failed to delete save:', error);
            return false;
        }
    }

    // Check if a save exists
    hasSave(slot = 'manual') {
        const key = slot === 'auto' ? this.autoSaveKey : `${this.saveKey}_${slot}`;
        return localStorage.getItem(key) !== null;
    }

    // Get all save slots with data
    getAllSaves() {
        const saves = [];
        
        // Check auto-save
        if (this.hasSave('auto')) {
            saves.push({
                slot: 'auto',
                label: 'Auto-Save',
                data: this.getSaveData('auto')
            });
        }

        // Check manual save slots (1-3)
        for (let i = 1; i <= 3; i++) {
            const slot = `slot${i}`;
            if (this.hasSave(slot)) {
                saves.push({
                    slot: slot,
                    label: `Save Slot ${i}`,
                    data: this.getSaveData(slot)
                });
            } else {
                saves.push({
                    slot: slot,
                    label: `Save Slot ${i}`,
                    data: null
                });
            }
        }

        return saves;
    }
}

// Create singleton instance
const saveManager = SaveManager.getInstance();

// Export both the class and instance
export { SaveManager, saveManager };
