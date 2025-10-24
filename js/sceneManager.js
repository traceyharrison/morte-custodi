import { gameState } from './gameState.js';
import { relationshipManager } from './relationshipManager.js';
import { saveManager } from './saveManager.js';

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
        if (!scenes) {
            console.error('Attempted to register null or undefined scenes');
            return;
        }
        
        console.log('Registering scenes:', Object.keys(scenes));
        this.scenes = { ...this.scenes, ...scenes };
    }

    getSceneList() {
        return this.scenes;
    }

    goToScene(sceneId) {
        if (!this.scenes[sceneId]) {
            console.error('Scene not found:', sceneId);
            return;
        }

        console.log(`Going to scene: ${sceneId}`);
        console.log('Current gameState:', {
            backstory: gameState.backstory,
            currentScene: gameState.currentScene,
            playerName: gameState.playerName,
            stats: gameState.stats
        });

        gameState.currentScene = sceneId;
        const scene = this.scenes[sceneId];
        
        // Execute onLoad function if it exists
        if (scene.onLoad) {
            scene.onLoad();
        }

        // Apply relationship effects
        if (scene.effects) {
            for (let character in scene.effects) {
                const change = scene.effects[character];
                gameState.updateRelationship(character, change);
                
                // Show notification for significant relationship changes (2 or more)
                if (Math.abs(change) >= 2) {
                    this.showRelationshipNotification(character, change);
                }
            }
            relationshipManager.updateMoodDisplay();
        }

        // Update content
        const contentArea = document.getElementById('content-area');
        if (contentArea) {
            // Get content, checking if it's a function or direct content
            let content = typeof scene.getContent === 'function' ? 
                         scene.getContent() : 
                         (scene.content || '');
                         
            const playerName = gameState.playerName || '[Name]';
            
            // Replace player name placeholders
            content = content.split('${gameState.playerName}').join(playerName);
            
            // Update the content area
            contentArea.innerHTML = content;
            
            // Scroll to the top of the page when a new scene is loaded
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Add scene ID and title banner at the bottom of the page, if available
            if (scene.id || scene.title) {
                // Remove any existing scene banner
                const existingBanner = document.getElementById('scene-banner');
                if (existingBanner) {
                    existingBanner.remove();
                }
                
                const idText = scene.id ? `ID: ${scene.id}` : '';
                const titleText = scene.title ? `${scene.title}` : '';
                const separator = (idText && titleText) ? ' - ' : '';
                
                // Create a new banner element
                const bannerDiv = document.createElement('div');
                bannerDiv.id = 'scene-banner';
                bannerDiv.className = 'scene-identifier';
                bannerDiv.style = `
                    background-color: rgba(0,0,0,0.7); 
                    color: #ffd700; 
                    padding: 5px 10px; 
                    border-radius: 4px; 
                    margin-top: 15px; 
                    font-size: 0.9em;
                    border: 1px solid #ffd700; 
                    display: flex; 
                    justify-content: space-between;
                    max-width: 800px;
                    margin-left: auto;
                    margin-right: auto;
                `;
                
                // Add the content to the banner
                bannerDiv.innerHTML = `
                    <span>${idText}${separator}${titleText}</span>
                    <span class="scene-key">${sceneId}</span>
                `;
                
                // Add it to the end of the body
                document.body.appendChild(bannerDiv);
            }
            
            // Auto-save after scene loads (except character creation)
            saveManager.autoSave();
        }
    }

    showRelationshipNotification(character, change) {
        // Capitalize character name
        const characterName = character.charAt(0).toUpperCase() + character.slice(1);
        
        // Determine message based on change value
        const isPositive = change > 0;
        const message = isPositive ? `${characterName} approves` : `${characterName} disapproves`;
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `relationship-notification ${isPositive ? 'positive' : 'negative'}`;
        notification.textContent = message;
        
        // Add character-specific color class
        notification.classList.add(`${character}-notification`);
        
        // Add to body
        document.body.appendChild(notification);
        
        // Trigger animation
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // Remove after animation completes
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, 3000);
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