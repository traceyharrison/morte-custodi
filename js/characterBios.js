import { CHARACTER_IMAGES } from './constants.js';

export const characterBios = {
    
    fable: {
        name: "Fable Voss",
        title: "Leader of the Morte Custodi",
        image: CHARACTER_IMAGES.fable,
        description: `A warm and empathetic leader who carries the unbearable burden of centuries on his shoulders. Fable presents himself as a friendly, cheerful mentor to the rebellion, but beneath that mask lies a man haunted by unfathomable grief and an impossible burden.
        <br><br>
        Once a general in a rebellion, Fable was cursed with immortality by the Crown's priests when his uprising failed. He and his soldiers were doomed to a cruel mockery of eternal life, one with pain but no joy. As their commander, Fable was the only one able to end their suffering. Over the centuries, as his comrades endured endless years of torment, they begged him for release. Fable relented, and he has slain them one by one, each death carving another scar into his soul. Now he remains alone, the last of the cursed.
        <br><br>
        With wavy black hair marked by a silver stripe and green eyes heavy with memory, Fable wields both necromancy and a sword. He guides the restless dead, though he claims they're just illusions. His romance is about helping him rediscover hope and purpose after centuries of despair.`,
        traits: ["Warm", "Empathetic", "Haunted", "Burdened"]
    },
    
    kit: {
        name: "Kit Alderidge",
        title: "The Defector",
        image: CHARACTER_IMAGES.kit,
        description: `Fable's second-in-command and a man whose past is written in the blood of those he once hunted. Kit is stoic, distant, and fiercely pragmatic. He knows what he is: a soldier. One who carries the weight of his sins like armor on his back. His sharp amber eyes and military bearing speak to years spent serving the very regime he now fights against.
        <br><br>
        Once a knight of the Inquisition tasked with capturing rogue mages, Kit defected after being ordered to seize a child and kill him in front of his parents. It was the first time he truly saw the cruelty of his cause. That moment shattered something inside him, but it couldn't undo what he'd already done. He carries the weight of every mage he ever captured, every life he helped destroy.
        <br><br>
        A master of elemental fire magic and wielder of many weapons (though he prefers swords), Kit is loyal to a fault, as though perhaps loyalty is all he has left to offer as penance. His romance is about reconciliation with the past and learning that redemption is not a destination but an ongoing choice, not eternal punishment but continuous effort to do better.`,
        traits: ["Stoic", "Loyal", "Pragmatic", "Guilty"]
    },
    
    chance: {
        name: "Chance DeBeaux",
        title: "The Dream Weaver",
        image: CHARACTER_IMAGES.chance,
        description: `Charming, witty, and devastatingly flirtatious, Chance is the rebellion's trickster and dream-mage, someone who keeps everyone at arm's length with a roguish smile and glowing lilac eyes. With curly white hair and an easy demeanor, they seem approachable yet untouchable. That's the carefully constructed lie they want you to believe.
        <br><br>
        The truth is far darker. Sold as a child to a decadent noble house, Chance was forced to weave dreams for their amusement, sometimes delightful, often nightmarish. They learned early that their gift could be twisted into a tool of pain and cruelty, and that helplessness was the worst feeling in the world. They survived by becoming whatever their captors wanted, until the day they escaped.
        <br><br>
        Now Chance hides their trauma behind humor and charm. They hate being out of control, they won't drink alcohol, and they rarely sleep without medication. Their magic lets them enter others' dreams and weave them to their liking, but Chance's own dreams are still haunted. Their romance is about breaking through the performance, helping them face their worst memories, and proving that vulnerability is not weakness and intimacy can be kind.`,
        traits: ["Charming", "Witty", "Traumatized", "Guarded"]
    },
    
    tris: {
        name: "Tris Marian",
        title: "The Healer",
        image: CHARACTER_IMAGES.tris,
        description: `A skilled healer carrying the weight of every life she couldn't save. Tris is gruff, clinical, and often brusque, using her sharp tongue as armor against the emotional toll of her work. She often pushes herself to the point of exhaustion, driven by guilt and an unrelenting need to protect others.
        <br><br>
        Beneath the harsh exterior is someone who cares deeply, perhaps too deeply. Tris lost someone she loved, a fellow mage named River, and the guilt of that loss haunts her. She sees echoes of River in the protagonist's recklessness, which both draws her in and terrifies her in equal measure.
        <br><br>
        Tris struggles with vulnerability, often channeling her emotions into worry and scolding. When she does let her guard down, it reveals a person capable of profound tenderness, desperately afraid of losing someone else she cares about.`,
        traits: ["Protective", "Exhausted", "Caring", "Grieving"]
    },
    
    ash: {
        name: "Ash Juvadi",
        title: "The Infiltrator",
        image: CHARACTER_IMAGES.ash,
        description: `Tall, thin, and pale with striking pink hair and eyes, Ash is fragile in a way that makes you want to protect her, and that fragility is both genuine and dangerous. She struggles with fractured loyalties, a woman yearning desperately for belonging but unsure where she truly fits.
        <br><br>
        Locked away as a child and raised by Inquisitor Caine, Ash was convinced that her magic was an illness that needed to be suppressed. She's been taking Inquisition "remedies" for years, unstable without them. But when her suppressants ran out and she began having magical episodes, Caine left her to die in the forest. She walked toward the safehouse, the very place he'd told her never to go, hoping for help.
        <br><br>
        What Ash doesn't yet know is that the "uncontrolled magic" is actually Caine's mental connection to her, a leash he uses to maintain control. When she finally severs that bond, she begins to truly heal and bond with the group. Her arc is about reclaiming her identity, enduring the painful withdrawal from suppressants, and choosing freedom over false safety. Her romance is about learning to trust herself and embrace the magic she was taught to fear.`,
        traits: ["Fragile", "Conflicted", "Yearning", "Resilient"]
    }
};

