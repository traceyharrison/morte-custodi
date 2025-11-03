import { ENVIRON_IMAGES, CHARACTER_IMAGES } from '../constants.js';
import { diceSystem } from '../diceSystem.js';
import { gameState } from '../gameState.js';

export const chapter5Scenes = {
    chapter5_start: {
        id: '5.1.0',
        title: 'Evening Training',
        onLoad: function() {
            document.getElementById('chapter-indicator').textContent = 'Chapter 5: Hunted';
        },
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Evening settles over the safehouse like a heavy blanket. The others have retired for the night, leaving you alone in the training room. The scorch marks on the walls bear witness to your earlier efforts, but you're not ready to stop yet.
                    <br><br>
                    Your magic still feels raw, untamed. Each time you try to channel it, you remember the feeling of being out of control. You need to master this power before it masters you.
                    <br><br>
                    You close your eyes, reaching for that violet flame within...
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('evening_training_companion')">Begin Training</button>
            </div>
        `
    },

    evening_training_companion: {
        id: '5.2.0',
        title: 'An Unexpected Visitor',
        getContent: function() {
            // Determine which character has the highest relationship
            const relationships = gameState.relationships;
            let highestChar = 'kit';
            let highestValue = relationships.kit;
            
            // Check each character (now including ash)
            ['fable', 'tris', 'chance', 'ash'].forEach(char => {
                if (relationships[char] > highestValue) {
                    highestValue = relationships[char];
                    highestChar = char;
                }
            });
            
            // Store the chosen character for later scenes
            gameState.eveningCompanion = highestChar;
            
            const companionScenes = {
                kit: 'kit_evening_entrance',
                fable: 'fable_evening_entrance',
                tris: 'tris_evening_entrance',
                chance: 'chance_evening_entrance',
                ash: 'ash_evening_entrance'
            };
            
            const nextScene = companionScenes[highestChar];
            
            return `
                <div class="story-text fade-in">
                    <div class="narrator-text">
                        You freeze mid-motion as you hear someone approaching. The door to the training room opens with a soft creak.
                        <br><br>
                        <em>FOOTSTEPS ECHO IN THE HALLWAY</em>
                    </div>
                </div>
                <div class="next-container">
                    <button class="next-button" onclick="goToScene('${nextScene}')">Look Up</button>
                </div>
            `;
        }
    },

    // KIT'S EVENING SCENE
    kit_evening_entrance: {
        id: '5.3.1',
        title: 'Kit Arrives',
        content: `
            <div class="character-scene kit-border fade-in">
                <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                <div class="character-name">KIT</div>
                <div class="character-speech">"Your form is sloppy when you're tired."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Kit steps into the training room, still wearing his combat gear. His amber eyes assess you with that characteristic intensity, but there's something softer there tonight. Less judgment, more... concern?
                </div>
            </div>
            <div class="character-scene kit-border fade-in">
                <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                <div class="character-name">KIT</div>
                <div class="character-speech">"Come on. If you're going to push yourself, at least do it properly. I'll spar with you."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('kit_evening_training')">Accept His Offer</button>
            </div>
        `
    },

    kit_evening_training: {
        id: '5.3.2',
        title: 'Sparring with Kit',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Kit moves like water, each strike deliberate and controlled. You try to match his pace, but he's always one step ahead. Not taunting, not cruel, simply teaching.
                    <br><br>
                    His hand catches your wrist mid-strike, redirecting your momentum. For a moment, you're close enough to see the faint scar along his jawline, to feel the warmth radiating from him despite his cool demeanor.
                </div>
            </div>
            <div class="character-scene kit-border fade-in">
                <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                <div class="character-name">KIT (voice low)</div>
                <div class="character-speech">"You're too tense. Fighting like this isn't about force. It's about knowing when to yield and when to strike."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    He releases your wrist, but the ghost of his touch lingers. You reset your stance, trying again. This time, you listen to his advice. You remind yourself: Yield. Flow. Control.
                    <br><br>
                    The next exchange is smoother. Almost dance-like. When you finally land a hit, it is gentle, but precise, and Kit actually smiles. It's small and fleeting, but genuine.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('kit_evening_opening_up')">Catch Your Breath</button>
            </div>
        `,
        effects: { kit: 1 }
    },

    kit_evening_opening_up: {
        id: '5.3.3',
        title: 'Kit Opens Up',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    You both pause, breathing hard. Kit retrieves a water flask and offers it to you first. As you drink, he leans against the wall, his usual rigid posture relaxing slightly.
                </div>
            </div>
            <div class="character-scene kit-border fade-in">
                <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                <div class="character-name">KIT</div>
                <div class="character-speech">"You know…you remind me of myself, somewhat. When I first left the Inquisition."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    The words hang in the air between you. Kit, former Inquisitor? Your surprise must show on your face because he lets out a short, humorless laugh.
                </div>
            </div>
            <div class="character-scene kit-border fade-in">
                <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                <div class="character-name">KIT</div>
                <div class="character-speech">"I believed in their mission once. Protecting the realm from dangerous magic. But then I realized... I was hurting the very people I was meant to protect. The Inquisition wasn't our saviors; they were our destruction. Killing people whose only crime was being born different."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('kit_evening_confession')">Listen</button>
            </div>
        `
    },

    kit_evening_confession: {
        id: '5.3.4',
        title: 'Kit\'s Confession',
        content: `
            <div class="character-scene kit-border fade-in">
                <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                <div class="character-name">KIT</div>
                <div class="character-speech">"I tried to change things from within. That didn't work. So I left. Burned my uniform, my badges, everything that marked me as one of them. I escaped in the night, but I had nothing. Nowhere to go."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    His voice grows quieter, almost vulnerable. You've never heard Kit sound like this before.
                </div>
            </div>
            <div class="character-scene kit-border fade-in">
                <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                <div class="character-name">KIT</div>
                <div class="character-speech">"Life got…dark after that. Eventually, Fable found me in a tavern, drunk and ready to throw my life away fighting anyone who looked at me wrong. He saw something in me I couldn't see in myself. Gave me a second chance at life. A purpose worth fighting for."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Kit's amber eyes meet yours, intense and earnest.
                </div>
            </div>
            <div class="character-scene kit-border fade-in">
                <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                <div class="character-name">KIT</div>
                <div class="character-speech">"That's why I follow him in this quest to stop the Crown. Not blind loyalty. Just gratitude and the knowledge that what we're doing is right. Even if the path is dangerous."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('kit_evening_tension')">Step Closer</button>
            </div>
        `,
        effects: { kit: 1 }
    },

    kit_evening_tension: {
        id: '5.3.5',
        title: 'Unspoken Feelings',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    The air between you feels charged, electric. Kit's confession has created an intimacy you didn't expect. You find yourself stepping closer without consciously deciding to do so.
                    <br><br>
                    Kit doesn't move away. His breathing has changed, it's deeper, more careful. His eyes search yours as if trying to read something written there.
                </div>
            </div>
            <div class="character-scene kit-border fade-in">
                <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                <div class="character-name">KIT (barely above a whisper)</div>
                <div class="character-speech">"You should be careful. This life... it's dangerous."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    His hand reaches up, almost touching your cheek, hovering in the space between comfort and restraint. For a heartbeat, you think he might close the distance.
                    <br><br>
                    Then he pulls back and the moment shatters like glass.
                </div>
            </div>
            <div class="character-scene kit-border fade-in">
                <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                <div class="character-name">KIT (clearing his throat)</div>
                <div class="character-speech">"You should rest. Tomorrow will be demanding, and you need your strength."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('kit_evening_goodbye')">Watch Him Leave</button>
            </div>
        `,
        effects: { kit: 2 }
    },

    kit_evening_goodbye: {
        id: '5.3.6',
        title: 'Goodnight',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Kit moves toward the door, his composure restored like armor sliding back into place. But he pauses at the threshold, glancing back over his shoulder.
                </div>
            </div>
            <div class="character-scene kit-border fade-in">
                <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                <div class="character-name">KIT</div>
                <div class="character-speech">"Rest well, ${gameState.playerName}."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Then he's gone, leaving you alone in the training room with the ghost of what almost was and the warmth of what might be.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('evening_end')">Retire for the Night</button>
            </div>
        `
    },

    // FABLE'S EVENING SCENE
    fable_evening_entrance: {
        id: '5.4.1',
        title: 'Fable Arrives',
        content: `
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE</div>
                <div class="character-speech">"Ah, the dedicated student burning the midnight oil."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Fable's voice carries its usual playful lilt, but his gray eyes hold genuine interest as he watches you. He moves with that characteristic grace, like he's dancing even when simply walking.
                </div>
            </div>
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE</div>
                <div class="character-speech">"I can see you fighting against it. Your magic. You're trying to cage it, force it into submission. But your magic isn't a beast to be tamed, spark. It's a river. You have to learn to flow with it."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('fable_evening_guidance')">Listen to His Advice</button>
            </div>
        `
    },

    fable_evening_guidance: {
        id: '5.4.2',
        title: 'Fable\'s Guidance',
        content: `
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE</div>
                <div class="character-speech">"Here. Let me show you."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Fable steps behind you, and you feel the warmth of his presence at your back. His hands hover near your shoulders, not quite touching, but close enough that you can sense them.
                </div>
            </div>
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE (voice soft, instructive)</div>
                <div class="character-speech">"Reach for your magic. Don't grab it, just reach for it gently. Like you're offering your hand to a friend."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    You do as he says. The violet energy responds, swirling lazily around your fingertips.
                </div>
            </div>
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE</div>
                <div class="character-speech">"Good. Now move with it. Not against it."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('fable_evening_dance')">Follow His Lead</button>
            </div>
        `
    },

    fable_evening_dance: {
        id: '5.4.3',
        title: 'Magic Like Dancing',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Fable's hands finally make contact—one at your waist, the other guiding your arm. The touch is light, respectful, but it sends electricity through you that has nothing to do with magic.
                </div>
            </div>
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE (murmuring close to your ear)</div>
                <div class="character-speech">"Magic is like dancing. You lead, but you also need to listen to your partner. Feel how the energy wants to move? Follow it and guide it gently along with you."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    He guides you through a series of movements—fluid, graceful, almost like a waltz. The violet magic follows your motion, no longer fighting but flowing. It's beautiful. Natural.
                    <br><br>
                    You're acutely aware of every point where Fable's body nearly touches yours. The warmth of his breath against your neck. The way his fingers press just slightly more firmly when correcting your posture.
                </div>
            </div>
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE</div>
                <div class="character-speech">"Perfect! You're a natural, spark. That is, once you stop fighting yourself."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('fable_evening_opening_up')">Turn to Face Him</button>
            </div>
        `,
        effects: { fable: 1 }
    },

    fable_evening_opening_up: {
        id: '5.4.4',
        title: 'Fable Opens Up',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    You turn, and find yourself closer to Fable than you expected. His gray eyes hold something unguarded for once, and you see a glimpse beneath the playful mask he usually wears. You ask him how he knows all of this.
                </div>
            </div>
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE</div>
                <div class="character-speech">"When my magic first manifested, I was alone. Terrified. I thought I was dying. I never had anyone to teach me."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    The confession is quiet, almost vulnerable. It's strange seeing Fable without his usual bravado.
                </div>
            </div>
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE</div>
                <div class="character-speech">"I survived by reading everything I could find. Ancient texts, forbidden histories, anything that might explain what was happening to me. The past became my teacher when no living person would."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('fable_evening_confession')">Listen</button>
            </div>
        `
    },

    fable_evening_confession: {
        id: '5.4.5',
        title: 'Fable\'s Confession',
        content: `
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE</div>
                <div class="character-speech">"That's why I try to be there for others. People like you. No one should have to face this alone, fumbling in the dark, wondering if they're a monster."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    His hand reaches up, fingertips brushing a strand of hair from your face. The gesture is tender, intimate in a way that makes your breath catch.
                </div>
            </div>
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE (voice soft)</div>
                <div class="character-speech">"But you're not a monster, ${gameState.playerName}. You're magnificent. You just need to see yourself that way too."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    The air between you feels thick with possibility. His eyes drop to your lips for just a heartbeat before he catches himself.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('fable_evening_tension')">The Moment Stretches</button>
            </div>
        `,
        effects: { fable: 1 }
    },

    fable_evening_tension: {
        id: '5.4.6',
        title: 'Unspoken Feelings',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Fable's thumb traces along your jawline, a whisper of touch that sets every nerve ending alight. You can feel the magic humming between you, both yours and his, intertwining like they recognize each other.
                </div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    He leans in, just slightly. Close enough that you can see the flecks of blue in his gray eyes. Close enough that if either of you moved just a fraction more...
                </div>
            </div>
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE (whisper)</div>
                <div class="character-speech">"This is dangerous territory, spark."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    But he doesn't pull away. Not yet. The moment stretches, fragile and electric, heavy with everything unspoken.
                    <br><br>
                    Then, with visible effort, Fable steps back. His hand falls away, leaving you feeling suddenly cold.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('fable_evening_goodbye')">Watch Him Retreat</button>
            </div>
        `,
        effects: { fable: 2 }
    },

    fable_evening_goodbye: {
        id: '5.4.7',
        title: 'Goodnight',
        content: `
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE</div>
                <div class="character-speech">"You should rest. Tomorrow always brings new challenges, and you'll need your strength."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    His voice has returned to its usual lightness, but there's something in his eyes that remains soft and genuine.
                </div>
            </div>
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE</div>
                <div class="character-speech">"Good night, spark."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    He bows, it is a gesture that's both playful and sincere, and then he's gone. You're left standing in the training room, your magic still swirling lazily around your fingers, and your heart beating far too fast.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('evening_end')">Retire for the Night</button>
            </div>
        `
    },

    // TRIS'S EVENING SCENE
    tris_evening_entrance: {
        id: '5.5.1',
        title: 'Tris Arrives',
        content: `
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS</div>
                <div class="character-speech">"Of course you're still awake. Do you have any concept of self-preservation?"</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Tris stands in the doorway, arms crossed, her expression full of exasperated concern. She's changed out of her medical robes into simpler evening clothes, her dark hair loose.
                </div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS</div>
                <div class="character-speech">"I didn't work this hard to heal you just so you could ruin my efforts by pushing yourself too far. You need rest, not more training."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('tris_evening_concern')">Try to Explain</button>
            </div>
        `
    },

    tris_evening_concern: {
        id: '5.5.2',
        title: 'Tris\'s Concern',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    You start to protest, but Tris is already crossing the room toward you. She moves with purpose, her medical instincts clearly overriding any personal boundaries.
                </div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS</div>
                <div class="character-speech">"Let me see your hands."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    It's not a request, you realize. You extend your hands, and Tris takes them in hers. Her touch is clinical at first, examining the faint traces of violet magic still clinging to your fingertips. But then her grip softens.
                </div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS (quieter)</div>
                <div class="character-speech">"You're running a fever. Magic use always increases body temperature, but this... you're overdoing it."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    She doesn't let go of your hands. Her thumbs trace small circles on your wrists, just checking your pulse, you tell yourself. But your pulse quickens anyway.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('tris_evening_tension')">Meet Her Eyes</button>
            </div>
        `,
        effects: { tris: 1 }
    },

    tris_evening_tension: {
        id: '5.5.3',
        title: 'Unspoken Concern',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    When you look up, Tris is closer than you expected. Her green eyes hold an intensity that has nothing to do with medicine. There's worry there, yes, but also something deeper. Something carefully guarded.
                </div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS (voice barely above a whisper)</div>
                <div class="character-speech">"You're reckless and I fear you push yourself too hard and don't know when to stop."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    She's still holding your hands. Her breath hitches slightly, and you realize she's fighting something. Some internal battle between her carefully constructed walls and what she actually feels.
                </div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS</div>
                <div class="character-speech">"It reminds me of someone I used to know."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('tris_evening_opening_up')">Ask Who</button>
            </div>
        `
    },

    tris_evening_opening_up: {
        id: '5.5.4',
        title: 'Tris Opens Up',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Tris's expression shifts. The walls crack, just for a moment, and you see raw pain beneath her carefully maintained composure.
                </div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS</div>
                <div class="character-speech">"I joined the Morte Custodi after... after I lost someone I loved."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Her voice cracks on the word 'loved.' She releases your hands suddenly, wrapping her arms around herself as if trying to hold the pieces together.
                    <br><br>
                    You are torn between asking for more info and leaving Tris to her thoughts. Before you can decide she speaks anyway.
                </div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS</div>
                <div class="character-speech">"She was a mage too. Powerful, brilliant, stubborn as hell. But she pushed herself too hard, she got sick and I…no matter what I did I couldn't…"</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Tris can't finish the sentence. The silence that follows is heavy with grief.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('tris_evening_confession')">Reach for Her</button>
            </div>
        `,
        effects: { tris: 1 }
    },

    tris_evening_confession: {
        id: '5.5.5',
        title: 'Tris\'s Pain',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    You step closer, and Tris doesn't pull away. If anything, she leans slightly into your proximity, as if your presence offers some small comfort.
                </div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS (voice breaking)</div>
                <div class="character-speech">"I couldn't save her. Despite all my medical knowledge, all my skill... I couldn't save the one person who mattered most."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    A single tear escapes down her cheek. She wipes it away angrily, as if betrayed by her own emotion.
                </div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS</div>
                <div class="character-speech">"So when I see you pushing yourself like this, risking yourself... I can't. I won't watch someone else destroy themselves because they don't know when to stop."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    The confession hangs between you. Tris looks at you with eyes that are both fierce and fragile, demanding that you understand the weight of what she's saying.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('tris_evening_moment')">Promise to Be Careful</button>
            </div>
        `,
        effects: { tris: 2 }
    },

    tris_evening_moment: {
        id: '5.5.6',
        title: 'A Moment of Connection',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    You promise. Softly, sincerely. You'll be more careful. You'll rest. You'll listen to her medical advice.
                    <br><br>
                    Tris's shoulders relax slightly. She reaches up, and for a moment you think she might touch your face. Her hand hovers in the space between you, trembling with uncertainty. She pulls it away and shakes it briefly before composing herself.
                </div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS (whisper)</div>
                <div class="character-speech">"Good. Don't make me tell you again."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    The words are cool but tinged with a lingering soft honesty.
                    <br><br>
                    Before you can respond, Tris is already pulling away, rebuilding the walls she keeps tightly around her.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('tris_evening_goodbye')">Watch Her Retreat</button>
            </div>
        `
    },

    tris_evening_goodbye: {
        id: '5.5.7',
        title: 'Goodnight',
        content: `
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS (voice steadier now)</div>
                <div class="character-speech">"Get some rest. That's an order. And if I find you out here again tonight, I'm knocking you out myself."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    She's trying for her usual stern tone, but it falls a little flat. The vulnerability from moments ago still lingers in her eyes.
                </div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS</div>
                <div class="character-speech">"Good night."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    She leaves quickly, almost fleeing. But you saw it, the crack in her armor. The glimpse of the grief and care she keeps locked away.
                    <br><br>
                    You're left alone in the training room, but somehow, you don't feel quite so alone anymore.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('evening_end')">Retire for the Night</button>
            </div>
        `
    },

    // CHANCE'S EVENING SCENE
    chance_evening_entrance: {
        id: '5.6.1',
        title: 'Chance Arrives',
        content: `
            <div class="character-scene chance-border fade-in">
                <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
                <div class="character-name">CHANCE</div>
                <div class="character-speech">"Well, well. Look at our dedicated student, all work and no play. That won't do at all."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Chance materializes in the doorway, and you use the word 'materialize' deliberately, because you're not entirely sure they actually walked there. They lean against the frame with effortless grace, their violet eyes twinkling with mischief.
                </div>
            </div>
            <div class="character-scene chance-border fade-in">
                <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
                <div class="character-name">CHANCE</div>
                <div class="character-speech">"You're working too hard, love. All this grim determination and focused intensity, we might as well have two Kits running around.. Where's the joy? The beauty? Magic should be fun!"</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    They push off the doorframe and glide into the room, and you notice the air itself seems to shimmer around them.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('chance_evening_transformation')">Ask "What Are You Doing?"</button> <br>
                <button class="next-button" onclick="goToScene('chance_evening_transformation_flirt')">Walk Toward Them</button>
            </div>
        `
    },

    chance_evening_transformation_flirt: {
        id: '5.6.2a',
        title: 'Chance\'s Magic',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    You set aside your training and walk toward Chance, matching their playful energy with a slight smile of your own.
                </div>
            </div>
            <div class="character-scene chance-border fade-in">
                <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
                <div class="character-name">CHANCE (delighted)</div>
                <div class="character-speech">"Oh? Already intrigued? I like that." They hold out their hand, "Come here, love, let me show you something."</div>
            </div>
            <div class="story-text fade-in">
                <div class="sfx">THE WORLD SHIMMERS AND TRANSFORMS</div>
                <div class="narrator-text">
                    Chance snaps their fingers with a flourish, and the training room dissolves in a shimmering mist. The stone walls become soaring pillars of crystalline stone. The rough floor transforms into polished marble that gleams like starlight in the night.
                    <br><br>
                    Chandeliers materialize overhead, cascading with a thousand tiny twinkling lights. The scent of jasmine fills the air. You're standing in a ballroom that shouldn't exist, one that couldn't exist, and yet it feels more real than anything you've known before.
                </div>
            </div>
            <div class="character-scene chance-border fade-in">
                <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
                <div class="character-name">CHANCE (grinning)</div>
                <div class="character-speech">"Much better, don't you think? But wait, you're not dressed properly at all!"</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('chance_evening_outfit')">Look Down</button>
            </div>
        `,
        effects: { chance: 1 }
    },

    chance_evening_transformation: {
        id: '5.6.2',
        title: 'Chance\'s Magic',
        content: `
            <div class="character-scene chance-border fade-in">
                <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
                <div class="character-name">CHANCE</div>
                <div class="character-speech">"Time to create something beautiful. Watch."</div>
            </div>
            <div class="story-text fade-in">
                <div class="sfx">THE WORLD SHIMMERS AND TRANSFORMS</div>
                <div class="narrator-text">
                    Chance snaps their fingers, and the training room dissolves in a shimmering mist. The stone walls become soaring pillars of crystalline stone. The rough floor transforms into polished marble that gleams like starlight in the night.
                    <br><br>
                    Chandeliers materialize overhead, cascading with a thousand tiny twinkling lights. The scent of jasmine fills the air. You're standing in a ballroom that shouldn't exist, one that couldn't exist, and yet it feels more real than anything you've known before.
                </div>
            </div>
            <div class="character-scene chance-border fade-in">
                <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
                <div class="character-name">CHANCE (grinning)</div>
                <div class="character-speech">"Much better, don't you think? But wait, you're not dressed properly at all!"</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('chance_evening_outfit')">Look Down</button>
            </div>
        `,
        effects: { chance: 1 }
    },

    chance_evening_outfit: {
        id: '5.6.3',
        title: 'Transformed',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Another shimmer, and your training clothes have been replaced. Transformed. You're now wearing something elegant and flowing, it catches the light like smoke. It fits perfectly, moving with you like a second skin before flowing down your legs like a breeze.
                </div>
            </div>
            <div class="character-scene chance-border fade-in">
                <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
                <div class="character-name">CHANCE</div>
                <div class="character-speech">"Perfect. Absolutely stunning. Now you look the part."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Chance themselves have transformed as well. Their usual attire has been replaced with formal evening wear that somehow manages to be both elegant and slightly theatrical. They extend a hand toward you with a theatrical bow.
                </div>
            </div>
            <div class="character-scene chance-border fade-in">
                <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
                <div class="character-name">CHANCE</div>
                <div class="character-speech">"May I have this dance?"</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('chance_evening_dance')">Take Their Hand</button>
                <button class="next-button" onclick="goToScene('chance_evening_dance_curtsy')">Curtsy First</button>
            </div>
        `
    },

    chance_evening_dance_curtsy: {
        id: '5.6.4b',
        title: 'The Dance',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    You perform a curtsy, playing along with the theatricality of it all.
                </div>
            </div>
            <div class="character-scene chance-border fade-in">
                <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
                <div class="character-name">CHANCE (eyes sparkling)</div>
                <div class="character-speech">Chance lets out a laugh and they perform an exaggerated bow in response, before holding out their hand "Shall we?"</div>
            </div>
            <div class="story-text fade-in">
                <div class="sfx">MUSIC FILLS THE AIR</div>
                <div class="narrator-text">
                    You take Chance's hand, and suddenly there is music, soft and haunting, coming from nowhere and everywhere at once. They guide you into the dance with effortless grace. 
                    <br><br>
                    The music swells, and you find yourself moving with them across the marble floor. Their purple eyes never leave yours, and there's something about the way they look at you, full of mischief and warmth, that makes it impossible to look away.
                    <br><br>
                    The dance is effortless. Joyful. Beautiful.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('chance_evening_flirtation')">Continue Dancing</button>
            </div>
        `,
        effects: { chance: 1 }
    },

    chance_evening_dance: {
        id: '5.6.4',
        title: 'The Dance',
        content: `
            <div class="story-text fade-in">
                <div class="sfx">MUSIC FILLS THE AIR</div>
                <div class="narrator-text">
                    The moment your hand touches Chance's, music swells from nowhere and everywhere at once. It's beautiful, haunting and mysterious, the kind of melody that makes your chest ache.
                    <br><br>
                    Chance pulls you into the dance with practiced ease. They lead with confidence, spinning you across the impossible ballroom floor. Their movements are fluid, dreamlike, as if gravity holds them loosely.
                </div>
            </div>
            <div class="character-scene chance-border fade-in">
                <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
                <div class="character-name">CHANCE (smiling)</div>
                <div class="character-speech">"See? This is so much better than exhausting yourself with combat drills. Magic should feel like this; effortless, joyful, beautiful."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    They dip you, and you find yourself staring up into their purple eyes. So full of mischief and yet…something deeper.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('chance_evening_flirtation')">Continue Dancing</button>
            </div>
        `,
        effects: { chance: 1 }
    },

    chance_evening_flirtation: {
        id: '5.6.5',
        title: 'Playful Tension',
        content: `
            <div class="character-scene chance-border fade-in">
                <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
                <div class="character-name">CHANCE (pulling you close)</div>
                <div class="character-speech">"You know, you're quite captivating when you're not scowling with concentration. Has anyone ever told you that?"</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Their hand at your waist tightens slightly. You're pressed close enough to feel the warmth of them, to catch the scent of something sweet and floral, like dreams in a midnight garden.
                </div>
            </div>
            <div class="character-scene chance-border fade-in">
                <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
                <div class="character-name">CHANCE</div>
                <div class="character-speech">"The others, they're all so serious. Training you like you're going to war. But they forget magic is an art, not just a weapon. And you have the soul of an artist."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    They spin you again, and the world blurs into streaks of light and color. When you come back to center, Chance catches you effortlessly, their face closer than before.
                </div>
            </div>
            <div class="character-scene chance-border fade-in">
                <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
                <div class="character-name">CHANCE (voice low, intimate)</div>
                <div class="character-speech">"I could teach you such beautiful things, love. How to walk in dreams. How to make reality bend to your imagination. How to turn your magic into poetry. Just say the word…"</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('chance_evening_moment')">Get lost in the Moment</button>
                <button class="next-button" onclick="goToScene('chance_evening_moment_tease')">Tease Them Back</button>
                <button class="next-button" onclick="goToScene('chance_evening_moment_curious')">I Want to Learn</button>
            </div>
        `,
        effects: { chance: 1 }
    },

    chance_evening_moment_tease: {
        id: '5.6.6a',
        title: 'Suspended in Time',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    You lean closer, matching their energy with a playful smile of your own.
                <div class="character-name">${gameState.playerName.toUpperCase()} (teasing)</div>
                <div class="character-speech">"Big promises from someone who just materialized in my doorway. Can you actually deliver?"</div>
                                </div>
            <div class="character-scene chance-border fade-in">
                <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
                <div class="character-name">CHANCE (delighted laugh)</div>
                <div class="character-speech">"Oh, I like you. Challenge accepted."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    The music slows, becoming something softer, more intimate. The ballroom seems to contract around you until it feels like only the two of you exist. Chance's hand moves to brush a strand of hair from your face, their fingers lingering against your cheek.
                    <br><br>
                    Their lilac eyes hold yours, and for a heartbeat, the playful mask slips. There's something vulnerable beneath it, something almost desperate.
                </div>
            </div>
            <div class="character-scene chance-border fade-in">
                <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
                <div class="character-name">CHANCE (whisper)</div>
                <div class="character-speech">"You see through illusions so easily. What do you desire, I wonder? Not what the others want for you. What do <i>you</i> want?"</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Their thumb traces along your jawline. The question hangs in the air between you, heavy with meaning.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('chance_evening_ending')">The Moment Fades</button>
            </div>
        `,
        effects: { chance: 2 }
    },

    chance_evening_moment_curious: {
        id: '5.6.6b',
        title: 'Suspended in Time',
        content: `
                <div class="character-name">${gameState.playerName.toUpperCase()}</div>
                <div class="character-speech">You lean forward, "Show me. I want to understand this kind of magic."</div>
            <div class="character-scene chance-border fade-in">
                <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
                <div class="character-name">CHANCE (softening)</div>
                <div class="character-speech">"Such genuine curiosity. No fear, no judgment. Just...wonder. That's rare."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    The music slows, becoming something softer, more intimate. The ballroom seems to contract around you until it feels like only the two of you exist. Chance's hand moves to brush a strand of hair from your face, their fingers lingering against your cheek.
                    <br><br>
                    Their lilac eyes hold yours, and for a heartbeat, the playful mask slips. There's something vulnerable beneath it, something almost desperate.
                </div>
            </div>
            <div class="character-scene chance-border fade-in">
                <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
                <div class="character-name">CHANCE (whisper)</div>
                <div class="character-speech">"I could show you everything. Dreams within dreams. Worlds that exist only in possibility. But first...what do <i>you</i> desire? Not what the others want for you. What do you want?"</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Their thumb traces along your jawline. The question hangs in the air between you, heavy with meaning.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('chance_evening_reality')">The Moment Fades</button>
            </div>
        `,
        effects: { chance: 2 }
    },

    chance_evening_moment: {
        id: '5.6.6',
        title: 'Suspended in Time',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    The music slows, becoming softer, more intimate. Chance's movements match the shift, drawing you into something that feels less like dancing and more like floating.
                    <br><br>
                    Their fingers trace patterns on your back through the dream-fabric of your clothing. Each touch sends shivers through you that have nothing to do with cold.
                </div>
            </div>
            <div class="character-scene chance-border fade-in">
                <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
                <div class="character-name">CHANCE (whisper)</div>
                <div class="character-speech">"In dreams, anything is possible. You could be anyone. Go anywhere. Feel anything you desire without fear or consequence."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    They lean in, and you can feel their breath against your ear. The world around you seems to pulse with possibility, the boundaries between dream and reality growing wonderfully thin.
                </div>
            </div>
            <div class="character-scene chance-border fade-in">
                <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
                <div class="character-name">CHANCE</div>
                <div class="character-speech">"What do you desire, I wonder?"</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    The question hangs in the air between you, heavy with implication. Chance's lilac eyes hold yours, waiting, and utterly inviting.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('chance_evening_ending')">The Dream Begins to Fade</button>
            </div>
        `,
        effects: { chance: 2 }
    },

    chance_evening_ending: {
        id: '5.6.7',
        title: 'Return to Reality',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Chance sighs softly, almost regretfully. The music begins to fade, growing distant and dreamy.
                </div>
            </div>
            <div class="character-scene chance-border fade-in">
                <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
                <div class="character-name">CHANCE</div>
                <div class="character-speech">"Alas, even the most beautiful dreams must end. The waking world has its demands, doesn't it?"</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    They step back, and as they do, the ballroom begins to dissolve. The crystal pillars fade like mist. The starlight floor returns to stone. Your elegant clothing shimmers back into your training gear.
                    <br><br>
                    But Chance's hand lingers in yours for just a moment longer, their thumb brushing across your knuckles in a gesture that's both farewell and promise.
                </div>
            </div>
            <div class="character-scene chance-border fade-in">
                <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
                <div class="character-name">CHANCE</div>
                <div class="character-speech">"Remember, love, reality is just the dream we all agree to share, but there is so much more to see."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('chance_evening_goodbye')">Watch the Last Traces Fade</button>
                <button class="next-button" onclick="goToScene('chance_evening_goodbye_reach')">Reach for Them</button>
            </div>
        `
    },

    chance_evening_goodbye_reach: {
        id: '5.6.8a',
        title: 'Goodnight',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    You reach out instinctively, not wanting the moment to end.
                </div>
            </div>
            <div class="character-scene chance-border fade-in">
                <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
                <div class="character-name">CHANCE (catching your hand)</div>
                <div class="character-speech">"Don't worry, we'll dream together again. I promise."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    They lift your hand to their lips and press a gentle kiss to your knuckles. Then, with a playful wink, they blow you a kiss.
                    <br><br>
                    And simply cease to exist.
                    <br><br>
                    No dramatic exit. No puff of smoke. One moment they are there, smiling at you with those lilac eyes, and the next moment they are simply...gone. As if they had never been there at all.
                    <br><br>
                    You stand alone in the training room, the scent of jasmine still lingering in the air. The only proof that any of it happened.
                    <br><br>
                    Had any of it been real?
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('evening_end')">End of Evening</button>
            </div>
        `
    },

    chance_evening_goodbye: {
        id: '5.6.8',
        title: 'Goodnight',
        content: `
            <div class="character-scene chance-border fade-in">
                <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
                <div class="character-name">CHANCE</div>
                <div class="character-speech">"Sweet dreams, ${gameState.playerName}. And if you find yourself wanting to dance again... you know where to find me."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    They blow you a kiss, theatrical and playful. Then they're gone, but not by walking away, but by simply ceasing to be there, as if they were never more than a beautiful dream themselves.
                    <br><br>
                    You're alone in the training room once more. But the scent of jasmine still lingers in the air, and you can still feel the phantom warmth of Chance's hand in yours.
                    <br><br>
                    Had any of it been real? With Chance, you're never quite sure. And perhaps that's exactly how they like it.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('evening_end')">Retire for the Night</button>
            </div>
        `
    },

    // ASH'S EVENING SCENE
    ash_evening_entrance: {
        id: '5.7.1',
        title: 'Ash Arrives',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    The door opens hesitantly, and you turn to see Ash standing in the doorway. She's changed out of the infirmary gown into simple training clothes, her pink hair pulled back in a loose braid. There's still a fragility to her, but also a nervous determination.
                </div>
            </div>
            <div class="character-scene ash-border fade-in">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH (uncertain)</div>
                <div class="character-speech">"I... I couldn't sleep. And I heard sounds from in here. I hope you don't mind if I join you?"</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    She wraps her arms around herself, a gesture that seems half protective, half expectant.
                </div>
            </div>
            <div class="character-scene ash-border fade-in">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH</div>
                <div class="character-speech">"Tris said I should rest, but I feel like... like I need to move. To do something. To feel my magic without fear for once."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('ash_evening_training')">Invite Her In</button>
            </div>
        `
    },

    ash_evening_training: {
        id: '5.7.2',
        title: 'Training with Ash',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    You gesture for her to enter, and Ash steps into the training room with visible relief. She moves to the center of the space, taking a deep breath as if preparing for something monumental.
                </div>
            </div>
            <div class="character-scene ash-border fade-in">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH (nervous)</div>
                <div class="character-speech">"I've never... I mean, I've used my magic before, but never on purpose. Never without immediately feeling guilty or afraid."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    She extends her hand, and small ice crystals begin to form in her palm. They're delicate, beautiful, just like snowflakes suspended in time. Her face transforms as she watches them, wonder replacing the usual tension.
                </div>
            </div>
            <div class="character-scene ash-border fade-in">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH (breathless, amazed)</div>
                <div class="character-speech">"It's... it's beautiful. I never let myself see it before. I was always too busy trying to push it down, make it stop."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('ash_evening_delight')">Watch Her Explore</button>
            </div>
        `,
        effects: { ash: 1 }
    },

    ash_evening_delight: {
        id: '5.7.3',
        title: 'Ash\'s Delight',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Encouraged by your presence, Ash grows bolder. Frost spreads across the floor in intricate patterns, but it's not chaotic or dangerous, it's artistic. Controlled. She creates shapes in the air: flowers of ice, delicate spirals, crystalline birds that hover for a moment before melting away.
                    <br><br>
                    Her laughter is unexpected, light and genuine. It transforms her entire face, making her look younger, freer.
                </div>
            </div>
            <div class="character-scene ash-border fade-in">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH (delighted)</div>
                <div class="character-speech">"I can't believe this is the same power they told me was a curse. It doesn't feel evil. It feels... like breathing. Like this was always meant to be part of me."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    You show her your own magic in response, you let violet energy dance between your fingers. For a moment, your powers intertwine, ice and lightning creating something entirely new and beautiful.
                </div>
            </div>
            <div class="character-scene ash-border fade-in">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH (softly)</div>
                <div class="character-speech">"Thank you. For not treating me like I'm broken or dangerous. For just... being here with me."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('ash_evening_confession')">Continue Practicing Together</button>
            </div>
        `,
        effects: { ash: 1 }
    },

    ash_evening_confession: {
        id: '5.7.4',
        title: 'Ash\'s Uncertainty',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    As the training continues, Ash's expression grows more contemplative. The joy from moments ago fades into something more complicated—worry, confusion, doubt.
                </div>
            </div>
            <div class="character-scene ash-border fade-in">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH (troubled)</div>
                <div class="character-speech">"I still don't know what all of this means. What I'm supposed to do now."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    She lets her magic fade, wrapping her arms around herself again.
                </div>
            </div>
            <div class="character-scene ash-border fade-in">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH</div>
                <div class="character-speech">"I can't go back home. Not after learning what they did to me. What they were willing to do. But I'm not sure I can join your fight against the Crown either."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Her pink eyes meet yours, searching for understanding.
                </div>
            </div>
            <div class="character-scene ash-border fade-in">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH (voice breaking)</div>
                <div class="character-speech">"Those are still my parents. My family. The people who raised me, even if they... even if they hurt me. How do I fight against everything they believe in? How do I become the enemy of everyone I've ever known?"</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('ash_evening_comfort')">Step Closer</button>
            </div>
        `
    },

    ash_evening_comfort: {
        id: '5.7.5',
        title: 'Offering Comfort',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    You move closer to Ash, and she doesn't pull away. You tell her she doesn't have to decide everything tonight. That it's okay to be uncertain, to grieve what she's lost while being grateful for what she's found.
                </div>
            </div>
            <div class="character-scene ash-border fade-in">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH (tears in her eyes)</div>
                <div class="character-speech">"You make it sound so simple. But nothing about this feels simple."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    A tear escapes down her cheek, and without thinking, you reach up to brush it away. The moment your fingers touch her skin, the air between you shifts. Becomes charged with something more than just magic.
                    <br><br>
                    Ash's breath catches. Her pink eyes widen, vulnerable and open in a way you haven't seen before.
                </div>
            </div>
            <div class="character-scene ash-border fade-in">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH (whisper)</div>
                <div class="character-speech">"I don't know what I'm doing. With any of this. With... with you."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    She's close enough that you can see the faint dusting of freckles across her nose, the way her lips part slightly as she struggles to find words.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('ash_evening_tension')">The Moment Stretches</button>
            </div>
        `,
        effects: { ash: 1 }
    },

    ash_evening_tension: {
        id: '5.7.6',
        title: 'Romantic Tension',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Neither of you moves. The training room feels suddenly smaller, more intimate. Ash's magic responds to her emotions and tiny ice crystals start forming in the air around you both like stars.
                    <br><br>
                    Her hand trembles as she reaches up, fingers hovering near your cheek, mirroring your earlier gesture. For a heartbeat, you think she might close the distance between you.
                </div>
            </div>
            <div class="character-scene ash-border fade-in">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH (barely audible)</div>
                <div class="character-speech">"I've never... I mean, they never let me..."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    She can't finish the sentence. Her cheeks flush pink, almost matching her hair. The vulnerability in her expression is overwhelming, it is raw and honest and terrifying for someone who's spent her whole life being told to suppress everything.
                    <br><br>
                    The moment hangs between you, fragile and electric. Everything feels possible and impossible at once.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('ash_evening_retreat')">Wait</button>
            </div>
        `,
        effects: { ash: 2 }
    },

    ash_evening_retreat: {
        id: '5.7.7',
        title: 'Ash Retreats',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Then, suddenly, Ash steps back. Her hand falls away, and she wraps her arms around herself again once again protective and defensive.
                </div>
            </div>
            <div class="character-scene ash-border fade-in">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH (flustered)</div>
                <div class="character-speech">"I'm sorry. I shouldn't have... I mean, you probably don't..."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    She's backing toward the door, embarrassment and fear warring across her features. The ice crystals in the air begin to fall like snow.
                </div>
            </div>
            <div class="character-scene ash-border fade-in">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH (quickly)</div>
                <div class="character-speech">"I should go. Let you finish training. I'm sorry for interrupting. And for... for everything else."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('ash_evening_goodbye')">Watch Her Go</button>
            </div>
        `
    },

    ash_evening_goodbye: {
        id: '5.7.8',
        title: 'Goodnight',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Ash reaches the door, her hand on the handle. She pauses, looking back over her shoulder. Her expression is a complicated mix of longing, fear, and shy hope.
                </div>
            </div>
            <div class="character-scene ash-border fade-in">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH (softly)</div>
                <div class="character-speech">"Thank you. For tonight. For making me feel... normal. Human. Like I'm more than just a problem to be solved."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Before you can respond, she's gone, the door closing softly behind her. But the ice crystals she created still linger in the air, catching the light like promises of something beautiful and fragile.
                    <br><br>
                    You're left standing in the training room with the ghost of her touch still tingling on your skin and the memory of her almost-confession hanging in the air.
                    <br><br>
                    Whatever is beginning between you and Ash, it's complicated. Delicate. And entirely uncertain. But somehow, that makes it feel all the more real.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('evening_end')">Retire for the Night</button>
            </div>
        `
    },

    // ENDING SCENE
    evening_end: {
        id: '5.8.0',
        title: 'End of Evening',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    You finally leave the training room, your mind full of everything that just transpired. The safehouse is quiet, most of its inhabitants already asleep.
                    <br><br>
                    As you make your way to your quarters, you find yourself thinking about all that transpired tonight. And you know that whatever tomorrow brings, one thing is sure: your relationships with the Morte Custodi are growing more substantial and more complicated. More intimate.
                    <br><br>
                    And somehow, that doesn't frighten you as much as it probably should.
                    <br><br>
                    <strong>END OF DEMO</strong>
                </div>
            </div>
       
        `
    }
};
