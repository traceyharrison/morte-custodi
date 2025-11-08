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
        this.playerName = '';
        this.backstory = '';  // Start with no backstory selected
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
        
        // Player stats that affect dice rolls
        this.stats = {
            eloquence: 0,    // Arguments, dialogue, persuasion
            strength: 0,     // Physical power, combat
            bravery: 0,      // Mental fortitude, resisting fear
            agility: 0,      // Dexterity, reflexes, acrobatics
            control: 0,      // Magic rolls, magical control
            wisdom: 0        // Insight, knowledge, strategy
        };
    }

    makeChoice(choiceId) {
        this.choices.push(choiceId);
    }

    static reset() {
        GameState.#instance = null;  // Fixed to use private static field
        return GameState.getInstance();
    }

    setBackstory(backstory) {
        console.log('setBackstory called with:', backstory);
        console.log('Current stats before setting:', this.stats);
        
        if (['noble', 'orphan', 'outsider'].includes(backstory)) {
            this.backstory = backstory;
            
            // Set starting stats based on backstory
            switch(backstory) {
                case 'noble':
                    // Noble: Highest in eloquence and wisdom
                    this.stats = {
                        eloquence: 4,
                        wisdom: 4,
                        bravery: 2,
                        strength: 2,
                        agility: 1,
                        control: 2
                    };
                    break;
                case 'orphan':
                    // Orphan: Highest in agility and bravery
                    this.stats = {
                        agility: 4,
                        bravery: 4,
                        control: 2,
                        eloquence: 1,
                        strength: 2,
                        wisdom: 2
                    };
                    break;
                case 'outsider':
                    // Outsider: Highest in strength and control
                    this.stats = {
                        strength: 4,
                        control: 4,
                        wisdom: 2,
                        bravery: 2,
                        eloquence: 2,
                        agility: 1
                    };
                    break;
            }
            
            console.log(`Set backstory to ${backstory} with stats:`, this.stats);
            console.log('Full gameState after setting backstory:', this);
            return true;
        }
        console.log('Invalid backstory, returning false');
        return false;
    }

    updateRelationship(character, value) {
        const normalizedChar = character.toLowerCase();
        if (this.relationships[normalizedChar] !== undefined) {
            this.relationships[normalizedChar] += value;
            this.relationships[normalizedChar] = Math.max(-100, Math.min(100, this.relationships[normalizedChar]));
        }
    }

    // Get stat modifier for a specific type of roll
    getStatModifier(statType) {
        if (this.stats[statType] !== undefined) {
            return this.stats[statType];
        }
        return 0;
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
        // Set orphan stats
        this.stats = {
            agility: 4,
            bravery: 4,
            control: 2,
            eloquence: 1,
            strength: 2,
            wisdom: 2
        };
    }

    skipToChapter3() {
        this.playerName = 'Alex';
        this.backstory = 'orphan';
        this.relationships = { fable: 3, kit: 2, tris: 1, chance: 1, ash: 0 };
        this.choices = ['defiant1', 'take_hand', 'introduce_self', 'magic_escape_success'];
        // Set orphan stats
        this.stats = {
            agility: 4,
            bravery: 4,
            control: 2,
            eloquence: 1,
            strength: 2,
            wisdom: 2
        };
    }

    skipToChapter4() {
        this.playerName = 'Alex';
        this.backstory = 'orphan';
        this.relationships = { fable: 4, kit: 4, tris: 3, chance: 2, ash: 1 };
        this.choices = ['defiant1', 'take_hand', 'introduce_self', 'magic_escape_success'];
        // Set orphan stats
        this.stats = {
            agility: 4,
            bravery: 4,
            control: 2,
            eloquence: 1,
            strength: 2,
            wisdom: 2
        };
    }
}

// Create the singleton instance
const gameState = GameState.getInstance();

// Export both the class and the instance
export { GameState, gameState };