class GameState {
    static #instance = null;

    static getInstance() {
        if (!GameState.#instance) {
            GameState.#instance = new GameState();
        }
        return GameState.#instance;
    }

    constructor() {
        this.currentScene = 'character_creation';
        this.playerName = 'Ardent';
        this.backstory = 'noble';
        this.relationships = {
            fable: 0,
            kit: 0,
            tris: 0,
            chance: 0,
            ash: 0
        };
        this.choices = [];
        this.lastRoll = 0;
        this.rollHistory = [];
    }

    makeChoice(choiceId) {
        this.choices.push(choiceId);
    }

    static reset() {
        GameState.instance = null;
        return GameState.getInstance();
    }

    updateRelationship(character, value) {
        const normalizedChar = character.toLowerCase();
        if (this.relationships[normalizedChar] !== undefined) {
            this.relationships[normalizedChar] += value;
            this.relationships[normalizedChar] = Math.max(-15, Math.min(15, this.relationships[normalizedChar]));
        }
    }

    getBackstoryModifier(difficulty) {
        let modifier = 0;
        switch (this.backstory) {
            case 'noble':
                if (difficulty === 'diplomacy' || difficulty === 'leadership') modifier = 3;
                if (difficulty === 'stealth' || difficulty === 'streetwise') modifier = -2;
                break;
            case 'orphan':
                if (difficulty === 'stealth' || difficulty === 'streetwise' || difficulty === 'escape') modifier = 3;
                if (difficulty === 'diplomacy' || difficulty === 'magic_control') modifier = -1;
                break;
            case 'outsider':
                if (difficulty === 'magic_control' || difficulty === 'survival') modifier = 2;
                if (difficulty === 'diplomacy' || difficulty === 'stealth') modifier = -1;
                break;
        }
        return modifier;
    }

    skipToChapter2() {
        this.playerName = 'Alex';
        this.backstory = 'orphan';
        this.relationships = { fable: 2, kit: 1, tris: 0, chance: 1, ash: 0 };
        this.choices = ['defiant1', 'take_hand', 'introduce_self', 'magic_escape_success'];
    }

    skipToChapter3() {
        this.playerName = 'Alex';
        this.backstory = 'orphan';
        this.relationships = { fable: 3, kit: 2, tris: 1, chance: 1, ash: 0 };
        this.choices = ['defiant1', 'take_hand', 'introduce_self', 'magic_escape_success'];
    }

    skipToChapter4() {
        this.playerName = 'Alex';
        this.backstory = 'orphan';
        this.relationships = { fable: 4, kit: 4, tris: 3, chance: 2, ash: 1 };
        this.choices = ['defiant1', 'take_hand', 'introduce_self', 'magic_escape_success'];
    }
}

// Create the singleton instance
const gameState = GameState.getInstance();

// Export both the class and the instance
export { GameState, gameState };