// Import all dependencies first
import { gameState } from './gameState.js';
import { sceneManager } from './sceneManager.js';
import { diceSystem } from './diceSystem.js';
import { RelationshipManager } from './relationshipManager.js';
import { UIManager } from './uiManager.js';
import { saveManager } from './saveManager.js';
import './characterBios.js';

// Create manager instances
const relationshipManager = new RelationshipManager();
const uiManager = new UIManager();

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Dynamically import scenes
        const chapter1 = await import('./scenes/chapter1.js');
        const chapter2 = await import('./scenes/chapter2.js');
        const chapter3 = await import('./scenes/chapter3.js');
        const chapter4 = await import('./scenes/chapter4.js');
        const chapter5 = await import('./scenes/chapter5.js');

        // Register scenes
        sceneManager.registerScenes(chapter1.chapter1Scenes);
        sceneManager.registerScenes(chapter2.chapter2Scenes);
        sceneManager.registerScenes(chapter3.chapter3Scenes);
        sceneManager.registerScenes(chapter4.chapter4Scenes);
        sceneManager.registerScenes(chapter5.chapter5Scenes);

        // Initialize the game only after scenes are registered
        relationshipManager.updateMoodDisplay();
        uiManager.setupEventListeners();
        
        // Try to auto-load the most recent save, otherwise go to character creation
        const contentArea = document.getElementById('content-area');
        if (!contentArea.innerHTML) {
            // Check if there's an auto-save to continue from
            if (saveManager.getSaveData('auto')) {
                console.log('Found auto-save, loading...');
                if (saveManager.loadGame('auto')) {
                    console.log('Auto-save loaded successfully');
                } else {
                    console.log('Auto-save failed to load, starting new game');
                    sceneManager.goToScene('character_creation');
                }
            } else {
                console.log('No auto-save found, starting new game');
                sceneManager.goToScene('character_creation');
            }
        }
    } catch (error) {
        console.error('Error loading scenes:', error);
        console.log('Available scenes:', Object.keys(sceneManager.getSceneList()));
    }
});

// Expose functions to window for onclick handlers
window.goToScene = (sceneId) => sceneManager.goToScene(sceneId);
window.makeChoice = (choiceId, nextScene) => sceneManager.makeChoice(choiceId, nextScene);
window.performRoll = (...args) => diceSystem.performRoll(...args);
window.triggerBackstoryResponse = () => sceneManager.triggerBackstoryResponse();

// Character creation functions
window.selectBackstory = (backstoryType) => uiManager.selectBackstory(backstoryType);
window.beginStory = () => uiManager.beginStory();

// Chapter navigation
window.startChapter2 = () => {
    document.getElementById('chapter-indicator').textContent = 'Chapter 2: In the Shadows';
    sceneManager.goToScene('chapter2_start');
};

window.startChapter3 = () => {
    document.getElementById('chapter-indicator').textContent = 'Chapter 3: Awakening Power';
    sceneManager.goToScene('chapter3_morning');
};

// Skip functions for testing
window.skipToChapter2 = () => {
    gameState.skipToChapter2();
    relationshipManager.updateMoodDisplay();
    document.getElementById('chapter-indicator').textContent = 'Chapter 2: In the Shadows';
    sceneManager.goToScene('chapter2_start');
};

window.skipToChapter3 = () => {
    gameState.skipToChapter3();
    relationshipManager.updateMoodDisplay();
    document.getElementById('chapter-indicator').textContent = 'Chapter 3: The Arrival';
    sceneManager.goToScene('chapter3_morning');
};

window.skipToChapter4 = () => {
    gameState.skipToChapter4();
    relationshipManager.updateMoodDisplay();
    document.getElementById('chapter-indicator').textContent = 'Chapter 4: The Newest Recruit';
    sceneManager.goToScene('ash_morning');
};

window.skipToChapter5 = () => {
    gameState.skipToChapter4(); // Use chapter 4 state as base
    relationshipManager.updateMoodDisplay();
    document.getElementById('chapter-indicator').textContent = 'Chapter 5: Hunted';
    sceneManager.goToScene('chapter5_start');
};

