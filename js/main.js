// Import all dependencies first
import { gameState } from './gameState.js';
import { sceneManager } from './sceneManager.js';
import { diceSystem } from './diceSystem.js';
import { RelationshipManager } from './relationshipManager.js';
import { UIManager } from './uiManager.js';

// Import all scene collections
import { chapter1Scenes } from './scenes/chapter1.js';
import { chapter2Scenes } from './scenes/chapter2.js';
import { chapter3Scenes } from './scenes/chapter3.js';

const relationshipManager = new RelationshipManager();
const uiManager = new UIManager();

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Register scenes first
    sceneManager.registerScenes(chapter1Scenes);
    sceneManager.registerScenes(chapter2Scenes);
    sceneManager.registerScenes(chapter3Scenes);

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
    sceneManager.goToScene('safehouse_arrival');
};

window.skipToChapter4 = () => {
    gameState.skipToChapter4();
    relationshipManager.updateMoodDisplay();
    document.getElementById('chapter-indicator').textContent = 'Chapter 3: The Arrival (Night)';
    sceneManager.goToScene('restless_night');
};

// Initialize game
function initializeGame() {
    relationshipManager.updateMoodDisplay();
    sceneManager.goToScene('character_creation');
    uiManager.setupEventListeners();
}

// Run on load
document.addEventListener('DOMContentLoaded', initializeGame);
window.addEventListener('load', function() {
    if (!document.getElementById('content-area').innerHTML) {
        initializeGame();
    }
});