// Function to open character bios menu
window.openCharacterBios = function() {
    const menu = document.getElementById('character-bios-menu');
    const container = document.getElementById('character-bios-container');
    
    // Generate character bio buttons
    container.innerHTML = `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin-top: 20px;">
            <button class="choice-button" onclick="window.showCharacterBio('fable')" style="background: linear-gradient(45deg, #555555, #2d2d2d);">Fable Voss</button>
            <button class="choice-button" onclick="window.showCharacterBio('kit')" style="background: linear-gradient(45deg, #ff6b6b, #c92a2a);">Kit Alderidge</button>
            <button class="choice-button" onclick="window.showCharacterBio('chance')" style="background: linear-gradient(45deg, #9775fa, #5f3dc4);">Chance DeBeaux</button>
            <button class="choice-button" onclick="window.showCharacterBio('tris')" style="background: linear-gradient(45deg, #51cf66, #2f9e44);">Tris Marian</button>
            <button class="choice-button" onclick="window.showCharacterBio('ash')" style="background: linear-gradient(45deg, #ff6b9d, #c92a6a);">Ash Juvadi</button>
        </div>
        <div id="bio-display" style="margin-top: 30px;"></div>
    `;
    
    menu.style.display = 'flex';
};

// Function to close character bios menu
window.closeCharacterBios = function() {
    const menu = document.getElementById('character-bios-menu');
    menu.style.display = 'none';
};

// Function to show a specific character's bio
window.showCharacterBio = function(characterKey) {
    const bio = characterBios[characterKey];
    const bioDisplay = document.getElementById('bio-display');
    
    if (!bio) return;
    
    bioDisplay.innerHTML = `
        <div class="character-bio-card">
            <div class="bio-header">
                <img src="${bio.image}" alt="${bio.name}" class="bio-portrait" />
                <div class="bio-title-section">
                    <h2 class="bio-name">${bio.name}</h2>
                    <h3 class="bio-title">${bio.title}</h3>
                </div>
            </div>
            <div class="bio-traits">
                ${bio.traits.map(trait => `<span class="bio-trait">${trait}</span>`).join('')}
            </div>
            <div class="bio-description">
                ${bio.description}
            </div>
        </div>
    `;
    
    // Scroll to the bio display
    bioDisplay.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
};