// Scene selector function
window.toggleSceneSelector = () => {
    const existingSelector = document.getElementById('scene-selector');
    if (existingSelector) {
        this.playerName = 'Alex';
        this.playerBackstory = 'orphan';
        existingSelector.remove();
        return;
    }

    const sceneList = sceneManager.getSceneList();
    const selectorDiv = document.createElement('div');
    selectorDiv.id = 'scene-selector';
    selectorDiv.style.cssText = `
        position: fixed;
        bottom: 170px;
        right: 10px;
        width: 300px;
        max-height: 400px;
        overflow-y: auto;
        background: rgba(0, 0, 0, 0.9);
        border: 2px solid #ffd700;
        border-radius: 5px;
        padding: 10px;
        z-index: 1000;
    `;

    const closeButton = document.createElement('button');
    closeButton.textContent = '✕';
    closeButton.style.cssText = `
        position: absolute;
        top: 5px;
        right: 5px;
        background: transparent;
        color: #ffd700;
        border: none;
        font-size: 20px;
        cursor: pointer;
        padding: 5px 10px;
        line-height: 1;
    `;
    closeButton.onclick = () => selectorDiv.remove();

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search scenes...';
    searchInput.style.cssText = `
        width: 100%;
        padding: 5px;
        margin-bottom: 10px;
        margin-top: 25px;
        background: #1a1a1a;
        color: #fff;
        border: 1px solid #ffd700;
        border-radius: 3px;
    `;
    
    const sceneListDiv = document.createElement('div');
    sceneListDiv.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 5px;
    `;

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        sceneListDiv.innerHTML = '';
        Object.keys(sceneList)
            .filter(sceneId => {
                const scene = sceneList[sceneId];
                const sceneIdMatch = (scene.id || '').toLowerCase().includes(searchTerm);
                const sceneKeyMatch = sceneId.toLowerCase().includes(searchTerm);
                return sceneIdMatch || sceneKeyMatch;
            })
            .forEach(sceneId => {
                const scene = sceneList[sceneId];
                const button = document.createElement('button');
                button.textContent = scene.id ? `${scene.id} - ${sceneId}` : sceneId;
                button.className = 'choice-button';
                button.style.cssText = `
                    padding: 5px 10px;
                    text-align: left;
                    font-size: 0.9em;
                `;
                button.onclick = () => {
                    sceneManager.goToScene(sceneId);
                    selectorDiv.remove();
                };
                sceneListDiv.appendChild(button);
            });
    });

    selectorDiv.appendChild(closeButton);
    selectorDiv.appendChild(searchInput);
    selectorDiv.appendChild(sceneListDiv);
    searchInput.dispatchEvent(new Event('input'));
    document.body.appendChild(selectorDiv);
};

// Save/Load Menu Functions
window.openSaveMenu = function() {
    const menu = document.getElementById('save-menu');
    const container = document.getElementById('save-slots-container');
    
    // Clear existing content
    container.innerHTML = '';
    
    // Get all saves
    const saves = saveManager.getAllSaves();
    
    // Create save slot elements
    saves.forEach(save => {
        const slotDiv = document.createElement('div');
        slotDiv.className = save.data ? 'save-slot' : 'save-slot empty';
        
        let slotHTML = `<div class="save-slot-header">${save.label}</div>`;
        
        if (save.data) {
            const date = new Date(save.data.timestamp);
            const dateStr = date.toLocaleString();
            slotHTML += `
                <div class="save-slot-info">Player: ${save.data.playerName || 'Unknown'}</div>
                <div class="save-slot-info">Backstory: ${save.data.backstory || 'None'}</div>
                <div class="save-slot-info">Scene: ${save.data.currentScene || 'Unknown'}</div>
                <div class="save-slot-info">Saved: ${dateStr}</div>
                <div class="save-slot-buttons">
                    <button class="save-slot-button" onclick="window.loadGameFromSlot('${save.slot}')">Load</button>
                    ${save.slot !== 'auto' ? `<button class="save-slot-button" onclick="window.saveGameToSlot('${save.slot}')">Overwrite</button>` : ''}
                    <button class="save-slot-button delete" onclick="window.deleteSaveFromSlot('${save.slot}')">Delete</button>
                </div>
            `;
        } else {
            slotHTML += `
                <div class="save-slot-info">Empty Slot</div>
                <div class="save-slot-buttons">
                    <button class="save-slot-button" onclick="window.saveGameToSlot('${save.slot}')">Save Here</button>
                </div>
            `;
        }
        
        slotDiv.innerHTML = slotHTML;
        container.appendChild(slotDiv);
    });
    
    menu.style.display = 'flex';
};

window.closeSaveMenu = function() {
    const menu = document.getElementById('save-menu');
    menu.style.display = 'none';
};

window.saveGameToSlot = function(slot) {
    if (saveManager.saveGame(slot)) {
        alert('Game saved successfully!');
        window.openSaveMenu(); // Refresh the menu
    } else {
        alert('Failed to save game.');
    }
};

window.loadGameFromSlot = function(slot) {
    if (confirm('Load this save? Any unsaved progress will be lost.')) {
        if (saveManager.loadGame(slot)) {
            window.closeSaveMenu();
            alert('Game loaded successfully!');
        } else {
            alert('Failed to load game.');
        }
    }
};

window.deleteSaveFromSlot = function(slot) {
    if (confirm('Delete this save? This cannot be undone.')) {
        if (saveManager.deleteSave(slot)) {
            alert('Save deleted.');
            window.openSaveMenu(); // Refresh the menu
        } else {
            alert('Failed to delete save.');
        }
    }

};

// Set Default Values Function
window.setDefaultValues = function() {
    if (confirm('Reset all values to defaults? This will set stats and relationships to starting values.')) {
        // Reset relationships to neutral
        gameState.relationships = {
            fable: 0,
            kit: 0,
            tris: 0,
            chance: 0,
            ash: 0
        };
        
        // Set default stats (orphan backstory as default)
        gameState.stats = {
            agility: 4,
            bravery: 4,
            luck: 2,
            eloquence: 1,
            strength: 2,
            wisdom: 2
        };
        
        // Set default player info
        gameState.playerName = 'Alex';
        gameState.backstory = 'orphan';
        
        // Update UI
        relationshipManager.updateMoodDisplay();
        uiManager.updateStatsDisplay();
        
        alert('Values reset to defaults:\n- Name: Alex\n- Backstory: Orphan\n- All relationships set to neutral\n- Stats set to Orphan defaults');
    }
};

// Stat Allocation System
let statPointsRemaining = 3;
let statAllocations = {
    eloquence: 0,
    strength: 0,
    bravery: 0,
    agility: 0,
    control: 0,
    wisdom: 0
};

window.allocateStatPoint = function(statName) {
    if (statPointsRemaining > 0 && statAllocations[statName] < 1) {
        statAllocations[statName]++;
        statPointsRemaining--;
        updateStatAllocationUI();
    }
};

window.deallocateStatPoint = function(statName) {
    if (statAllocations[statName] > 0) {
        statAllocations[statName]--;
        statPointsRemaining++;
        updateStatAllocationUI();
    }
};

window.confirmStatAllocation = function() {
    if (statPointsRemaining > 0) {
        alert(`You still have ${statPointsRemaining} point(s) to allocate!`);
        return;
    }
    
    // Apply the stat increases
    Object.keys(statAllocations).forEach(stat => {
        gameState.stats[stat] += statAllocations[stat];
    });
    
    // Update UI and proceed
    relationshipManager.updateStatsDisplay();
    
    // Reset allocations for next time
    statPointsRemaining = 3;
    statAllocations = {
        eloquence: 0,
        strength: 0,
        bravery: 0,
        agility: 0,
        control: 0,
        wisdom: 0
    };
    
    // Continue to next scene
    goToScene('training_interrupted');
};

window.updateStatAllocationUI = function() {
    const pointsDisplay = document.getElementById('points-remaining');
    if (pointsDisplay) {
        pointsDisplay.textContent = statPointsRemaining;
    }
    
    // Update each stat display
    Object.keys(statAllocations).forEach(stat => {
        const display = document.getElementById(`allocated-${stat}`);
        const minusBtn = document.getElementById(`minus-${stat}`);
        const plusBtn = document.getElementById(`plus-${stat}`);
        
        if (display) {
            display.textContent = statAllocations[stat];
        }
        if (minusBtn) {
            minusBtn.disabled = statAllocations[stat] === 0;
        }
        if (plusBtn) {
            plusBtn.disabled = statPointsRemaining === 0 || statAllocations[stat] >= 1;
        }
    });
    
    // Update confirm button
    const confirmBtn = document.getElementById('confirm-stats-btn');
    if (confirmBtn) {
        confirmBtn.disabled = statPointsRemaining > 0;
    }
};