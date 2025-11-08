import { ENVIRON_IMAGES, CHARACTER_IMAGES } from '../constants.js';
import { diceSystem } from '../diceSystem.js';
import { relationshipManager } from '../relationshipManager.js';
import { gameState } from '../gameState.js';

export const chapter3Scenes = {  
chapter3_morning: {
    id: '3.1.0',
    title: 'Chapter 3 Morning - First Morning Choice',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                After fitful bouts of sleep, you wake to unfamiliar stillness. You are more surprised by what you don't hear, than by what you do. There are no bells. No crowds. No smoke. For a moment, panic grips you, before your memory floods back: the pyre, the escape, violet flames dancing at your fingertips. The Morte Custodi. You're in their safehouse, wrapped in rough blankets that smell of herbs and old smoke.
                <br><br>
                Pale morning light filters through cracks in the stone ceiling. You hear muffled voices from beyond the door, it would appear that the rebels are already awake. Your body aches from yesterday's chaos, and beneath your skin, that strange power still hums, waiting.
            </div>
        </div>
        <div class="choices-container fade-in">
            <h3 style="color: #ffd700; margin-bottom: 15px;">How do you face your first morning with the Morte Custodi?</h3>
            <button class="choice-button" onclick="makeChoice('eager_morning', 'eager_morning_response')">Get up immediately. It's time to learn about your power</button>
            <button class="choice-button" onclick="makeChoice('cautious_morning', 'cautious_morning_response')">Listen at the door first. Try to hear what they're saying</button>
            <button class="choice-button" onclick="makeChoice('exhausted_morning', 'exhausted_morning_response')">Stay in bed a while longer. You need time to process everything</button>
        </div>
    `
},

eager_morning_response: {
    id: '3.1.1',
    title: 'Eager Morning Response',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                You throw off the blankets and stand, magical energy crackling through your limbs despite the soreness in your body. The power inside you feels like a caged storm, but you're tired of being afraid of it.
                <br><br>
                You push open the heavy door to find the main room already alive with activity. Chance is lounging in a chair holding a steaming cup in their hands, Kit stands over a map, marking positions as Tris organizes medical supplies with her usual efficiency, and Fable stands over a long table...
            </div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (looking up with a warm smile)</div>
            <div class="character-speech">"Ah, our newest recruit rises! I was just telling Chance you'd probably sleep until noon after the chaos from yesterday. Glad to be wrong. Ready to begin your first day?"</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('morning_gathering')">Next</button>
        </div>
    `,
    effects: { fable: 1, kit: 1 }
},

cautious_morning_response: {
    id: '3.1.2',
    title: 'Cautious Morning Response',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                You creep to the door, pressing your ear against the worn wood. Voices drift through and they're discussing...you.
            </div>
            <div class="dialogue">
                <div class="character-name">KIT'S VOICE (measured, tactical):</div>
                <div class="character-speech">"—power is unstable. We should start with basic control exercises before anything else."</div>
            </div>
            <div class="dialogue">
                <div class="character-name">CHANCE'S VOICE (amused):</div>
                <div class="character-speech">"Oh, won't you let our new friend breathe first, Captain? Not everyone needs your boot camp treatment on day one."</div>
            </div>
            <div class="dialogue">
                <div class="character-name">TRIS'S VOICE (clinical):</div>
                <div class="character-speech">"Almost all of their magical channels are probably still raw from yesterday's outburst. Push too hard and your newest soldier will burn out, Kit. Or explode."</div>
            </div>
            <div class="narrator-text">
                You hear footsteps approaching the door. You scramble back, hoping to get out of the way before the person reaches your room, but you realize that it is too late to retreat right as the door swings open...
            </div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('caught_listening')">Next</button>
        </div>
    `,
    effects: { chance: 1, kit: -1 }
},

exhausted_morning_response: {
    id: '3.1.3',
    title: 'Exhausted Morning Response',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                You pull the blankets higher, not quite ready to face this new reality just yet. Yesterday feels like a nightmare and a dream tangled together. You were supposed to die. Instead, you're... what? A rebel? A weapon? A recruit? You don't even know.
                <br><br>
                The door creaks open softly. You close your eyes, feigning sleep.
            </div>
        </div>
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE (whispering, amused)</div>
            <div class="character-speech">"I know you're awake, love. Your breathing changed the moment I walked in."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('chance_morning_talk')">Next</button>
        </div>
    `,
    effects: { chance: 1, fable: -1 }
},

caught_listening: {
    id: '3.2.0',
    title: 'Caught Listening',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                The door swings open. Kit stands there, one eyebrow raised, clearly unsurprised to find you eavesdropping.
            </div>
        </div>
        <div class="character-scene kit-border fade-in">
            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
            <div class="character-name">KIT (dry)</div>
            <div class="character-speech">"If you wanted to know what we thought, you could have just asked. We don't keep secrets from our own. Come. Breakfast first, then we discuss your training."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('morning_gathering')">Next</button>
        </div>
    `,
    effects: { kit: -1 }
},

chance_morning_talk: {
    id: '3.3.0',
    title: 'Chance Morning Talk - Response Choice',
    content: `
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE (sitting on the edge of your bed)</div>
            <div class="character-speech">"The others are arguing about how to train you. Kit wants discipline, Fable wants inspiration, Tris wants to poke at you like a specimen. All terribly predictable. But that power of yours...it doesn't follow the usual rules."</div>
        </div>
        <div class="choices-container fade-in">
            <h3 style="color: #ffd700; margin-bottom: 15px;">How do you respond to Chance?</h3>
            <button class="choice-button" onclick="makeChoice('curious_power', 'curious_power_response')">Sit up, interested. "What do you mean, it doesn't follow the rules?"</button>
            <button class="choice-button" onclick="makeChoice('defensive_power', 'defensive_power_response')">Pull back warily. "Have you been watching my dreams?"</button>
            <button class="choice-button" onclick="makeChoice('flirty_morning', 'flirty_morning_response')">Smirk. "Dreaming about me already? That was fast."</button>
        </div>
    `
},

curious_power_response: {
    id: '3.3.1',
    title: 'Curious Power Response',
    content: `
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE (leaning forward, intrigued)</div>
            <div class="character-speech">"Most magic follows patterns, for example: elements like fire can bend to Kit's will, while healing flows like water through Tris. Fable uses illusions. But...yours? Yours is chaos given form. Wild, primal, and tied to something deeper than learned spells. In my dreams, it looked like violet lightning trying to become a constellation. <br> Now come on, time to get up and face the day."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('morning_gathering')">Next</button>
        </div>
    `,
    effects: { chance: 1 }
},

defensive_power_response: {
    id: '3.3.2',
    title: 'Defensive Power Response',
    content: `
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE (raising hands in mock surrender)</div>
            <div class="character-speech">"Not intentionally, love. But when someone's magic burns as bright as yours, it tends to... leak into the dreamscape. Like a bonfire seen through fog. Hard to miss unless you choose not to look at it. But don't worry, your secrets are your own. I just see the shapes, not the substance. <br>Now come on, time to get up and face the day."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('morning_gathering')">Next</button>
        </div>
    `,
    effects: { chance: -1 }
},

flirty_morning_response: {
    id: '3.3.3',
    title: 'Flirty Morning Response',
    content: `
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE (grinning wider)</div>
            <div class="character-speech">"Oh, but I've been dreaming about you since before we met, love. Occupational hazard of being a dream weaver, I see all the most interesting people before they arrive. <br> Now come on, time to get up and face the day."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('morning_gathering')">Next</button>
        </div>
    `,
    effects: { chance: 1 }
},

morning_gathering: {
    id: '3.4.0',
    title: 'Morning Gathering',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                The main room of the safehouse feels different in daylight, it is less mysterious and more lived-in. Maps cover every surface, marked with red X's, scribbled notes, and cryptic symbols. Weapons lean against walls next to stacks of books. It's equal parts war room and library.
                <br><br>
                The four members of the Morte Custodi have gathered around the central table. There's bread and preserves, nothing fancy, but your stomach growls at the sight. When did you last eat a proper meal?
            </div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (gesturing to an empty chair)</div>
            <div class="character-speech">"Sit, eat. We need to discuss your training, and despite what Kit believes, people think better on full stomachs."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('training_discussion')">Next</button>
        </div>
    `
},

training_discussion: {
    id: '3.5.0',
    title: 'Training Discussion',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                As you eat, the four rebels exchange glances with each other, clearly continuing an earlier debate through looks alone. Finally, Fable clears his throat, and speaks.
            </div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE</div>
            <div class="character-speech">"Your magic is... unique. Most mages channel specific elements or schools, like dreams or healing. Yours seems to be pure force, shaped by emotion and will. That makes it powerful, but also dangerous, both to enemies and allies alike."</div>
        </div>
        <div class="character-scene kit-border fade-in">
            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
            <div class="character-name">KIT (direct)</div>
            <div class="character-speech">"You need discipline. Control. My method involves structured exercises, repetition, and practice until it becomes instinct. Magic is a weapon. Treat it as such."</div>
        </div>
        <div class="character-scene tris-border fade-in">
            <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
            <div class="character-name">TRIS (clinical)</div>
            <div class="character-speech">"Your magical channels are inflamed from yesterday's outburst. I should examine them properly, understand the flow patterns. Medical approach first, then training."</div>
        </div>
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE (lounging back)</div>
            <div class="character-speech">"Or... we could try the fun approach. Magic responds to emotion, yes? Let's explore what makes yours react. Much more pleasant than Kit's boot camp, Fable's lecture, or Tris's prodding."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('choose_trainer')">Next</button>
        </div>
    `
},

choose_trainer: {
    id: '3.6.0',
    title: 'Choose Trainer - Major Training Choice',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                Four different approaches, four different teachers. Your magic stirs restlessly under your skin, as if it too is curious about what comes next...
            </div>
        </div>
        <div class="choices-container fade-in">
            <h3 style="color: #ffd700; margin-bottom: 15px;">Who will be your first teacher?</h3>
            <button class="choice-button" onclick="makeChoice('train_with_kit', 'kit_training_start')">Train with Kit: learn discipline and control through combat drills</button>
            <button class="choice-button" onclick="makeChoice('train_with_fable', 'fable_training_start')">Train with Fable: explore the deeper nature of magic and history</button>
            <button class="choice-button" onclick="makeChoice('train_with_tris', 'tris_training_start')">Let Tris examine you: understand the medical reality of your power</button>
            <button class="choice-button" onclick="makeChoice('train_with_chance', 'chance_training_start')">Train with Chance: explore magic through dreams and meditation</button>
        </div>
    `
},

kit_training_start: {
    id: '3.7.0',
    title: 'Kit Training Start',
    getContent: () => {
        return `
        <div class="story-text fade-in">
            <div class="narrator-text">
                Kit leads you to a cleared space in the safehouse's lower level. Stone walls bear scorch marks and blade scars, all evidence of previous training sessions. He's laid out a series of objects: candles, water bowls, stones, and metal rods.
            </div>
        </div>
        <div class="character-scene kit-border fade-in">
            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
            <div class="character-name">KIT (serious)</div>
            <div class="character-speech">"Magic without discipline is chaos. Chaos gets people killed. We'll start simple. You manifest your power without destroying anything. Light one candle. Just one. Not the room, not yourself. One. Candle."</div>
        </div>
        ${diceSystem.createDiceRoll(
            'Precise Control', 
            'Focus your chaotic magic into a single, controlled point. Success means you are learning discipline. Failure means... property damage.',
            'magic_control',
            'kit_training_success',
            'kit_training_failure',
            10,
            'magic_control',
            'control'
        )}
    `;
    },
    effects: { kit: 1 }
},

kit_training_success: {
    id: '3.7.1',
    title: 'Kit Training Success',
    content: `
        <div class="story-text fade-in">
            <div class="sfx">A SINGLE VIOLET FLAME DANCES ON THE CANDLE</div>
            <div class="narrator-text">
                You breathe slowly, feeling the storm inside you. Instead of letting it rage, you guide it. Through your efforts, it becomes a single thread of power drawn from the tempest. Violet fire blooms on the candle's wick, but now it is steady and controlled.
                <br><br>
                Kit nods, and you could swear there's approval in his amber eyes.
            </div>
        </div>
        <div class="character-scene kit-border fade-in">
            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
            <div class="character-name">KIT (impressed)</div>
            <div class="character-speech">"Good. Very good. You have natural discipline buried under that chaos. We can work with this."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('stat_allocation')">Next</button>
        </div>
    `,
    effects: { kit: 1 }
},

kit_training_failure: {
    id: '3.7.2',
    title: 'Kit Training Failure',
    content: `
        <div class="story-text fade-in">
            <div class="sfx"VIOLET FIRE EXPLODES ACROSS ALL CANDLES</div>
            <div class="narrator-text">
                You try to focus, but the power surges like a wild thing. All twelve candles burst into violet flames simultaneously. The water bowls boil. The stones crack.
                <br><br>
                Kit swiftly channels his own magic, he sends out a wave of magic that instantly douses the flames before they can spread.
            </div>
        </div>
        <div class="character-scene kit-border fade-in">
            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
            <div class="character-name">KIT (patient but firm)</div>
            <div class="character-speech">"Expected. Your power wants to be everything at once. We'll try again. And again. Until you learn that true strength comes from restraint."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('stat_allocation')">Next</button>
        </div>
    `,
    effects: { kit: 1 }
},

fable_training_start: {
    id: '3.8.0',
    title: 'Fable Training Start',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                Fable leads you to his study, it sits in a corner of the safehouse that feels older than the rest. Ancient books line the walls, and symbols you don't recognize are carved into the wooden beams. You go to ask about them, but before you can he pours two cups of something that smells like a bitter memory and turns to you with a warm smile.
            </div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (thoughtful)</div>
            <div class="character-speech">"Kit will teach you to cage your power. Useful, but... incomplete. Magic born from rebellion doesn't want to be caged, it wants to be understood. Tell me, what did you feel when your power first awakened? Not the fear. But beneath that?"</div>
        </div>
        <div class="choices-container fade-in">
            <h3 style="color: #ffd700; margin-bottom: 15px;">What did you feel when your magic erupted?</h3>
            <button class="choice-button" onclick="makeChoice('felt_freedom', 'fable_freedom_response')">Freedom, it felt like breaking chains I didn't know I wore</button>
            <button class="choice-button" onclick="makeChoice('felt_rage', 'fable_rage_response')">Rage, pure rage at the Inquisition, the crowd, the whole corrupt system</button>
            <button class="choice-button" onclick="makeChoice('felt_belonging', 'fable_belonging_response')">Belonging, it felt right...like I finally became who I was meant to be</button>
        </div>
    `,
    effects: { fable: 1 }
},

fable_freedom_response: {
    id: '3.8.1',
    title: 'Fable Freedom Response',
    content: `
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (eyes brightening)</div>
            <div class="character-speech">"Freedom. Yes, I felt that too. The Crown fears us because we remind them that their chains are not unbreakable. But that's the thing about chains, they break eventually. Let me show you something..."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('fable_demonstration')">Next</button>
        </div>
    `,
    effects: { fable: 1 }
},

fable_rage_response: {
    id: '3.8.2',
    title: 'Fable Rage Response',
    content: `
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (nodding knowingly)</div>
            <div class="character-speech">"Rage can be a powerful fuel, true, but it also burns everything, including the one who wields it. I've seen countless mages consumed by their own fury. The trick is to transform that rage into something more... refined. Focused. But not blind destruction."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('fable_demonstration')">Next</button>
        </div>
    `,
    effects: { fable: 1 }
},

fable_belonging_response: {
    id: '3.8.3',
    title: 'Fable Belonging Response',
    content: `
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (softly)</div>
            <div class="character-speech">"Belonging... that's the deepest sensation of all. To finally feel whole and complete. The Crown tries to make us believe we're broken or corrupted from birth. But you're not, quite the opposite, you're finally becoming whole."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('fable_demonstration')">Next</button>
        </div>
    `,
    effects: { fable: 1 }
},

fable_demonstration: {
    id: '3.9.0',
    title: 'Fable Demonstration',
    getContent: () => {
        return `
        <div class="story-text fade-in">
            <div class="narrator-text">
                Fable extends his hand, and dark shadows gather around his fingers. It is not ordinary darkness, but something deeper, that shimmers like an oil slick. The shadows take shape, flowing into the form of soldiers, rebels, and friends long gone. They move like memories given form, dancing around Fable before disappearing into the darkness once more.
            </div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE</div>
            <div class="character-speech">"My magic is born from memory and...loss, but that's not common among mages. Typically their magic is elemental, healing, or something psychic like Chance's dreams. But yours feels different, it's...raw potential. Few throughout history have wielded magic like yours, it's unique, which also means it's powerful. But we want to focus your power and shape your magic into something you can control. But that doesn't come from fighting who you are. Listen to your magic, what does it want to become?"</div>
        </div>
        ${diceSystem.createDiceRoll(
            'Harmonize with Magic', 
            'Listen to the pulse of magic within you. Can you find harmony with it?',
            'magic_control',
            'magic_harmony_success',
            'magic_harmony_failure',
            12,
            'magic_control',
            'control'
        )}
    `;
    }
},

magic_harmony_success: {
    id: '3.9.1',
    title: 'Magic Harmony Success',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                Something shifts inside you. Instead of wrestling with your magic, you breathe and let it flow through you like a river finding its natural course. Violet light dances around you in graceful patterns, no longer chaotic but harmonious, natural. You feel a connection with the world around you, sensing Fable's presence and seeing his aura glowing gently around him.
            </div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (impressed)</div>
            <div class="character-speech">"There it is. You're not trying to cage it anymore. Magic isn't a tool to be controlled, no it's a part of you, as natural as breathing. Yours doesn't want to be contained. It's elemental, psychic, and...well...who knows what else..."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('stat_allocation')">Next</button>
        </div>
    `,
    effects: { fable: 1 }
},

magic_harmony_failure: {
    id: '3.9.2',
    title: 'Magic Harmony Failure',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                The magic surges unpredictably. Lightning crackles from your fingertips, arcing across the room in brilliant, dangerous bursts. The power feels wild, untamed, it is like a storm refusing to be calmed. You feel an overwhelming sense of grief wash over you for just a moment, before the wave recedes and your magic begins to calm.
            </div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (ducking a stray bolt)</div>
            <div class="character-speech">"Woah! Don't force it! Breathe. There it is. Your magic responds to emotion. The more you panic, the more it rebels. We'll try a different approach next time, it's alright, one step at a time."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('stat_allocation')">Next</button>
        </div>
    `,
    effects: { fable: 1 }
},

tris_training_start: {
    id: '3.10.0',
    title: 'Tris Training Start',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                Tris leads you to her infirmary, gesturing for you to sit on the examination table. Her hands glow with soft green light as she begins her assessment.
            </div>
        </div>
        <div class="character-scene tris-border fade-in">
            <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
            <div class="character-name">TRIS (clinical, focused)</div>
            <div class="character-speech">"Hold still. I need to trace your magical pathways. This might feel... uncomfortable for a moment. Your channels are damaged." <br> She notices your intrigued reaction <br> "Yes, magical channels, you can imagine them like veins that have carried too much blood too quickly through your body, I'm sure they're sore at the very least, and possibly torn if you really pushed yourself..."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                Her magic touches yours, and you feel a strange sensation, something like cold water running through your veins or ice in your gut. It's chilling and she looks at you with a frown, concentrating.
            </div>
        </div>
        <div class="character-scene tris-border fade-in">
            <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
            <div class="character-name">TRIS</div>
            <div class="character-speech">"Odd...your magic doesn't flow through normal channels. It's... everywhere. In your blood, your bones, your breath. Most mages have rivers of power. You have an ocean trying to fit in a cup. No wonder it explodes."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('tris_discovery')">Next</button>
        </div>
    `,
    effects: { tris: 1 }
},

tris_discovery: {
    id: '3.11.0',
    title: 'Tris Discovery - Response Choice',
    content: `
        <div class="character-scene tris-border fade-in">
            <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
            <div class="character-name">TRIS (hint of excitement)</div>
            <div class="character-speech">"This is... unprecedented. Your magical signature suggests you're not channeling power from outside yourself. You're...generating it. Like a star creating its own light. Dangerous, but... remarkable."</div>
        </div>
        <div class="choices-container fade-in">
            <h3 style="color: #ffd700; margin-bottom: 15px;">How do you respond to this revelation?</h3>
            <button class="choice-button" onclick="makeChoice('tris_worried', 'tris_worried_response')">Look worried. "Is that... bad? Am I going to explode?"</button>
            <button class="choice-button" onclick="makeChoice('tris_curious', 'tris_curious_response')">Lean forward, interested. "What does that mean for my training?"</button>
            <button class="choice-button" onclick="makeChoice('tris_proud', 'tris_proud_response')">Smile slightly. "So you're saying I'm special, then?"</button>
        </div>
    `
},

tris_worried_response: {
    id: '3.11.1',
    title: 'Tris Worried Response',
    content: `
        <div class="character-scene tris-border fade-in">
            <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
            <div class="character-name">TRIS (almost reassuring)</div>
            <div class="character-speech">"Explode? Unlikely but...possible, if untrained. But you haven't yet, which suggests natural resilience. Your magic seems to be...changing, shifting as it flows through your body. That's unique, but powerful, it means you aren't confined to just one type of magic. For now, I can teach you exercises to strengthen your channels and create better containment. Think of it as... building a stronger vessel for the ocean inside of you. Then we can focus your power in a direction."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('stat_allocation')">Next</button>
        </div>
    `,
    effects: { tris: 1 }
},

tris_curious_response: {
    id: '3.11.2',
    title: 'Tris Curious Response',
    content: `
        <div class="character-scene tris-border fade-in">
            <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
            <div class="character-name">TRIS (approving)</div>
            <div class="character-speech">"It means conventional methods won't work. We need to build from the inside out, we will strengthen your natural barriers and create release valves for excess power. I have some theories, where did I put that medical journal..."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('stat_allocation')">Next</button>
        </div>
    `,
    effects: { tris: 1 }
},

tris_proud_response: {
    id: '3.11.3',
    title: 'Tris Proud Response',
    content: `
        <div class="character-scene tris-border fade-in">
            <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
            <div class="character-name">TRIS</div>
            <div class="character-speech">"Whether that's an advantage or a death sentence remains to be seen. Either way, pride won't keep you from burning yourself out. Discipline might, if we're lucky."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('stat_allocation')">Next</button>
        </div>
    `,
    effects: { tris: -1 }
},

chance_training_start: {
    id: '3.12.0',
    title: 'Chance Training Start',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                Chance leads you to a quiet corner filled with cushions and low burning candles. The air smells of lavender, chamomile, and something else...something that makes your eyelids heavy. You sink down easily into one of the large cushions on the floor.
            </div>
        </div>
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE (settling onto cushions gracefully)</div>
            <div class="character-speech">"The others will try to hammer your magic into shape, but I prefer a gentler approach. Dreams and magic are cousins, you see, love, they both reshape reality through will and desire." <span style="font-style: italic;">(sits down on a cushion across from you)</span> "Close your eyes. Let's see what your power looks like when it's not fighting for its life."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                You close your eyes, feeling Chance's presence like a cool summer breeze. Their voice floats over you as it becomes distant, dreamlike...
            </div>
        </div>
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE</div>
            <div class="character-speech">"Don't force it. Take a deep breath in...and out...Let your magic show us what it wants to be..."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('dream_sequence')">Enter the Dreamscape</button>
        </div>
    `,
    effects: { chance: 1 }
},

dream_sequence: {
    id: '3.13.0',
    title: 'Dream Sequence - Dream Form Choice',
    content: `
        <div class="story-text fade-in" style="background: linear-gradient(135deg, rgba(87, 206, 235, 0.2) 0%, rgba(135, 206, 235, 0.3) 100%);">
            <div class="narrator-text">
                You drift into a space between waking and sleeping. Here, your magic doesn't burn or explode...no here it dances. Violet stars spiral around you, each one a possibility, a spark of hope, a potential future. Chance appears beside you, their form shifting like silver smoke.
            </div>
        </div>
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE</div>
            <div class="character-speech">"Beautiful. Your magic dreams of becoming everything...a protector, destroyer, and a creator. Most mages have one nature. You have multitudes. The question is: which one will you choose to be?"</div>
        </div>
        <div class="choices-container fade-in" style="background: linear-gradient(135deg, rgba(87, 206, 235, 0.1) 0%, rgba(135, 206, 235, 0.2) 100%);">
            <h3 style="color: #add8e6; margin-bottom: 15px;">In the dreamscape, what form does your magic take?</h3>
            <button class="choice-button" onclick="makeChoice('dream_wings', 'dream_wings_response')">Wings of violet fire, giving you freedom to soar above everything</button>
            <button class="choice-button" onclick="makeChoice('dream_armor', 'dream_armor_response')">Armor of starlight, giving protection to yourself and others</button>
            <button class="choice-button" onclick="makeChoice('dream_storm', 'dream_storm_response')">A violet storm, a fierce, raw power barely contained</button>
        </div>
    `
},

dream_wings_response: {
    id: '3.13.1',
    title: 'Dream Wings Response',
    content: `
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE (delighted)</div>
            <div class="character-speech">"Wings! Of course. It makes sense, you don't want to fight, you want to fly. To be free. Your magic isn't a weapon, but an escape route. Remember this feeling when you wake."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('stat_allocation')">Wake Up</button>
        </div>
    `,
    effects: { chance: 1 }
},

dream_armor_response: {
    id: '3.13.2',
    title: 'Dream Armor Response',
    content: `
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE (thoughtful)</div>
            <div class="character-speech">"A protector's heart beats in your chest. Your magic wants to shield, not strike. That's... unexpectedly noble. The others will try to make you a weapon. But you can choose to be a shield."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('stat_allocation')">Wake Up</button>
        </div>
    `,
    effects: { chance: 1 }
},

dream_storm_response: {
    id: '3.13.3',
    title: 'Dream Storm Response',
    content: `
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE</div>
            <div class="character-speech">"Ah. The honest answer. Your magic doesn't want to be controlled or directed, instead it wants to be unleashed. You're not a mage, love. You're a force of nature."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('stat_allocation')">Wake Up</button>
        </div>
    `,
    effects: { chance: 1 }
},

stat_allocation: {
    id: '3.13.5',
    title: 'Allocate Training Points',
    onLoad: function() {
        // Reset stat allocations when scene loads
        if (window.updateStatAllocationUI) {
            setTimeout(() => window.updateStatAllocationUI(), 100);
        }
    },
    getContent: function() {
        const stats = gameState.stats;
        return `
        <div class="story-text fade-in">
            <div class="narrator-text">
                Your first training session has opened your eyes to new possibilities. You feel the potential within you, ready to be shaped and directed. 
                <br><br>
                You have <strong style="color: #ffd700;"><span id="points-remaining">3</span> points</strong> to allocate. You may add <strong>up to 1 point</strong> to any stat.
            </div>
        </div>
        <div class="stat-allocation-container fade-in">
            <div class="stat-row">
                <span class="stat-label">Eloquence (${stats.eloquence})</span>
                <button class="stat-button" id="minus-eloquence" onclick="deallocateStatPoint('eloquence')">−</button>
                <span class="stat-allocated" id="allocated-eloquence">0</span>
                <button class="stat-button" id="plus-eloquence" onclick="allocateStatPoint('eloquence')">+</button>
            </div>
            <div class="stat-row">
                <span class="stat-label">Strength (${stats.strength})</span>
                <button class="stat-button" id="minus-strength" onclick="deallocateStatPoint('strength')">−</button>
                <span class="stat-allocated" id="allocated-strength">0</span>
                <button class="stat-button" id="plus-strength" onclick="allocateStatPoint('strength')">+</button>
            </div>
            <div class="stat-row">
                <span class="stat-label">Bravery (${stats.bravery})</span>
                <button class="stat-button" id="minus-bravery" onclick="deallocateStatPoint('bravery')">−</button>
                <span class="stat-allocated" id="allocated-bravery">0</span>
                <button class="stat-button" id="plus-bravery" onclick="allocateStatPoint('bravery')">+</button>
            </div>
            <div class="stat-row">
                <span class="stat-label">Agility (${stats.agility})</span>
                <button class="stat-button" id="minus-agility" onclick="deallocateStatPoint('agility')">−</button>
                <span class="stat-allocated" id="allocated-agility">0</span>
                <button class="stat-button" id="plus-agility" onclick="allocateStatPoint('agility')">+</button>
            </div>
            <div class="stat-row">
                <span class="stat-label">Control (${stats.control})</span>
                <button class="stat-button" id="minus-control" onclick="deallocateStatPoint('control')">−</button>
                <span class="stat-allocated" id="allocated-control">0</span>
                <button class="stat-button" id="plus-control" onclick="allocateStatPoint('control')">+</button>
            </div>
            <div class="stat-row">
                <span class="stat-label">Wisdom (${stats.wisdom})</span>
                <button class="stat-button" id="minus-wisdom" onclick="deallocateStatPoint('wisdom')">−</button>
                <span class="stat-allocated" id="allocated-wisdom">0</span>
                <button class="stat-button" id="plus-wisdom" onclick="allocateStatPoint('wisdom')">+</button>
            </div>
        </div>
        <div class="next-container fade-in">
            <button class="next-button" id="confirm-stats-btn" onclick="confirmStatAllocation()" disabled>Confirm Allocation</button>
        </div>
    `;
    }
},

training_interrupted: {
    id: '3.14.0',
    title: 'Training Interrupted',
    content: `
        <div class="story-text fade-in">
            <div class="sfx">URGENT BELLS CLANG THROUGH THE SAFEHOUSE</div>
            <div class="narrator-text">
                Your training is cut short by the sound of warning bells. Three sharp rings. A pause. Then, three more.
                <br><br>
                The tension in the air shifts, as everyone moves at once. Weapons retrieved, orders given, positions taken. The casual atmosphere evaporates, replaced by deadly stillness.
            </div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (voice sharp, commanding)</div>
            <div class="character-speech">"Someone's at the outer passages. Kit, go to the western tunnel. Chance and Tris, take the eastern approach. I'll bring our new friend with me to the observation point."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('mysterious_arrival')">Next</button>
        </div>
    `
},

mysterious_arrival: {
    id: '3.15.0',
    title: 'Mysterious Arrival',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                Fable leads you up a narrow staircase to a hidden alcove with thin slits in the wall, it's perfect for observing the entrance without being seen. You see a lush forest in the distance. You lean in closer and through the gaps, you see a figure approaching through the tunnels.
                <br><br>
                It's a young woman, moving with strange, stuttering steps. Her pink hair is disheveled, her pale skin almost translucent in the dim light. She clutches at her arms as if trying to hold herself together.
                <br><br>
                She stumbles, catches herself against the wall, and you notice her fingers leave frost patterns on the stone. Magic, but... wrong somehow. Suppressed. Fighting to break free.
                <br><br>
                Then you hear it, a low, guttural moan echoing from the forest behind her. The woman spins around in terror, and you see what's following her.
            </div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (whispering, alarmed)</div>
            <div class="character-speech">"Hollows. Three of them. She's being hunted."</div>
        </div>
        <div class="choices-container fade-in">
            <h3 style="color: #ffd700; margin-bottom: 15px;">You watch the terrifying creatures approaching the woman.</h3>
            <button class="choice-button" onclick="goToScene('hollows_pursuit')">Continue watching</button>
            <button class="choice-button" onclick="goToScene('ask_about_hollows')">Ask Fable what Hollows really are</button>
        </div>
    `
},

ask_about_hollows: {
    id: '3.15.1a',
    title: 'The Truth About Hollows',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                You keep your voice to a whisper, but urgency creeps in as you watch the shambling figures close the distance.
            </div>
        </div>
        <div class="dialogue fade-in">
            <div class="character-name">YOU</div>
            <div class="character-speech">"Wait, what are Hollows exactly? I thought they were held back by the Inquisitors... that's what everyone says..."</div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (bitter laugh, still whispering)</div>
            <div class="character-speech">"That's exactly what the Crown wants people to think. The Inquisitors don't hold back Hollows, they create them.</div>
            <div class="character-speech">Those were once mages, but now they're just... shells. Magic has consumed their minds, left them as hungry shadows. Magic suppression doesn't just lock away power, it corrupts it. Push down natural magic long enough, force it into unnatural patterns, and eventually it breaks the mind. Hollows are what happens when suppressed mages finally snap."</div>

        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (voice hard)</div>
            <div class="character-speech">"The Crown blames 'uncontrolled magic' and sends more Inquisitors to 'protect' people. It's a perfect cycle, they create the monsters, then offer protection from them. But we can discuss politics later. Right now, that woman is about to die."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('hollows_pursuit')">Continue</button>
        </div>
    `,
    effects: { fable: 2 }
},

hollows_pursuit: {
    id: '3.15.1',
    title: 'Hollows Pursuit',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                Three shambling figures emerge from the treeline. Once human, the Hollows now move with jerky, unnatural motions. Their eyes glow with sickly red light, and wisps of corrupted magic leak from their fingertips like smoke.
                <br><br>
                The woman trips, falling hard against the tunnel entrance. Ice explodes from her hands in panic, but it only seems to attract the creatures more. They groan in unison, a coarse and rattling sound like wind through broken bones.
            </div>
            <div class="dialogue">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">MYSTERIOUS WOMAN (terrified)</div>
                <div class="character-speech">"No, no, no... they found me... the magic... they can sense it..."</div>
            </div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (urgent)</div>
            <div class="character-speech">"Hollows feed on magical energy. Right now she is like a beacon to them. We have to act fast."</div>
        </div>
        <div class="choices-container fade-in">
            <h3 style="color: #ffd700; margin-bottom: 15px;">The Hollows close in on the helpless woman. What do you do?</h3>
            <button class="choice-button" onclick="makeChoice('rush_attack', 'rush_attack_choice')">Rush out immediately to fight the Hollows</button>
            <button class="choice-button" onclick="makeChoice('observe_first', 'observe_first_choice')">Watch their movement patterns before engaging</button>
            <button class="choice-button" onclick="makeChoice('wait_others', 'wait_others_choice')">Wait for the other rebels to arrive and coordinate</button>
        </div>
    `
},

rush_attack_choice: {
    id: '3.15.2',
    title: 'Rush Attack Choice',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                Without hesitation, you charge from the alcove. Your magic surges with you, violet energy crackling as you leap into action. The Hollows turn toward you, their corrupted faces twisting in gleeful hunger.
            </div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (shouting after you)</div>
            <div class="character-speech">"Brave, but reckless! Aim for their cores, it's the glowing spot in their chests!"</div>
        </div>
        <div class="choices-container fade-in">
            <h3 style="color: #ffd700; margin-bottom: 15px;">How do you attack the Hollows?</h3>
            <button class="choice-button" onclick="makeChoice('magic_attack_brave', 'magic_attack_brave')">Unleash your raw magic against them</button>
            <button class="choice-button" onclick="makeChoice('weapon_attack_brave', 'weapon_attack_brave')">Grab a weapon and strike physically</button>
        </div>
    `
},

observe_first_choice: {
    id: '3.15.3',
    title: 'Observe First Choice',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                You force yourself to watch and learn before acting. The Hollows move in a surprisingly coordinated pattern with two flanking while one approaches directly. You notice they favor their left sides, and their movements slow slightly when they're about to strike.
                <br><br>
                The woman's magic flares again, and the creatures surge forward hungrily. Now you move, armed with knowledge.
            </div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (impressed)</div>
            <div class="character-speech">"Smart."</div>
        </div>
        <div class="choices-container fade-in">
            <h3 style="color: #ffd700; margin-bottom: 15px;">How do you attack the Hollows?</h3>
            <button class="choice-button" onclick="makeChoice('magic_attack_wise', 'magic_attack_wise')">Use your magic strategically against their weakness</button>
            <button class="choice-button" onclick="makeChoice('weapon_attack_wise', 'weapon_attack_wise')">Strike with a weapon at their vulnerable spots</button>
        </div>
    `
},

wait_others_choice: {
    id: '3.15.4',
    title: 'Wait Others Choice',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                You stay back, waiting for Kit and the others to arrive. It's the tactically sound choice, but watching the woman's terror pulls at you. The Hollows are almost upon her when Kit's blade flashes in the tunnel entrance.
            </div>
        </div>
        <div class="character-scene kit-border fade-in">
            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
            <div class="character-name">KIT</div>
            <div class="character-speech">"Never engage Hollows alone if you can avoid it. But now, we all fight!"</div>
        </div>
        <div class="choices-container fade-in">
            <h3 style="color: #ffd700; margin-bottom: 15px;">How do you support the group attack?</h3>
            <button class="choice-button" onclick="makeChoice('magic_attack_group', 'magic_attack_group')">Add your magic to the coordinated assault</button>
            <button class="choice-button" onclick="makeChoice('weapon_attack_group', 'weapon_attack_group')">Fight alongside Kit with weapons</button>
        </div>
    `
},

magic_attack_brave: {
    id: '3.16.1',
    title: 'Magic Attack - Brave Rush',
    getContent: () => {
        return `
        <div class="story-text fade-in">
            <div class="narrator-text">
                You let your raw magic explode outward, violet lightning crackling toward the nearest Hollow. Your charge has filled you with determination and you will not let this woman suffer the same fate you nearly did.
            </div>
        </div>
        ${diceSystem.createDiceRoll(
            'Magical Assault', 
            'Channel your chaotic magic against the corrupted creatures. Your bravery in rushing to help adds power to your strike.',
            'hollow_combat',
            'magic_success_brave',
            'magic_failure_brave',
            12,
            'magic_control',
            'bravery'
        )}
    `;
    }
},

weapon_attack_brave: {
    id: '3.16.2',
    title: 'Weapon Attack - Brave Rush',
    getContent: () => {
        return `
        <div class="story-text fade-in">
            <div class="narrator-text">
                You grab a fallen branch, channeling a bit of magic into it to make it solid as steel. Your rush gives you momentum as you swing at the nearest Hollow's glowing core.
            </div>
        </div>
        ${diceSystem.createDiceRoll(
            'Weapon Strike', 
            'Strike at the Hollows with improvised weapons. Your courage in charging forward strengthens your blow.',
            'hollow_combat',
            'weapon_success_brave',
            'weapon_failure_brave',
            12,
            'strength',
            'bravery'
        )}
    `;
    }
},

magic_attack_wise: {
    id: '3.16.3',
    title: 'Magic Attack - Wise Observation',
    getContent: () => {
        return `
        <div class="story-text fade-in">
            <div class="narrator-text">
                You focus your magic precisely, targeting the patterns you observed. Your knowledge from watching first guides your strike to their vulnerable moments when they slow down.
            </div>
        </div>
        ${diceSystem.createDiceRoll(
            'Tactical Magic', 
            'Use your observations to strike strategically. Your knowledge in studying them first gives you a significant advantage.',
            'hollow_combat',
            'magic_success_wise',
            'magic_failure_wise',
            10,
            'magic_control',
            'wisdom'
        )}
    `;
    }
},

weapon_attack_wise: {
    id: '3.16.4',
    title: 'Weapon Attack - Wise Observation',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                You move with calculated precision, striking at the left-side weakness you identified. Your patient observation pays off as you target their blind spots.
            </div>
        </div>
        ${diceSystem.createDiceRoll(
            'Tactical Strike', 
            'Strike with knowledge of their weaknesses. Your wisdom in observing them makes your attack more effective.',
            'hollow_combat',
            'weapon_success_wise',
            'weapon_failure_wise',
            10,
            'strength',
            'wisdom'
        )}
    `
},

magic_attack_group: {
    id: '3.16.5',
    title: 'Magic Attack - Group Coordination',
    getContent: () => {
        return `
        <div class="story-text fade-in">
            <div class="narrator-text">
                You coordinate your magic with Kit's blade work, timing your strikes to support the group effort. Working together makes each attack more effective.
            </div>
        </div>
        ${diceSystem.createDiceRoll(
            'Coordinated Magic', 
            'Support the group with magical attacks. Fighting as a team gives you better odds.',
            'hollow_combat',
            'magic_success_group',
            'magic_failure_group',
            8,
            'magic_control',
            'control'
        )}
    `;
    }
},

weapon_attack_group: {
    id: '3.16.6',
    title: 'Weapon Attack - Group Coordination',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                You fight alongside Kit, matching his rhythm and covering his flanks. The coordinated assault is more effective than any solo effort could be.
            </div>
        </div>
        ${diceSystem.createDiceRoll(
            'Coordinated Strike', 
            'Fight alongside the group with weapons. Teamwork makes your attacks more effective.',
            'hollow_combat',
            'weapon_success_group',
            'weapon_failure_group',
            8,
            'strength'
        )}
    `,
     effects: { kit: 1 }
},

magic_success_brave: {
    id: '3.17.1',
    title: 'Magic Success - Brave',
    content: `
        <div class="story-text fade-in">
            <div class="sfx">VIOLET LIGHTNING TEARS THROUGH THE HOLLOWS</div>
            <div class="narrator-text">
                Your magic explodes outward in brilliant violet arcs. The raw power, amplified by your adrenaline, tears through the first Hollow's core. It crumbles to ash with a wailing shriek. The other two hesitate, sensing the danger you represent.
            </div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (arriving just as you finish)</div>
            <div class="character-speech">"Incredible!"</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('victory_aftermath')">Next</button>
        </div>
    `,
    effects: { fable: 1, kit: 1 }
},

magic_failure_brave: {
    id: '3.17.2',
    title: 'Magic Failure - Brave',
    content: `
        <div class="story-text fade-in">
            <div class="sfx">MAGIC EXPLODES WILDLY IN ALL DIRECTIONS</div>
            <div class="narrator-text">
                Your magic surges chaotically, striking rocks, trees, and empty air. You manage to hit everywhere except the Hollows. Your bravery gave you power, but not precision. The creatures advance, drawn by the magical display.
            </div>
        </div>
        <div class="character-scene kit-border fade-in">
            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
            <div class="character-name">KIT (leaping into the fray)</div>
            <div class="character-speech">"Reckless, remember control matters more than power. Watch and learn."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                Kit's blade flashes, cutting down the Hollows with precise strikes to their cores. Within moments, the threat is ended.
            </div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('assisted_victory')">Next</button>
        </div>
    `,
    effects: { kit: -1 }
},

weapon_success_brave: {
    id: '3.17.3',
    title: 'Weapon Success - Brave',
    content: `
        <div class="story-text fade-in">
            <div class="sfx">MAGICAL BRANCH SMASHES THROUGH HOLLOW CORE</div>
            <div class="narrator-text">
                Your magically-enhanced branch crashes into the nearest Hollow's glowing core with devastating force. The creature implodes with a shriek, and your momentum carries you into the second one. Your brave charge has turned into a fierce assault.
            </div>
        </div>
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE (appearing from the shadows)</div>
            <div class="character-speech">"Well, well. Our new friend has the heart of a warrior. Quite the sight to behold."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('victory_aftermath')">Next</button>
        </div>
    `,
    effects: { chance: 1, kit: 1 }
},

weapon_failure_brave: {
    id: '3.17.4',
    title: 'Weapon Failure - Brave',
    content: `
        <div class="story-text fade-in">
            <div class="sfx">BRANCH SHATTERS AGAINST HOLLOW'S HIDE</div>
            <div class="narrator-text">
                Your improvised weapon shatters against the Hollow's corrupted flesh. The creature backhands you, sending you sprawling. Your courage was admirable, but the Hollows are stronger than they appear.
            </div>
        </div>
        <div class="character-scene tris-border fade-in">
            <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
            <div class="character-name">TRIS (healing your wounds)</div>
            <div class="character-speech">"Brave, but foolish. Hollows have tough hides, so you need to hit the cores or use magic. Kit's handling them now."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('assisted_victory')">Next</button>
        </div>
    `,
    effects: { tris: 1, kit: -1 }
},

magic_success_wise: {
    id: '3.17.5',
    title: 'Magic Success - Wise',
    content: `
        <div class="story-text fade-in">
            <div class="sfx">PRECISE VIOLET BOLTS STRIKE TRUE</div>
            <div class="narrator-text">
                Your magic strikes with surgical precision, targeting the Hollows during their vulnerable moments. Two cores shatter simultaneously, and the third creature stumbles into your follow-up blast. Your patience and observation have paid off perfectly.
            </div>
        </div>
        <div class="character-scene kit-border fade-in">
            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
            <div class="character-name">KIT (genuinely impressed)</div>
            <div class="character-speech">"Remarkable tactical thinking."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('victory_aftermath')">Next</button>
        </div>
    `,
    effects: { fable: 1, kit: 2 }
},

magic_failure_wise: {
    id: '3.17.6',
    title: 'Magic Failure - Wise',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                Despite your careful observation, your magic still proves too chaotic to fully control. You manage to wound one Hollow, but the others press their attack. Your tactics were sound, but execution still needs work.
            </div>
        </div>
        <div class="character-scene kit-border fade-in">
            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
            <div class="character-name">KIT (finishing the fight)</div>
            <div class="character-speech">"Good strategy, but your magic needs discipline. "</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('assisted_victory')">Next</button>
        </div>
    `,
    effects: { kit: 1 }
},

weapon_success_wise: {
    id: '3.17.7',
    title: 'Weapon Success - Wise',
    content: `
        <div class="story-text fade-in">
            <div class="sfx">CALCULATED STRIKES FIND THEIR MARK</div>
            <div class="narrator-text">
                You strike with deadly precision, exploiting every weakness you observed. Your blade finds gaps in their defenses, and each hit counts. Within moments, all three Hollows lie crumbling to ash.
            </div>
        </div>
        <div class="character-scene kit-border fade-in">
            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
            <div class="character-name">KIT (nodding approvingly)</div>
            <div class="character-speech">"Excellent technique. You fought smart, not just hard. That's how you survive against superior numbers."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('victory_aftermath')">Next</button>
        </div>
    `,
    effects: { kit: 2 }
},

weapon_failure_wise: {
    id: '3.17.8',
    title: 'Weapon Failure - Wise',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                Your strategy is sound, but your weapon skills aren't quite there yet. You land a few hits but can't penetrate their cores effectively. The Hollows adapt to your pattern faster than expected.
            </div>
        </div>
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE (using dream magic to confuse the Hollows)</div>
            <div class="character-speech">"Let me finish this with some... misdirection."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('assisted_victory')">Next</button>
        </div>
    `,
    effects: { chance: 1 }
},

magic_success_group: {
    id: '3.17.9',
    title: 'Magic Success - Group',
    content: `
        <div class="story-text fade-in">
            <div class="sfx">COORDINATED MAGIC AND STEEL DEVASTATE THE HOLLOWS</div>
            <div class="narrator-text">
                Your magic weaves perfectly with Kit's blade work. As he strikes, you blast; as you channel, he covers. The Hollows cannot adapt to your coordinated assault and fall quickly to your combined might.
            </div>
        </div>
        <div class="character-scene kit-border fade-in">
            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
            <div class="character-name">KIT (breathing hard but satisfied)</div>
            <div class="character-speech">"Excellent work. That's how the Morte Custodi fight."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('victory_aftermath')">Next</button>
        </div>
    `,
    effects: { kit: 2, tris: 1 }
},

magic_failure_group: {
    id: '3.17.10',
    title: 'Magic Failure - Group',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                Your magic proves difficult to coordinate with the group's tactics. A few wild bolts nearly hit Kit, forcing him to adjust his strategy. Still, working together, you manage to bring down the Hollows.
            </div>
        </div>
        <div class="character-scene kit-border fade-in">
            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
            <div class="character-name">KIT (wiping ash from his blade)</div>
            <div class="character-speech">"We won, but you need better control before fighting in formation. Friendly fire is still fire."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('assisted_victory')">Next</button>
        </div>
    `,
    effects: { kit: -1, chance: 1 }
},

weapon_success_group: {
    id: '3.17.11',
    title: 'Weapon Success - Group',
    content: `
        <div class="story-text fade-in">
            <div class="sfx">SYNCHRONIZED STRIKES OVERWHELM THE HOLLOWS</div>
            <div class="narrator-text">
                You and Kit move like a well-oiled machine, covering each other's flanks and striking in perfect rhythm. The Hollows can't handle your coordinated assault and fall one by one to your combined blades.
            </div>
        </div>
        <div class="character-scene kit-border fade-in">
            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
            <div class="character-name">KIT (genuinely impressed)</div>
            <div class="character-speech">"You have natural combat instincts. With training, you could be formidable with a blade."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('victory_aftermath')">Next</button>
        </div>
    `,
    effects: { kit: 2, tris: 1 }
},

weapon_failure_group: {
    id: '3.17.12',
    title: 'Weapon Failure - Group',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                You try to match Kit's pace but find yourself more hindrance than help. Your inexperience shows as you get in each other's way. Kit compensates well, but the fight takes longer than it should have.
            </div>
        </div>
        <div class="character-scene kit-border fade-in">
            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
            <div class="character-name">KIT (patient but firm)</div>
            <div class="character-speech">"You have heart, but weapon work takes practice. We'll start with solo drills before group tactics."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('assisted_victory')">Next</button>
        </div>
    `,
    effects: { kit: -1, tris: 1, chance: 1 }
},

victory_aftermath: {
    id: '3.18.0',
    title: 'Victory Aftermath',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                The last Hollow crumbles to dust, leaving only the acrid smell of burnt flesh and corrupted magic in the air. The mysterious woman stares at you with wide, fearful eyes, clutching at her arms where frost patterns still spread and fade.
            </div>
            <div class="dialogue">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">MYSTERIOUS WOMAN (shaking)</div>
                <div class="character-speech">"You... you fought them. For me. I don't understand... why would you help someone you don't know?"</div>
            </div>
        </div>
        <div class="character-scene tris-border fade-in">
            <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
            <div class="character-name">TRIS (approaching with medical supplies)</div>
            <div class="character-speech">"Because that's what we do. Now hold still, I think you're in magical withdrawal, and those Hollows' presence has made it worse."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('ash_collapse')">Next</button>
        </div>
    `
},

assisted_victory: {
    id: '3.18.1',
    title: 'Assisted Victory',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                With help from the other rebels, the Hollows are defeated. Though you didn't succeed entirely on your own, your willingness to fight for a stranger has clearly impressed them. The mysterious woman watches in amazement as the dust settles.
            </div>
            <div class="dialogue">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">MYSTERIOUS WOMAN (grateful)</div>
                <div class="character-speech">"You helped me... even when you could have been hurt. I've never... no one has ever..."</div>
            </div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE</div>
            <div class="character-speech">"You're safe now. But we need to know who you are and why those things were chasing you."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('ash_collapse')">Next</button>
        </div>
    `
},

ash_collapse: {
    id: '3.16.0',
    title: 'Ash Collapse - First Ash Choice',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                The mysterious woman takes another step, then collapses. Her body convulses, and frost spreads from where she falls, crackling across the stone in violent bursts. She's crying out, but the words are muffled and desperate.
            </div>
            <div class="dialogue">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">MYSTERIOUS WOMAN (gasping):</div>
                <div class="character-speech">"Please... help... the medicine... it's running out... I can't... control..."</div>
            </div>
            <div class="narrator-text">
                Her magic erupts again, this time as ice shards begin shooting upward, then immediately melt into steam. It's like watching two forces war inside one body, one trying to contain the magic while the other begged to be free.
            </div>
        </div>
        <div class="choices-container fade-in">
            <h3 style="color: #ffd700; margin-bottom: 15px;">The woman needs help, but it could be a trap. What do you do?</h3>
            <button class="choice-button" onclick="makeChoice('help_immediately', 'help_ash_response')">Rush to help her, no one should suffer like that</button>
            <button class="choice-button" onclick="makeChoice('stay_cautious', 'cautious_ash_response')">Watch what the others do, Fable warned you it could be dangerous</button>
            <button class="choice-button" onclick="makeChoice('sense_magic', 'sense_ash_response')">Stay hidden, but try to see where she came from</button>
        </div>
    `
},

help_ash_response: {
    id: '3.16.1',
    title: 'Help Ash Response',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                You rush down to the collapsed woman. Up close, you can see the pain etched on her face. You know for certain that this isn't an act. Her magic is tearing her apart from the inside.
                <br><br>
                You kneel beside her, and she looks up at you with desperate pink eyes.
            </div>
            <div class="dialogue">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">MYSTERIOUS WOMAN (grabbing your arm)</div>
                <div class="character-speech">"The suppressants... I need... I'm not supposed to be here... but I had nowhere else... please..."</div>
            </div>
        </div>
        <div class="character-scene tris-border fade-in">
            <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
            <div class="character-name">TRIS (arriving quickly, pushing you aside)</div>
            <div class="character-speech">"Suppressants? You're on magical suppressants? Move back, I know what is happening, this is withdrawal. I've seen it before."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('ash_revelation')">Next</button>
        </div>
    `,
    effects: { fable: -1, tris: 1 }
},

cautious_ash_response: {
    id: '3.16.2',
    title: 'Cautious Ash Response',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                You stay in the alcove as instructed, watching as Kit and Fable approach the fallen woman carefully. Kit has his blade drawn, while Fable's hands are out in front of him, as though calming a wild animal.
            </div>
        </div>
        <div class="character-scene kit-border fade-in">
            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
            <div class="character-name">KIT (assessing)</div>
            <div class="character-speech">"She's in magical withdrawal. Look at the symptoms, sweat, convulsions, and you can see the suppressed power fighting to the surface. The question is: why is she here?"</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('ash_revelation')">Next</button>
        </div>
    `,
    effects: { kit: 1, fable: 1, chance: -1 }
},

sense_ash_response: {
    id: '3.16.3',
    title: 'Sense Ash Response - Magic Sensing Choice',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                You can see the path the woman took toward the safehouse, though traveling through the dense forest couldn't have been easy on her.
                <br><br>
                You reach out with your own magic, hoping to get a sense for hers. What you feel makes you gasp. You can feel that her power is caged, wrapped in artificial barriers that are crumbling. But beneath that...There's something else. A thread of magic that doesn't belong to her, woven through her mind like puppet strings.
            </div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (noticing your reaction)</div>
            <div class="character-speech">"What do you sense? Your magic is resonating with something..."</div>
        </div>
        <div class="choices-container fade-in">
            <h3 style="color: #ffd700; margin-bottom: 15px;">What do you tell them?</h3>
            <button class="choice-button" onclick="makeChoice('reveal_compulsion', 'reveal_compulsion_response')">Tell them about the strange magic, you think she's being manipulated by something</button>
            <button class="choice-button" onclick="makeChoice('focus_withdrawal', 'focus_withdrawal_response')">Focus on the withdrawal, she needs medical help first or she could die</button>
            <button class="choice-button" onclick="makeChoice('uncertain_magic', 'uncertain_magic_response')">Admit uncertainty, tell him the magic feels wrong but you're not sure why</button>
        </div>
    `,
    effects: { fable: 1 }
},

reveal_compulsion_response: {
    id: '3.17.1',
    title: 'Reveal Compulsion Response',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                You tell Fable your fears, that this woman's magic might not be entirely under her control.
            </div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (alert)</div>
            <div class="character-speech">"She could be a victim. Or a spy. Or worse, a weapon...We'll need to learn more."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                The woman's eyes snap open, glowing with unnatural light. She cries out in pain.
            </div>
            <div class="dialogue">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH</div>
                <div class="character-speech">"Please I don't think I can take it much longer..."</div>
            </div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('ash_struggle')">Next</button>
        </div>
    `,
    effects: { kit: 1 }
},

focus_withdrawal_response: {
    id: '3.17.2',
    title: 'Focus Withdrawal Response',
    content: `
        <div class="character-scene tris-border fade-in">
            <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
            <div class="character-name">TRIS (already working)</div>
            <div class="character-speech">"Obviously. The suppressants are failing. Her natural magic is reasserting itself, quite violently too. I can stabilize her, but... these withdrawal symptoms suggest long-term use. Years, perhaps even since childhood."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                Tris's hands glow green as she works, but the woman's magic keeps fighting back, ice and fire warring under her skin.
            </div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('ash_revelation')">Next</button>
        </div>
    `,
    effects: { tris: 1 }
},

uncertain_magic_response: {
    id: '3.17.3',
    title: 'Uncertain Magic Response',
    content: `
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE (eyes unfocused, seeing beyond)</div>
            <div class="character-speech">"I see her in the dreamscape... fractured. Two selves fighting for control."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('ash_revelation')">Next</button>
        </div>
    `,
    effects: { chance: 1 }
},

ash_struggle: {
    id: '3.18.0',
    title: 'Ash Struggle - Save or Reject Choice',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                The woman fights against invisible chains. Her magic explodes outward in desperate bursts, frost spreading in fractured patterns.
            </div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (decisive)</div>
            <div class="character-speech">"She's fighting the compulsion. We can help her break free, but it's risky. She might be dangerous, or even a spy."</div>
        </div>
        <div class="character-scene kit-border fade-in">
            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
            <div class="character-name">KIT</div>
            <div class="character-speech">"We should turn her away; we can't risk harboring an Inquisition weapon. We don't know who or what is controlling her mind."</div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (turning to you)</div>
            <div class="character-speech">"I'm curious, what's your instinct, spark?"</div>
        </div>
        <div class="choices-container fade-in">
            <h3 style="color: #ffd700; margin-bottom: 15px;">This woman is dangerous, but also a victim. What should be done?</h3>
            <button class="choice-button" onclick="makeChoice('save_ash', 'save_ash_ending')">Fight to save her, you know that everyone deserves freedom from the Inquisition</button>
            <button class="choice-button" onclick="makeChoice('cautious_help', 'cautious_ash_ending')">Help her, but with precautions, afterall she could still be dangerous</button>
            <button class="choice-button" onclick="makeChoice('reject_ash', 'reject_ash_ending')">Turn her away, you believe the risk is too great</button>
        </div>
    `
},

ash_revelation: {
    id: '3.19.0',
    title: 'Ash Revelation',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                As the rebels work to stabilize her, the woman's eyes flutter open. She looks around in confusion and growing horror.
            </div>
            <div class="dialogue">
                <div class="character-name">ASH (voice breaking)</div>
                <div class="character-speech">"No... I wasn't supposed to... Father Caine said the medicine would... I'm not...I'm... I'm..."</div>
            </div>
            <div class="narrator-text">
                She breaks down sobbing, her fractured conditioning warring with the reality of where she is.
            </div>
        </div>
        <div class="character-scene tris-border fade-in">
            <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
            <div class="character-name">TRIS</div>
            <div class="character-speech">"The suppressants aren't medicine. They're chains. You're going through withdrawal because your body is remembering how to be whole. It will hurt. But you'll survive."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('chapter3_ending')">Next</button>
        </div>
    `
},

save_ash_ending: {
    id: '3.18.1',
    title: 'Save Ash Ending',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                You tell him that she is a victim of the Inquisition whether she knows it or not. She deserves help just like you did on the pyre.
                <br><br>
                Fable nods approvingly, while Kit looks skeptical but doesn't argue. Together, you work to calm the wild magic around the woman. Tris hurries over and begins to heal her, calming her wild mind and lulling her into a sense of calm.
            </div>
        </div>
        <div class="character-scene tris-border fade-in">
            <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
            <div class="character-name">TRIS</div>
            <div class="character-speech">"This will heal your withdrawal for a while. You'll be okay. What is your name?"</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                When it's over, the woman collapses, free but exhausted, whispering her name before falling unconscious.
            </div>
            <div class="dialogue">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH (weakly)</div>
                <div class="character-speech">"I'm Ash..."</div>
            </div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('chapter3_ending')">Continue</button>
        </div>
    `,
    effects: { fable: 1, kit: -1, tris: 2, chance: 1 }
},

cautious_ash_ending: {
    id: '3.18.2',
    title: 'Cautious Ash Ending',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                She is a victim, you say to Fable, but that doesn't mean she can't be dangerous. You recommend healing her, but keeping her away from others until you learn more.
                <br><br>
                Fable nods approvingly at your words. Guards are established, watches set. Tris heals the woman, and she wakes long enough to give her name, Ash. She is given a space to recover, but under watch until she is well enough to tell the group more.
            </div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE</div>
            <div class="character-speech">"Tris says she'll be alright once she wakes. For now, we'll keep an eye on her until we understand more."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('chapter3_ending')">Continue</button>
        </div>
    `,
    effects: { fable: 2, tris: 1, chance: -1 }
},

reject_ash_ending: {
    id: '3.18.3',
    title: 'Reject Ash Ending',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                You recommend caution; trusting a stranger like this could be dangerous. It would be best to send her away.
                <br><br>
                Kit agrees, but Fable looks disappointed, as does Tris. Chance looks away, their expression unreadable.
            </div>
            <div class="dialogue">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH (desperate)</div>
                <div class="character-speech">"I...I can't go back...please...you have to help me...please"</div>
            </div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('chapter3_ending')">Continue</button>
        </div>
    `,
    effects: { kit: 1, fable: -2, tris: -1 }
},

chapter3_ending: {
    id: '3.20.0',
    title: 'Chapter 3 Ending',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                The group agrees to take in the strange woman and keep her safe, for now. She introduces herself to you all as Ash, she is the daughter of a minor noble family. One who had been feeding her suppressants for years.
                <br><br>
                Before Fable could ask more, the young woman collapsed again and Tris took her to the infirmary to rest.
            </div>
            <div class="dialogue">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH</div>
                <div class="character-speech">(Character introduced)</div>
            </div>
            <div class="narrator-text">
                Night falls over the safehouse. Your first full day with the Morte Custodi draws to a close, but it's clear this is just the beginning. You've tasted what training might offer: control, understanding, or perhaps just more questions.
                <br><br>
                Your magic hums beneath your skin, neither tamed nor wild, but something in between. Tomorrow will bring new challenges, new choices.
            </div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('ash_morning')">Continue</button>
        </div>
    `
}
};