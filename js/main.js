// Import all dependencies first
import { gameState } from './gameState.js';
import { sceneManager } from './sceneManager.js';
import { diceSystem } from './diceSystem.js';
import { RelationshipManager } from './relationshipManager.js';
import { UIManager } from './uiManager.js';

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

        // Register scenes
        sceneManager.registerScenes(chapter1.chapter1Scenes);
        sceneManager.registerScenes(chapter2.chapter2Scenes);
        sceneManager.registerScenes(chapter3.chapter3Scenes);
        sceneManager.registerScenes(chapter4.chapter4Scenes);
    } catch (error) {
        console.error('Error loading scenes:', error);
    }

    // Initialize the game
    sceneManager.goToScene('character_creation');
    relationshipManager.updateMoodDisplay();
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
    sceneManager.goToScene('restless_night');
};

window.skipToChapter4 = () => {
    gameState.skipToChapter4();
    relationshipManager.updateMoodDisplay();
    document.getElementById('chapter-indicator').textContent = 'Chapter 3: The Arrival (Night)';
    sceneManager.goToScene('ash_morning');
};

// Initialize game
function initializeGame() {
    relationshipManager.updateMoodDisplay();
    sceneManager.goToScene('character_creation');
    uiManager.setupEventListeners();
}

// Scene selector function
window.toggleSceneSelector = () => {
    const existingSelector = document.getElementById('scene-selector');
    if (existingSelector) {
        this.playerName = 'Alex';
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

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search scenes...';
    searchInput.style.cssText = `
        width: 100%;
        padding: 5px;
        margin-bottom: 10px;
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
            .filter(sceneId => sceneId.toLowerCase().includes(searchTerm))
            .forEach(sceneId => {
                const button = document.createElement('button');
                button.textContent = sceneId;
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

    selectorDiv.appendChild(searchInput);
    selectorDiv.appendChild(sceneListDiv);
    searchInput.dispatchEvent(new Event('input'));
    document.body.appendChild(selectorDiv);
};

// Run on load
document.addEventListener('DOMContentLoaded', initializeGame);
window.addEventListener('load', function() {
    if (!document.getElementById('content-area').innerHTML) {
        initializeGame();
    }
});