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
            
            // Check each character
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
                <button class="next-button" onclick="goToScene('kit_evening_training_tease')">Tease Him About Watching</button>
                <button class="next-button" onclick="goToScene('kit_evening_training_grateful')">Thank Him for Coming</button>
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

    kit_evening_training_tease: {
        id: '5.3.2b',
        title: 'Teasing Kit',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    You can't help but smile at his serious demeanor. Despite yourself, you find his intensity endearing rather than intimidating.
                </div>
            </div>
            <div class="character-scene fade-in">
                <div class="player-speech">"Were you watching me this whole time? I didn't realize I had an audience for my terrible form."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    For a moment, Kit looks caught off guard. A faint flush creeps up his neck, and you realize you've hit closer to the truth than you intended.
                </div>
            </div>
            <div class="character-scene kit-border fade-in">
                <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                <div class="character-name">KIT (clearing throat)</div>
                <div class="character-speech">"I was... making sure you weren't going to hurt yourself. Your technique needs work."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    His attempt at returning to his professional tone is undermined by the way he avoids your eyes. You've successfully flustered the usually composed Kit Alderidge.
                </div>
            </div>
            <div class="character-scene kit-border fade-in">
                <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                <div class="character-name">KIT (clearing throat)</div>
                <div class="character-speech">"Well, since I'm here anyway, I suppose some guidance wouldn't hurt."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('kit_evening_training_close')">Begin Sparring</button>
            </div>
        `,
        effects: { kit: 1 }
    },

    kit_evening_training_grateful: {
        id: '5.3.2c',
        title: 'Gratitude',
        content: `
            <div class="character-scene fade-in">
                <div class="player-speech">"Thank you, Kit. I... I wasn't expecting company, but I'm glad you're here."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Your sincerity seems to catch him off guard. His amber eyes soften, and for a moment, the walls he keeps carefully constructed seem to lower just a fraction.
                </div>
            </div>
            <div class="character-scene kit-border fade-in">
                <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                <div class="character-name">KIT</div>
                <div class="character-speech">"You don't need to thank me. We're... we look out for each other here."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    He hesitates on the word 'we,' as if he's not quite sure where he fits in that equation, or perhaps where you fit in his carefully ordered world.
                </div>
            </div>
            <div class="character-scene kit-border fade-in">
                <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                <div class="character-name">KIT</div>
                <div class="character-speech">"Besides, late-night training sessions can be dangerous without a spotter. Come on."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('kit_evening_training_close')">Begin Sparring</button>
            </div>
        `,
        effects: { kit: 2 }
    },

    kit_evening_training_close: {
        id: '5.3.2d',
        title: 'Close Combat Training',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Kit moves like water, each strike deliberate and controlled. But this time, there's an added awareness between you both. The air feels charged with something unspoken.
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
                    He releases your wrist, but the ghost of his touch lingers. The lesson continues, but now every correction, every adjustment of your stance feels more intimate. You're hyper-aware of his presence, the way he moves around you, the occasional brush of his fingers when he corrects your form.
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
                <button class="next-button" onclick="goToScene('kit_evening_understanding')">Share Your Understanding</button>
                <button class="next-button" onclick="goToScene('kit_evening_comfort')">Offer Comfort</button>
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

    kit_evening_understanding: {
        id: '5.3.5b',
        title: 'Shared Understanding',
        content: `
            <div class="character-scene fade-in">
                <div class="player-speech">"I understand that feeling. But you're not the same person who wore that uniform, Kit."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Kit's eyes widen slightly at your words. You can see him processing them, turning them over in his mind like stones in a river.
                </div>
            </div>
            <div class="character-scene kit-border fade-in">
                <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                <div class="character-name">KIT</div>
                <div class="character-speech">"How can you be so certain? You barely know me."</div>
            </div>
            <div class="character-scene fade-in">
                <div class="player-speech">"I know enough. I know you're here, training with me instead of getting rest. I know you care more than you let on."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    For a moment, Kit is quiet. The vulnerability in his expression is raw, unguarded. Then, slowly, he reaches out and touches your hand.
                </div>
            </div>
            <div class="character-scene kit-border fade-in">
                <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                <div class="character-name">KIT (quietly)</div>
                <div class="character-speech">"Thank you."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('kit_evening_moment')">Hold His Gaze</button>
                <button class="next-button" onclick="goToScene('kit_evening_goodbye_warm')">Let the Moment Settle</button>
            </div>
        `,
        effects: { kit: 2 }
    },

    kit_evening_comfort: {
        id: '5.3.5c',
        title: 'Offering Comfort',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Without thinking, you reach out and place your hand on his arm. Kit tenses for a moment, then gradually relaxes under your touch.
                </div>
            </div>
            <div class="character-scene fade-in">
                <div class="player-speech">"The past doesn't have to define us, Kit. What matters is who you choose to be now."</div>
            </div>
            <div class="character-scene kit-border fade-in">
                <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                <div class="character-name">KIT</div>
                <div class="character-speech">"Easy to say. Harder to believe."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    But even as he says it, his eyes soften. Your touch seems to ground him, pulling him back from whatever dark memories were threatening to surface.
              <br>    Kit stares at you for a long moment, something shifting in his expression. Surprise, gratitude, and something deeper you can't quite name.
                    </div>
            </div>

            <div class="character-scene kit-border fade-in">
                <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                <div class="character-name">KIT (voice rough)</div>
                <div class="character-speech">"How do you do that? You actually make it seem...possible"</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('kit_evening_moment')">Move Closer</button>
                <button class="next-button" onclick="goToScene('kit_evening_goodbye_warm')">Give Him Space</button>
            </div>
        `,
        effects: { kit: 3 }
    },

    kit_evening_moment: {
        id: '5.3.5d',
        title: 'A Tender Moment',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    The air between you shifts, becoming something electric and tender. Kit's breathing has changed, deeper and more careful. You're close enough to see the gold flecks in his amber eyes, close enough to feel the warmth radiating from him.
                </div>
            </div>
            <div class="character-scene kit-border fade-in">
                <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                <div class="character-name">KIT (barely a whisper)</div>
                <div class="character-speech">"This is dangerous territory."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    His hand rises to cup your cheek, thumb brushing gently across your skin. For a heartbeat, the world narrows to just this moment, this touch, this possibility hanging between you.
                </div>
            </div>
            <div class="character-scene kit-border fade-in">
                <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                <div class="character-name">KIT</div>
                <div class="character-speech">"You're going to be the death of me, \${gameState.playerName}."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    But he doesn't pull away. Not this time.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('kit_evening_goodbye_intimate')">Lean Into His Touch</button>
            </div>
        `,
        effects: { kit: 3 }
    },

    kit_evening_goodbye_warm: {
        id: '5.3.6b',
        title: 'Warm Farewell',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Kit takes a step back, but his expression is softer now, more open than you've ever seen it. The walls are still there, but they're not as high as before.
                </div>
            </div>
            <div class="character-scene kit-border fade-in">
                <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                <div class="character-name">KIT</div>
                <div class="character-speech">"I should let you get some rest. But... thank you. For listening. For understanding."</div>
            </div>
            <div class="character-scene fade-in">
                <div class="player-speech">"Anytime, Kit. We're in this together, remember?"</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    A genuine smile crosses his features – small, but real.
                </div>
            </div>
            <div class="character-scene kit-border fade-in">
                <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                <div class="character-name">KIT</div>
                <div class="character-speech">"I... I like the sound of that. Goodnight, \${gameState.playerName}."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('evening_end')">Retire for the Night</button>
            </div>
        `,
        effects: { kit: 1 }
    },

    kit_evening_goodbye_intimate: {
        id: '5.3.6c',
        title: 'Intimate Goodbye',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Kit's thumb traces along your jawline, and you lean into the touch. For a moment that feels like eternity, you exist in this bubble of warmth and possibility.
                </div>
            </div>
            <div class="character-scene kit-border fade-in">
                <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                <div class="character-name">KIT (voice soft)</div>
                <div class="character-speech">"I want to stay. But if I do..."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Understanding passes between you. This isn't rejection – it's restraint born of caring too much, not too little.
                </div>
            </div>
            <div class="character-scene kit-border fade-in">
                <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                <div class="character-name">KIT</div>
                <div class="character-speech">"When this is over... when we're not running for our lives..."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    It's a promise, unspoken but understood. He presses a gentle kiss to your forehead before pulling roughly away, as though surprised by his own impulsiveness.
                </div>
            </div>
            <div class="character-scene kit-border fade-in">
                <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                <div class="character-name">KIT</div>
                <div class="character-speech">"Sweet dreams, \${gameState.playerName}."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('evening_end')">Retire for the Night</button>
            </div>
        `,
        effects: { kit: 4 }
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
                <div class="character-speech">"Rest well, \${gameState.playerName}."</div>
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
                <div class="character-speech">"I can see you fighting against your magic. You're trying to cage it, force it into submission. But your magic isn't a beast to be tamed, spark. It's a river. You have to learn to flow with it."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('fable_evening_eager')">Ask Him to Teach You</button>
                <button class="next-button" onclick="goToScene('fable_evening_skeptical')">Question His Methods</button>
                <button class="next-button" onclick="goToScene('fable_evening_guidance')">Listen Quietly</button>
            </div>
        `
    },

    fable_evening_eager: {
        id: '5.4.1a',
        title: 'Eager Student',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    You tell Fable that you want to learn from him and his eyes light up with pleasure at your enthusiasm. His smile becomes warmer, more genuine.
                </div>
            </div>
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE</div>
                <div class="character-speech">"Now that's the spirit I like to see."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    He steps closer, his movements fluid and confident. There's something infectious about his enthusiasm. He spins shadows around him, ghostly figures dancing in the dim light.
                </div>
            </div>
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE</div>
                <div class="character-speech">"Your willingness to learn tells me everything I need to know. Let me show you something truly beautiful."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('fable_evening_personal_lesson')">Focus on the Lesson</button>
                <button class="next-button" onclick="goToScene('fable_evening_guidance')">Ask About His Experience</button>
            </div>
        `,
        effects: { fable: 1 }
    },

    fable_evening_skeptical: {
        id: '5.4.1b',
        title: 'Questioning Approach',
        content: `

            <div class="story-text fade-in">
                <div class="narrator-text">
                    You ask Fable how you know his plan will really work and he chuckles, not offended by your disbelief but amused by it.
                </div>
            </div>
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE</div>
                <div class="character-speech">"A healthy dose of skepticism. I respect that. But remember, control and partnership aren't mutually exclusive, spark."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    He extends his hand, and silver light begins to dance between his fingers, controlled, precise, but flowing like water.
                </div>
            </div>
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE</div>
                <div class="character-speech">"See this? It's disciplined, but not forced. I'm guiding it, not strangling it. There's a difference between control and tyranny, even over your own power."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('fable_evening_convinced')">Acknowledge His Point</button>
                <button class="next-button" onclick="goToScene('fable_evening_guidance')">Remain Cautious</button>
            </div>
        `,
        effects: { fable: 1 }
    },

    fable_evening_personal_lesson: {
        id: '5.4.2a',
        title: 'Personal Instruction',
        content: `
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE</div>
                <div class="character-speech">"Here, let me show you something I rarely teach others."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Fable moves behind you, his presence warm and reassuring. You feel honored by his trust. Surely that is the reason your heart beats a little faster.
                </div>
            </div>
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE (voice gentle)</div>
                <div class="character-speech">"Close your eyes. Feel your magic not as something separate from you, but as part of your very essence. Let me guide you to that connection."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    His hands hover near yours, and you can feel both his magic and yours responding to each other. It's intimate in a way that transcends the physical.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('fable_evening_dance')">Trust His Guidance</button>
            </div>
        `,
        effects: { fable: 2 }
    },

    fable_evening_convinced: {
        id: '5.4.2b',
        title: 'Gradual Understanding',
        content: `
            <div class="character-scene fade-in">
                <div class="player-speech">"I... I can see what you mean. Can you show me how to find that balance?"</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Fable nods approvingly, clearly pleased that his demonstration has reached you.
                </div>
            </div>
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE</div>
                <div class="character-speech">"I can show you. Just trust me."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    There's genuine hope in his voice, and you feel a warmth that has nothing to do with magic.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('fable_evening_guidance')">Begin the Lesson</button>
            </div>
        `,
        effects: { fable: 1 }
    },

    fable_evening_guidance: {
        id: '5.4.2',
        title: 'Fable\'s Guidance',
        content: `
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE</div>
                <div class="character-speech">"Here. Let me..."</div>
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
                    Fable's hands finally make contact, one at your waist, the other guiding your arm. The touch is light, respectful, but it sends electricity through you that has nothing to do with magic.
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
                <div class="character-speech">"But you're not a monster, \${gameState.playerName}. You're magnificent. You just need to see yourself that way too."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    The air between you feels thick with possibility. His eyes drop to your lips for just a heartbeat before he catches himself.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('fable_evening_bold_move')">Step Closer</button>
                <button class="next-button" onclick="goToScene('fable_evening_vulnerability')">Share Your Own Fears</button>
                <button class="next-button" onclick="goToScene('fable_evening_tension')">Let the Moment Build</button>
            </div>
        `,
        effects: { fable: 1 }
    },

    fable_evening_bold_move: {
        id: '5.4.5a',
        title: 'Bold Approach',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    You step closer, closing the distance between you. Fable's breath catches, his eyes widening slightly at your boldness.
                </div>
            </div>
            <div class="character-scene fade-in">
                <div class="player-speech">"Maybe I don't want you to see me as just another student, Fable."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    The confession hangs in the air between you. Fable's composure wavers, and for once, he seems at a loss for words.
                </div>
            </div>
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE (voice rough)</div>
                <div class="character-speech">"You're playing with fire, spark. And I'm not sure either of us is ready to burn."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    But he doesn't step away. His hand moves to your waist, fingers barely touching but sending electricity through you anyway.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('fable_evening_intimate')">Hold His Gaze</button>
                <button class="next-button" onclick="goToScene('fable_evening_tension')">Give Him an Out</button>
            </div>
        `,
        effects: { fable: 3 }
    },

    fable_evening_vulnerability: {
        id: '5.4.5b',
        title: 'Shared Vulnerability',
        content: `
            <div class="character-scene fade-in">
                <div class="player-speech">"I understand that loneliness. Sometimes I feel like...like I'll never really belong anywhere."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Fable's expression softens completely. The playful mask drops entirely, revealing something raw and genuine.
                </div>
            </div>
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE (voice tender)</div>
                <div class="character-speech">"You're not alone anymore."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    He reaches out, taking your hands in his. The gesture is gentle, comforting, but charged with something deeper.
                </div>
            </div>
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE</div>
                <div class="character-speech">"Your openness humbles me, \${gameState.playerName}. And one day I'll be able to give it back in return."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('fable_evening_connection')">Squeeze His Hands</button>
                <button class="next-button" onclick="goToScene('fable_evening_tension')">Thank Him</button>
            </div>
        `,
        effects: { fable: 2 }
    },

    fable_evening_intimate: {
        id: '5.4.6a',
        title: 'Intense Moment',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    The space between you disappears completely. Fable's hand slides fully around your waist, pulling you closer. His other hand comes up to cup your face.
                </div>
            </div>
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE (whisper against your lips)</div>
                <div class="character-speech">"You're going to be the end of me, aren't you?"</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    The question hangs in the charged air. Your magic and his pulse around you both, silver and violet intertwining in impossible patterns.
                </div>
            </div>
            <div class="character-scene fade-in">
                <div class="player-speech">"Only if you let me be."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    For a heartbeat, you think he might close that final distance. But then responsibility crashes back over him like a cold wave.
                </div>
            </div>
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE (reluctantly)</div>
                <div class="character-speech">"Not here. Not yet. But... soon."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('fable_evening_goodbye_promise')">Accept the Promise</button>
            </div>
        `,
        effects: { fable: 4 }
    },

    fable_evening_connection: {
        id: '5.4.6b',
        title: 'Deep Connection',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    You squeeze his hands gently, and Fable's eyes close for a moment as if savoring the simple contact.
                </div>
            </div>
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE</div>
                <div class="character-speech">"This connection we have... it's not just about magic, is it?"</div>
            </div>
            <div class="character-scene fade-in">
                <div class="player-speech">"No. It's something more."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    He brings your joined hands up between you, studying the way your fingers intertwine as if memorizing the pattern.
                </div>
            </div>
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE (voice full of wonder)</div>
                <div class="character-speech">"I never expected to find someone who could see past the performance to the person underneath."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('fable_evening_goodbye_warm')">Treasure the Moment</button>
            </div>
        `,
        effects: { fable: 3 }
    },

    fable_evening_goodbye_promise: {
        id: '5.4.7a',
        title: 'A Promise Made',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Fable steps back reluctantly, but his eyes never leave yours. The promise hangs between you like a golden thread.
                </div>
            </div>
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE</div>
                <div class="character-speech">"Until we can explore this properly... know that you've enchanted me completely, \${gameState.playerName}."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    He lifts your hand to his lips, pressing a soft kiss to your knuckles that sends heat racing through you.
                </div>
            </div>
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE</div>
                <div class="character-speech">"Sweet dreams, spark. Dream of possibilities."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('evening_end')">Watch Him Leave</button>
            </div>
        `,
        effects: { fable: 2 }
    },

    fable_evening_goodbye_warm: {
        id: '5.4.7b',
        title: 'Warm Understanding',
        content: `
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE</div>
                <div class="character-speech">"Thank you for seeing me, truly seeing me. It's a gift I don't take lightly."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    He releases your hands slowly, as if reluctant to break the connection.
                </div>
            </div>
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE</div>
                <div class="character-speech">"Rest well tonight. And remember - you're never alone in this journey."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    His smile is soft and genuine as he bows slightly, a gesture of respect that feels more intimate than any grand gesture could.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('evening_end')">Bid Him Goodnight</button>
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
                <button class="next-button" onclick="goToScene('tris_evening_concern')">Apologize for Worrying Her</button>
                <button class="next-button" onclick="goToScene('tris_evening_defensive')">Insist You're Fine</button>
                <button class="next-button" onclick="goToScene('tris_evening_playful')">Tease Her About Checking On You</button>
            </div>
        `
    },

    tris_evening_defensive: {
        id: '5.5.1b',
        title: 'Standing Your Ground',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    You straighten up, trying to project confidence despite the exhaustion weighing on your limbs.
                </div>
            </div>
            <div class="character-scene fade-in">
                <div class="player-speech">"I'm fine, Tris. Really. I need to practice. I can't afford to lose control again."</div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS (eyes narrowing)</div>
                <div class="character-speech">"Fine? You call this fine?"</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    She crosses the room in three sharp strides, her medical instincts overriding any notion of personal space. Before you can protest, she's grabbed your wrist, her fingers pressing against your pulse point.
                </div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS (voice tight)</div>
                <div class="character-speech">"Elevated heart rate. Fever. Magic exhaustion. Yes, you're doing spectacularly well."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Her sarcasm is sharp, but there's genuine worry beneath it. She doesn't let go of your wrist.
                </div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS (softer)</div>
                <div class="character-speech">"You don't have to prove anything by destroying yourself. That's not strength. That's just... stupid."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('tris_evening_concern')">Let Her Check You Over</button>
            </div>
        `,
        effects: { tris: 1 }
    },

    tris_evening_playful: {
        id: '5.5.1c',
        title: 'Lightening the Mood',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Despite your exhaustion, you can't help but smile at her concern. There's something endearing about the way she fusses.
                </div>
            </div>
            <div class="character-scene fade-in">
                <div class="player-speech">"That's sweet, Tris. I didn't know you cared so much."</div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS (flustered)</div>
                <div class="character-speech">"I wasn't—I'm not—This is purely professional concern!"</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    A faint blush creeps up her neck, betraying her words. She crosses her arms tighter, as if that will somehow restore her composure.
                </div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS</div>
                <div class="character-speech">"Someone has to make sure you don't keel over from exhaustion. Apparently, you lack basic self-preservation instincts."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Despite her stern words, there's a softness in her eyes that wasn't there before. She's trying to maintain her professional distance, but you can see the cracks forming.
                </div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS (quieter)</div>
                <div class="character-speech">"Just... let me check you over."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('tris_evening_concern')">Accept Her Care</button>
            </div>
        `,
        effects: { tris: 2 }
    },

    tris_evening_concern: {
        id: '5.5.2',
        title: 'Tris\'s Concern',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    You start to protest, but Tris is already examining you.
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
                <button class="next-button" onclick="goToScene('tris_evening_confession')">Offer Comfort</button>
                <button class="next-button" onclick="goToScene('tris_evening_share_grief')">Share Your Own Loss</button>
                <button class="next-button" onclick="goToScene('tris_evening_reassure')">Reassure Her You're Different</button>
            </div>
        `,
        effects: { tris: 1 }
    },

    tris_evening_share_grief: {
        id: '5.5.4b',
        title: 'Shared Pain',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    You find yourself speaking before you fully think it through. About your own losses. About the people you've failed to save. About the weight of carrying on when those you love are gone.
                </div>
                    Tris's eyes widen, something shifting in her expression. Recognition. Understanding. The walls she keeps so carefully maintained crack just a little more.
                </div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS (voice barely above a whisper)</div>
                <div class="character-speech">"I thought... I thought no one could understand..."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    She takes a shaky breath, and you see her fighting for control. For the first time since you've known her, Tris looks truly vulnerable.
                </div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS</div>
                <div class="character-speech">"It's been three years. You'd think it would hurt less by now."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Without thinking, you step closer. This time when you reach for her, she doesn't pull away.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('tris_evening_confession')">Let the Moment Settle</button>
            </div>
        `,
        effects: { tris: 2 }
    },

    tris_evening_reassure: {
        id: '5.5.4c',
        title: 'A Promise',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    You meet her eyes steadily, letting her see your sincerity. You tell her that you are different and that you will listen to her advice. You promise that you won't push yourself to the point of no return.
                </div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS</div>
                <div class="character-speech">"Promises are easy to make. Harder to keep when you're caught up in the moment, when you think you can push just a little further..."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Her voice trails off, lost in memory. You can see the pain etched in every line of her face.
                </div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Something in Tris's expression softens. She reaches out almost unconsciously, her fingers brushing against your arm in a gesture that's both hesitant and seeking.
                </div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS (whisper)</div>
                <div class="character-speech">"You need to listen..."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    The vulnerability in her voice catches you off guard. This isn't just about you. It's about the person she lost, about all the times her advice went unheeded.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('tris_evening_confession')">Promise Again</button>
            </div>
        `,
        effects: { tris: 2 }
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
                <button class="next-button" onclick="goToScene('tris_evening_promise')">Promise to Be More Careful</button>
                <button class="next-button" onclick="goToScene('tris_evening_guilt_acknowledgment')">Acknowledge Her Pain</button>
                <button class="next-button" onclick="goToScene('tris_evening_moment')">Reach for Her Hand</button>
            </div>
        `,
        effects: { tris: 2 }
    },

    tris_evening_promise: {
        id: '5.5.5a',
        title: 'Making a Promise',
        content: `
            <div class="character-scene fade-in">
                <div class="player-speech">"I promise, Tris. I'll be more careful. I'll listen to your medical advice. I won't push myself to the point of collapse anymore."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Relief floods Tris's features. The tension that's been holding her rigid begins to ease.
                </div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS</div>
                <div class="character-speech">"You mean it? You're not just saying that to placate me?"</div>
            </div>
            <div class="character-scene fade-in">
                <div class="player-speech">"I mean it. Your expertise has kept me alive this long. I trust you to keep me safe."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Something shifts in Tris's expression—gratitude, respect, and something deeper that she quickly tries to hide.
                </div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS (voice soft)</div>
                <div class="character-speech">"Thank you. That... that means more to me than you know."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('tris_evening_moment')">Share a Look of Understanding</button>
            </div>
        `,
        effects: { tris: 2 }
    },

    tris_evening_guilt_acknowledgment: {
        id: '5.5.5b',
        title: 'Understanding Her Pain',
        content: `
            <div class="character-scene fade-in">
                <div class="player-speech">"Tris, you carry so much guilt that isn't yours to bear. You can't save everyone, and the weight of trying will destroy you."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Tris's composure cracks. More tears threaten to fall, but she fights them back.
                </div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS (voice breaking)</div>
                <div class="character-speech">"But if I don't try, who will? If I don't fight for every life, who am I?"</div>
            </div>
            <div class="character-scene fade-in">
                <div class="player-speech">"You're someone who cares deeply. Someone who's already saved countless lives. Someone who deserves compassion, including from yourself."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Tris looks at you as if seeing something she hadn't noticed before—someone who understands her burden without trying to take it away.
                </div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS (whisper)</div>
                <div class="character-speech">"How do you see me so clearly when I can barely see myself?"</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('tris_evening_deeper_connection')">Step Closer</button>
                <button class="next-button" onclick="goToScene('tris_evening_moment')">Offer Support</button>
            </div>
        `,
        effects: { tris: 3 }
    },

    tris_evening_deeper_connection: {
        id: '5.5.6a',
        title: 'Deeper Understanding',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    You step closer, and this time Tris doesn't pull away. Her walls, built so carefully over years of loss, show cracks that let in light.
                </div>
                <div class="narrator-text">
                    Tris reaches out tentatively, her fingers barely brushing yours. The touch is electric, full of unspoken understanding.
                </div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS</div>
                <div class="character-speech">"I've been alone with this for so long. I'd forgotten what it felt like to have someone understand."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    The moment stretches between you, intimate and fragile. You both seem to realize you're standing closer than before, her hand still touching yours.
                </div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS (barely audible)</div>
                <div class="character-speech">"I should go. This is... this is dangerous territory for me."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('tris_evening_goodbye_intimate')">Ask Her to Stay</button>
                <button class="next-button" onclick="goToScene('tris_evening_goodbye')">Let Her Go</button>
            </div>
        `,
        effects: { tris: 4 }
    },

    tris_evening_goodbye_intimate: {
        id: '5.5.7a',
        title: 'Intimate Goodbye',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    You ask her to stay with you, just for a moment longer. Tris's breath catches. Her careful composure wavers, revealing the longing she's been hiding.
                </div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS</div>
                <div class="character-speech">"You don't know what you're asking. I'm not... I don't do this."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    She stays. For several heartbeats, you stand together in charged silence, her hand warm in yours. Finally, reluctantly, she pulls away.
                </div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS (voice thick with emotion)</div>
                <div class="character-speech">"Goodnight. And remember your promise, please take care of yourself. For both our sakes."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('evening_end')">Watch Her Leave</button>
            </div>
        `,
        effects: { tris: 3 }
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
                <button class="next-button" onclick="goToScene('tris_evening_goodbye')">Give Her Space</button>
                <button class="next-button" onclick="goToScene('tris_evening_hold_hand')">Take Her Hand</button>
                <button class="next-button" onclick="goToScene('tris_evening_close_distance')">Step Closer</button>
            </div>
        `
    },

    tris_evening_hold_hand: {
        id: '5.5.6b',
        title: 'A Gentle Touch',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    As her hand hovers uncertainly between you, you gently take it in yours. Her fingers are cool and trembling slightly. For a moment, she freezes, as if surprised by your boldness.
                </div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS (breathless)</div>
                <div class="character-speech">"What are you..."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    But she doesn't pull away. Instead, her fingers curl slightly around yours, returning the gentle pressure. You can feel her pulse racing beneath your touch.
                </div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS (whisper)</div>
                <div class="character-speech">"I shouldn't... we shouldn't..."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    But even as she says it, she's not letting go. Her eyes meet yours, green and conflicted and full of longing she's trying so hard to suppress.
                    <br><br>
                    The moment stretches, intimate and fragile. Just the two of you in the quiet training room, hands intertwined, both afraid to break whatever this is becoming.
                </div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS</div>
                <div class="character-speech">"I can't...I just...can't"</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    The confession is raw and honest. You squeeze her hand gently, trying to convey without words that you understand. That you're not going anywhere.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('tris_evening_goodbye')">Let the Moment End</button>
            </div>
        `,
        effects: { tris: 2 }
    },

    tris_evening_close_distance: {
        id: '5.5.6c',
        title: 'Closing the Gap',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    You take a small step closer, closing the distance between you. Close enough that you can see the fine details of her face, the slight furrow between her brows, the way her lips part slightly in surprise.
                </div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS</div>
                <div class="character-speech">"What are you doing?"</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Her voice is barely a whisper. She doesn't step back, doesn't create distance. If anything, she seems frozen, caught between fear and want.
                </div>
            </div>
            <div class="character-scene fade-in">
                <div class="player-speech">"Showing you that I'm here. That I'm real."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Her breath catches. That hovering hand of hers finally makes contact, fingertips brushing against your cheek with devastating gentleness. Like she's afraid you might shatter.
                </div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS (voice breaking)</div>
                <div class="character-speech">"I don't know how to do this. How to care about someone again."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    The admission hangs in the air between you. Her hand is still touching your face, trembling slightly. You can see the war happening behind her eyes, between her desire to protect herself and her desire to let someone in.
                    <br><br>
                    For a heartbeat, you think she might kiss you. The tension is electric, overwhelming. But then reality crashes back in.
                </div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS (whisper)</div>
                <div class="character-speech">"I can't. I'm sorry."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('tris_evening_goodbye')">Respect Her Boundaries</button>
            </div>
        `,
        effects: { tris: 2 }
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
                <div class="character-speech">"Sweet dreams, \${gameState.playerName}. And if you find yourself wanting to dance again... you know where to find me."</div>
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
                <button class="next-button" onclick="goToScene('ash_evening_encouraging')">Encourage Her Courage</button>
                <button class="next-button" onclick="goToScene('ash_evening_gentle')">Offer Gentle Support</button>
                <button class="next-button" onclick="goToScene('ash_evening_training')">Invite Her to Train Together</button>
            </div>
        `
    },

    ash_evening_encouraging: {
        id: '5.7.1a',
        title: 'Encouraging Strength',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                  You tell Ash that it's brave of her to want to face her fears. It takes courage to build something when you feel broken. Her eyes widen at your words. You see her straighten slightly, as if your belief in her strength is helping her find it within herself.
                </div>
            </div>
            <div class="character-scene ash-border fade-in">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH (voice stronger)</div>
                <div class="character-speech">"I... I never thought of it that way. I've been so focused on what I've lost, I forgot I might be gaining something too."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Her magic responds to her changing emotional state, soft energy beginning to shimmer around her hands like smoke caught in a gentle breeze.
                </div>
            </div>
            <div class="character-scene ash-border fade-in">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH (with wonder)</div>
                <div class="character-speech">"Look at it... it's not angry anymore..."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('ash_evening_confident_training')">Train with Confidence</button>
                <button class="next-button" onclick="goToScene('ash_evening_training')">Practice Together</button>
            </div>
        `,
        effects: { ash: 2 }
    },

    ash_evening_gentle: {
        id: '5.7.1b',
        title: 'Gentle Understanding',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    You tell Ash that you believe in her strength. Relief washes over her features. She seems to breathe easier, the tension in her shoulders relaxing.
                </div>
            </div>
            <div class="character-scene ash-border fade-in">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH (gratefully)</div>
                <div class="character-speech">"Thank you for not making me feel weak for being afraid."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    She moves tentatively through the room, and you notice her magic responding to her calmer state, it is a soft blue light that pulses gently with her heartbeat.
                </div>
            </div>
            <div class="character-scene ash-border fade-in">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH</div>
                <div class="character-speech">"Maybe we could start small? I'd like to see if my magic can be gentle again instead of... destructive."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('ash_evening_careful_training')">Start Very Slowly</button>
                <button class="next-button" onclick="goToScene('ash_evening_training')">Encourage Her Creativity</button>
            </div>
        `,
        effects: { ash: 1 }
    },

    ash_evening_confident_training: {
        id: '5.7.2a',
        title: 'Confident Practice',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Emboldened by your encouragement, Ash moves to the center of the room with more confidence than you've seen from her before.
                </div>
            </div>
            <div class="character-scene ash-border fade-in">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH</div>
                <div class="character-speech">"Show me what you were working on. I want to try to match it."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    You demonstrate a simple energy manipulation, and Ash watches intently. When she tries to replicate it, her magic flows smoothly, responding to her and following her intentions without resistance.
                </div>
            </div>
            <div class="character-scene ash-border fade-in">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH (excited)</div>
                <div class="character-speech">"I did it! I actually did it without anything going wrong!"</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Her joy is infectious, and you find yourself smiling at her breakthrough moment.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('ash_evening_delight')">Celebrate Her Success</button>
            </div>
        `,
        effects: { ash: 2 }
    },

    ash_evening_careful_training: {
        id: '5.7.2b',
        title: 'Careful Progress',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    You move slowly and deliberately, showing Ash the most basic exercises. She follows your lead, her movements tentative but growing more sure with each success.
                </div>
            </div>
            <div class="character-scene ash-border fade-in">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH (whisper)</div>
                <div class="character-speech">"It's working. It's actually listening to me instead of fighting me."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Tears glisten in her eyes—not from sadness, but from relief. She's rediscovering the gentle side of her abilities.
                </div>
            </div>
            <div class="character-scene ash-border fade-in">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH</div>
                <div class="character-speech">"I thought I'd never feel safe with my magic. Thank you for helping me find a way to start."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('ash_evening_delight')">Enjoy the Moment</button>
            </div>
        `,
        effects: { ash: 2 }
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
                <button class="next-button" onclick="goToScene('ash_evening_empathy')">Share Understanding</button>
                <button class="next-button" onclick="goToScene('ash_evening_choice_support')">Support Her Right to Choose</button>
                <button class="next-button" onclick="goToScene('ash_evening_comfort')">Offer Physical Comfort</button>
            </div>
        `
    },

    ash_evening_empathy: {
        id: '5.7.4a',
        title: 'Shared Understanding',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Ash looks up at you with surprise, as if she hadn't expected such understanding.
                </div>
            </div>
            <div class="character-scene ash-border fade-in">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH</div>
                <div class="character-speech">"Do you think I'm a fool for still caring for them? Despite what they did?"</div>
            </div>
            <div class="character-scene fade-in">
                <div class="player-speech">"Love doesn't just disappear because someone hurts you. That doesn't make you weak, it makes you human. And complex. And worthy of compassion, especially from yourself."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Tears start to flow freely down her cheeks, but they seem cleansing rather than despairing.
                </div>
            </div>
            <div class="character-scene ash-border fade-in">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH (voice thick with emotion)</div>
                <div class="character-speech">"Thank you."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('ash_evening_understanding_comfort')">Reassure Her Further</button>
                <button class="next-button" onclick="goToScene('ash_evening_comfort')">Offer a Shoulder</button>
            </div>
        `,
        effects: { ash: 2 }
    },

    ash_evening_choice_support: {
        id: '5.7.4b',
        title: 'Supporting Her Agency',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Relief visibly washes over Ash's features. Her shoulders relax as if a weight has been lifted.
                </div>
            </div>
            <div class="character-scene ash-border fade-in">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH</div>
                <div class="character-speech">"Everyone seems to expect me to know what I want to do with my life now that everything's changed."</div>
            </div>
            <div class="character-scene fade-in">
                <div class="player-speech">"Your life, your choice, your timeline."</div>
            </div>
            <div class="character-scene ash-border fade-in">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH (gratefully)</div>
                <div class="character-speech">"You're the first person who's told me it's okay to not have answers yet. Everyone else acts like I should be ready to rebel or ready to forgive, but I'm just... not ready for anything yet."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('ash_evening_patience_comfort')">Emphasize Patience</button>
                <button class="next-button" onclick="goToScene('ash_evening_comfort')">Offer Support</button>
            </div>
        `,
        effects: { ash: 2 }
    },

    ash_evening_understanding_comfort: {
        id: '5.7.5a',
        title: 'Deep Understanding',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    You remind Ash that it's a gift that she still wants to love others at all. She moves closer to you, drawn by your understanding and acceptance.
                </div>
            </div>
            <div class="character-scene ash-border fade-in">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH</div>
                <div class="character-speech">"I feel like you see me. Not as a victim or a potential rebel, just... as me."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    The honesty in her voice is stunning. You realize this moment of connection means everything to someone who's felt so lost and misunderstood.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('ash_evening_tension')">Hold the Moment</button>
            </div>
        `,
        effects: { ash: 2 }
    },

    ash_evening_patience_comfort: {
        id: '5.7.5b',
        title: 'Patient Support',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Ash's eyes shine with unshed tears of gratitude. She nods slowly, taking in your words.
                </div>
            </div>
            <div class="character-scene ash-border fade-in">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH</div>
                <div class="character-speech">"You have no idea how much I needed to hear that. I've been carrying so much pressure to figure everything out immediately."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    She reaches out hesitantly, as if asking permission to seek comfort.
                </div>
            </div>
            <div class="character-scene ash-border fade-in">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH (whisper)</div>
                <div class="character-speech">"Can I...? I just need someone to tell me it's going to be okay."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('ash_evening_tender_moment')">Welcome Her Closer</button>
                <button class="next-button" onclick="goToScene('ash_evening_tension')">Offer Reassurance</button>
            </div>
        `,
        effects: { ash: 2 }
    },

    ash_evening_tender_moment: {
        id: '5.7.6a',
        title: 'Tender Connection',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    You open your arms and Ash steps into them gratefully. She's trembling slightly, but not from fear, from relief.
                </div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    She melts into the embrace, and you feel her magic responding, it's warm, gentle, and cool. It wraps around both of you like a soft blanket.
                </div>
            </div>
            <div class="character-scene ash-border fade-in">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH (muffled against your shoulder)</div>
                <div class="character-speech">"I think... I think I..."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    She hesitates, her voice barely above a whisper, too afraid to say the words out loud.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('ash_evening_mutual_feelings')">Admit Your Own Feelings</button>
                <button class="next-button" onclick="goToScene('ash_evening_gentle_response')">Reassure Her Gently</button>
            </div>
        `,
        effects: { ash: 2 }
    },

    ash_evening_mutual_feelings: {
        id: '5.7.7a',
        title: 'Mutual Confession',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    You gently cup Ash's face, your thumbs brushing away her tears. "It's okay to feel this way. You're not alone."
                </div>
            </div>
            <div class="character-scene ash-border fade-in">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH (breathless)</div>
                <div class="character-speech">"Really?"</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Her magic pulses brighter, soft light dancing between you like visible joy. The moment feels precious, fragile, and full of possibility.
                </div>
            </div>
            <div class="character-scene ash-border fade-in">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH (tears of happiness)</div>
                <div class="character-speech">"I never thought... after everything that's happened..."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('ash_evening_goodbye_romantic')">Share a Tender Moment</button>
            </div>
        `,
        effects: { ash: 4 }
    },

    ash_evening_gentle_response: {
        id: '5.7.7b',
        title: 'Gentle Encouragement',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Ash's expression softens with relief and gratitude. She doesn't pull away from the embrace.
                </div>
            </div>
            <div class="character-scene ash-border fade-in">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH</div>
                <div class="character-speech">"Thank you for not making me feel foolish."</div>
            </div>
            <div class="character-scene ash-border fade-in">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH (softly)</div>
                <div class="character-speech">"You make me feel like I might be able to trust my heart again someday."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('ash_evening_goodbye_hopeful')">Encourage Her Hope</button>
            </div>
        `,
        effects: { ash: 2 }
    },

    ash_evening_goodbye_romantic: {
        id: '5.7.8a',
        title: 'Romantic Farewell',
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    You brush a strand of pink hair from her face, and Ash leans into the touch. The moment is tender, full of new possibility.
                </div>
            </div>
            <div class="character-scene ash-border fade-in">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH</div>
                <div class="character-speech">"Maybe when I'm ready... when I've figured out who I want to be..."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    She rises on her toes and presses a soft, hesitant kiss to your cheek, it is a promise of what might bloom...when she's ready.
                </div>
            </div>
            <div class="character-scene ash-border fade-in">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH (whisper)</div>
                <div class="character-speech">"Sweet dreams, \$playerName."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('evening_end')">Watch Her Leave</button>
            </div>
        `,
        effects: { ash: 1 }
    },

    ash_evening_goodbye_hopeful: {
        id: '5.7.8b',
        title: 'Hopeful Goodbye',
        content: `
            <div class="character-scene ash-border fade-in">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH</div>
                <div class="character-speech">"Thank you for tonight. For helping me feel strong again, and for reminding me that it's okay to take time."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    She steps back, but her expression is brighter than when she first arrived, now it is hopeful instead of fearful.
                </div>
            </div>
            <div class="character-scene ash-border fade-in">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH</div>
                <div class="character-speech">"I think I might actually be able to sleep tonight."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Her smile is genuine and warm as she heads toward the door, carrying herself with more confidence than before.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="goToScene('evening_end')">Bid Her Goodnight</button>
            </div>
        `,
        effects: { ash: 1 }
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
