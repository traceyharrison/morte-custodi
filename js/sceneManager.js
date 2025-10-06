import { gameState } from './gameState.js';
import { relationshipManager } from './relationshipManager.js';

// We'll import scenes after we create them
let allScenes = {};

class SceneManager {
    static #instance = null;

    static getInstance() {
        if (!SceneManager.#instance) {
            SceneManager.#instance = new SceneManager();
        }
        return SceneManager.#instance;
    }

    constructor() {
        if (SceneManager.#instance) {
            return SceneManager.#instance;
        }
        this.scenes = {};
        SceneManager.#instance = this;
    }

    registerScenes(scenes) {
        this.scenes = { ...this.scenes, ...scenes };
    }

    goToScene(sceneId) {
        if (!this.scenes[sceneId]) {
            console.error('Scene not found:', sceneId);
            return;
        }

        gameState.currentScene = sceneId;
        const scene = this.scenes[sceneId];
        
        // Apply relationship effects
        if (scene.effects) {
            for (let character in scene.effects) {
                gameState.updateRelationship(character, scene.effects[character]);
            }
            relationshipManager.updateMoodDisplay();
        }

        // Update content
        const contentArea = document.getElementById('content-area');
        if (contentArea) {
            let content = scene.content;
            const playerName = gameState.playerName || '[Name]';
            
            // Replace player name placeholders
            content = content.split('${gameState.playerName}').join(playerName);
            
            contentArea.innerHTML = content;
        }
        
        // Execute onLoad function if it exists
        if (scene.onLoad) {
            scene.onLoad();
        }
    }

    makeChoice(choiceId, nextScene) {
        gameState.makeChoice(choiceId);
        this.goToScene(nextScene);
    }

    triggerBackstoryResponse() {
        const backstoryScenes = {
            'noble': 'noble_response',
            'orphan': 'orphan_response',
            'outsider': 'outsider_response'
        };
        
        const nextScene = backstoryScenes[gameState.backstory] || 'fire_scene';
        this.goToScene(nextScene);
    }
}

export const sceneManager = SceneManager.getInstance();