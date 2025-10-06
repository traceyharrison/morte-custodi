import { ENVIRON_IMAGES, CHARACTER_IMAGES } from '../constants.js';
import { diceSystem } from '../diceSystem.js';
import { relationshipManager } from '../relationshipManager.js';

export const chapter3Scenes = {  
chapter3_morning: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                You wake to unfamiliar stillness. No bells. No crowds. No smoke.
                <br><br>
                For a moment, panic grips you—where are you? Then memory floods back: the pyre, the escape, violet flames dancing at your fingertips. The Morte Custodi. You're in their safehouse, wrapped in rough blankets that smell of herbs and old smoke.
                <br><br>
                Pale morning light filters through cracks in the stone ceiling. You hear muffled voices from beyond the door—the rebels are already awake. Your body aches from yesterday's chaos, and beneath your skin, that strange power still hums, waiting.
            </div>
        </div>
        <div class="choices-container fade-in">
            <h3 style="color: #ffd700; margin-bottom: 15px;">How do you face your first morning with the Morte Custodi?</h3>
            <button class="choice-button" onclick="makeChoice('eager_morning', 'eager_morning_response')">Get up immediately—you're ready to learn about your power</button>
            <button class="choice-button" onclick="makeChoice('cautious_morning', 'cautious_morning_response')">Listen at the door first—learn what they're saying about you</button>
            <button class="choice-button" onclick="makeChoice('exhausted_morning', 'exhausted_morning_response')">Stay in bed a while longer—you need time to process everything</button>
        </div>
    `
},

eager_morning_response: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                You throw off the blankets and stand, energy crackling through your limbs despite the soreness. The power inside you feels like a caged storm, and you're tired of being afraid of it.
                <br><br>
                You push open the heavy door to find the main room already alive with activity. Kit stands over a map, marking positions with military precision. Tris organizes medical supplies with her usual efficiency. And Fable...
            </div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (looking up with a warm smile)</div>
            <div class="character-speech">"Ah, our newest recruit rises! I was just telling Chance you'd probably sleep until noon. Glad to be wrong. Ready to learn what you're truly capable of?"</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('morning_gathering')">Next</button>
        </div>
    `,
    effects: { fable: 1, kit: 1 }
},

cautious_morning_response: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                You creep to the door, pressing your ear against the worn wood. Voices drift through—discussing you, as expected.
            </div>
            <div class="dialogue">
                <div class="character-name">KIT'S VOICE (measured, tactical):</div>
                <div class="character-speech">"—power is unstable. We should start with basic control exercises before anything else."</div>
            </div>
            <div class="dialogue">
                <div class="character-name">CHANCE'S VOICE (amused):</div>
                <div class="character-speech">"Oh, let our new friend breathe first, Captain. Not everyone needs your boot camp treatment on day one."</div>
            </div>
            <div class="dialogue">
                <div class="character-name">TRIS'S VOICE (clinical):</div>
                <div class="character-speech">"The magical channels are probably still raw from yesterday's outburst. Push too hard and your newest soldier will burn out. Or explode."</div>
            </div>
            <div class="narrator-text">
                You hear footsteps approaching the door. You scramble back, hoping to get out of the way. You realize that it is too late to retreat—
            </div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('caught_listening')">Next</button>
        </div>
    `,
    effects: { chance: 1, tris: 1 }
},

exhausted_morning_response: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                You pull the blankets higher, not ready to face this new reality. Yesterday feels like a nightmare and a dream tangled together. You were supposed to die. Instead, you're... what? A rebel? A weapon? A recruit? You don't even know.
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
    content: `
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE (sitting on the edge of your bed)</div>
            <div class="character-speech">"The others are arguing about how to train you. Kit wants discipline, Fable wants inspiration, Tris wants to poke at you like a specimen. All terribly predictable. But that power of yours...it doesn't follow the usual rules."</div>
        </div>
        <div class="choices-container fade-in">
            <h3 style="color: #ffd700; margin-bottom: 15px;">How do you respond to Chance?</h3>
            <button class="choice-button" onclick="makeChoice('curious_power', 'curious_power_response')">Sit up, interested. "What do you mean, doesn't follow the rules?"</button>
            <button class="choice-button" onclick="makeChoice('defensive_power', 'defensive_power_response')">Pull back warily. "Have you been watching my dreams?"</button>
            <button class="choice-button" onclick="makeChoice('flirty_morning', 'flirty_morning_response')">Smirk. "Dreaming about me already? That was fast."</button>
        </div>
    `
},

curious_power_response: {
    content: `
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE (leaning forward, intrigued)</div>
            <div class="character-speech">"Most magic follows patterns, for example: elements bend to Kit's will he can control fire  like breathing, while healing flows like water through Tris, illusions shimmer like smoke around Fable. But...Yours? Yours is chaos given form. Wild, primal, tied to something deeper than learned spells. In my dreams, it looked like violet lightning trying to become a constellation."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('morning_gathering')">Next</button>
        </div>
    `,
    effects: { chance: 1 }
},

defensive_power_response: {
    content: `
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE (raising hands in mock surrender)</div>
            <div class="character-speech">"Not intentionally, love. But when someone's magic burns as bright as yours, it tends to... leak into the dreamscape. Like a bonfire seen through fog. Don't worry, your secrets are your own. I just see the shapes, not the substance."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('morning_gathering')">Next</button>
        </div>
    `,
    effects: { chance: -1 }
},

flirty_morning_response: {
    content: `
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE (grinning wider)</div>
            <div class="character-speech">"Oh, darling, I've been dreaming about you since before we met. Occupational hazard of being a dream weaver—I see all the interesting people before they arrive. Though I must say, my dreams didn't capture that delightful spark of defiance in your eyes."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('morning_gathering')">Next</button>
        </div>
    `,
    effects: { chance: 2, tris: -1 }
},

morning_gathering: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                The main room of the safehouse feels different in daylight, it is less mysterious, more lived-in. Maps cover every surface, marked with red X's, scribbled notes, and cryptic symbols. Weapons lean against walls next to stacks of books. It's equal parts war room and library.
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
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                As you eat, the four rebels exchange glances, clearly continuing an earlier debate through looks alone. Finally, Fable clears his throat.
            </div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE</div>
            <div class="character-speech">"Your magic is... unique. Most mages channel specific elements or schools. Yours seems to be pure force, shaped by emotion and will. That makes it powerful, but also dangerous—to enemies and allies alike."</div>
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
            <div class="character-speech">"Or... we could try the fun approach. Magic responds to emotion, yes? Let's explore what makes yours sing. Much more pleasant than Kit's boot camp or Tris's prodding."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('choose_trainer')">Next</button>
        </div>
    `
},

choose_trainer: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                Four different approaches, four different teachers. Your magic stirs restlessly under your skin, as if it too is curious about what comes next. The choice of who trains you first might shape how your power develops...
            </div>
        </div>
        <div class="choices-container fade-in">
            <h3 style="color: #ffd700; margin-bottom: 15px;">Who will be your first teacher?</h3>
            <button class="choice-button" onclick="makeChoice('train_with_kit', 'kit_training_start')">Train with Kit—learn discipline and control through combat drills</button>
            <button class="choice-button" onclick="makeChoice('train_with_fable', 'fable_training_start')">Train with Fable—explore the deeper nature of magical rebellion</button>
            <button class="choice-button" onclick="makeChoice('train_with_tris', 'tris_training_start')">Let Tris examine you—understand the medical reality of your power</button>
            <button class="choice-button" onclick="makeChoice('train_with_chance', 'chance_training_start')">Train with Chance—explore magic through dreams and meditation</button>
        </div>
    `
},

kit_training_start: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                Kit leads you to a cleared space in the safehouse's lower level. Stone walls bear scorch marks and blade scars, all evidence of previous training sessions. He's laid out a series of objects: candles, water bowls, stones, and metal rods.
            </div>
        </div>
        <div class="character-scene kit-border fade-in">
            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
            <div class="character-name">KIT (all business)</div>
            <div class="character-speech">"Magic without discipline is chaos. Chaos gets people killed. We'll start simple. You manifest your power without destroying anything. Light one candle. Just one. Not the room, not yourself. One. Candle."</div>
        </div>
        ${diceSystem.createDiceRoll(
            'Precise Control', 
            'Focus your chaotic magic into a single, controlled point. Success means you are learning discipline. Failure means... property damage.',
            'magic_control',
            'kit_training_success',
            'kit_training_failure',
            10,
            'magic_control'
        )}
    `,
    effects: { kit: 1 }
},

kit_training_success: {
    content: `
        <div class="story-text fade-in">
            <div class="sfx">✨ A SINGLE VIOLET FLAME DANCES ON THE CANDLE ✨</div>
            <div class="narrator-text">
                You breathe slowly, feeling the storm inside you. Instead of letting it rage, you guide it. Through your efforts, it becomes a single thread of power drawn from the tempest. Violet fire blooms on the candle's wick, but now it is steady and controlled.
                <br><br>
                Kit nods, and you could swear there's approval in his amber eyes.
            </div>
        </div>
        <div class="character-scene kit-border fade-in">
            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
            <div class="character-name">KIT (genuinely impressed)</div>
            <div class="character-speech">"Good. Very good. You have natural discipline buried under that chaos. We can work with this."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('training_interrupted')">Next</button>
        </div>
    `,
    effects: { kit: 2 }
},

kit_training_failure: {
    content: `
        <div class="story-text fade-in">
            <div class="sfx">💥 VIOLET FIRE EXPLODES ACROSS ALL CANDLES 💥</div>
            <div class="narrator-text">
                You try to focus, but the power surges like a wild thing. All twelve candles burst into violet flames simultaneously. The water bowls boil. The stones crack.
                <br><br>
                Kit swiftly channels his own magic, he sends out a wave of frost that douses the flames before they can spread.
            </div>
        </div>
        <div class="character-scene kit-border fade-in">
            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
            <div class="character-name">KIT (patient but firm)</div>
            <div class="character-speech">"Expected. Your power wants to be everything at once. We'll try again. And again. Until you learn that true strength comes from restraint."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('training_interrupted')">Next</button>
        </div>
    `,
    effects: { kit: 1 }
},

fable_training_start: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                Fable leads you to his study, it sits in a corner of the safehouse that feels older than the rest. Ancient books line the walls, and symbols you don't recognize are carved into the wooden beams. You go to ask about them, but before you can he pours two cups of something that smells like a bitter memory.
            </div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (thoughtful)</div>
            <div class="character-speech">"Kit will teach you to cage your power. Useful, but... incomplete. Magic born from rebellion doesn't want to be caged, it wants to be understood. Tell me, what did you feel when your power first awakened? Not the fear. But beneath that."</div>
        </div>
        <div class="choices-container fade-in">
            <h3 style="color: #ffd700; margin-bottom: 15px;">What did you feel when your magic erupted?</h3>
            <button class="choice-button" onclick="makeChoice('felt_freedom', 'fable_freedom_response')">Freedom—like breaking chains I didn't know I wore</button>
            <button class="choice-button" onclick="makeChoice('felt_rage', 'fable_rage_response')">Rage, pure rage at the Inquisition, the crowd, the whole corrupt system</button>
            <button class="choice-button" onclick="makeChoice('felt_belonging', 'fable_belonging_response')">Belonging, it felt right...like I finally became who I was meant to be</button>
        </div>
    `,
    effects: { fable: 1}
},

fable_freedom_response: {
    content: `
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (eyes brightening with understanding)</div>
            <div class="character-speech">"Freedom. Yes, I felt that too. The Crown fears us because we remind them that their chains are not unbreakable. Let me show you something..."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('fable_demonstration')">Next</button>
        </div>
    `,
    effects: { fable: 1 }
},

fable_rage_response: {
    content: `
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (nodding knowingly)</div>
            <div class="character-speech">"Rage can be a powerful fuel, but it burns everything, including the one who wields it. I've seen countless mages consumed by their own fury. The trick is to transform that rage into something more... refined. Focused. Something like rebellion, but not blind destruction."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('fable_demonstration')">Next</button>
        </div>
    `,
    effects: { fable: 1}
},

fable_belonging_response: {
    content: `
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (softly, almost wistful)</div>
            <div class="character-speech">"Belonging... that's the deepest sensation of all. To finally feel whole, complete. The Crown tries to make us believe we're broken or corrupted. But you're not! Quite the opposite, spark, you're finally awake."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('fable_demonstration')">Next</button>
        </div>
    `,
    effects: { fable: 1 }
},

fable_demonstration: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                Fable extends his hand, and shadows gather around his fingers—not ordinary darkness, but something deeper. The shadows take shape: soldiers, rebels, friends long gone. They move like memories given form.
            </div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE</div>
            <div class="character-speech">"My magic is born from memory and loss. Yours is...raw potential. But both spring from the same source, the refusal to accept the world as it is. Now, try to shape your power not through control, but through understanding. What does your magic want to become?"</div>
        </div>
           ${diceSystem.createDiceRoll(
            'Harmonize with Magic', 
            'Listen to the pulse of magic within you. Can you find harmony with its wild nature?',
            'magic_control',
            'magic_harmony_success',
            'magic_harmony_failure',
            12,
            'magic_control'
        )}
    `
},

magic_harmony_success: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                Something shifts inside you. Instead of wrestling with your magic, you let it flow through you like a river finding its natural course. Violet light dances around you in graceful patterns, no longer chaotic but harmonious.
            </div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (impressed)</div>
            <div class="character-speech">"There it is. You're not trying to cage it anymore. Magic isn't a tool to be controlled—it's a part of you, as natural as breathing. This is just the beginning."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('training_interrupted')">Next</button>
        </div>
    `,
    effects: { fable: 2 }
},

magic_harmony_failure: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                The magic surges unpredictably. Lightning crackles from your fingertips, arcing across the room in brilliant, dangerous bursts. The power feels wild, untamed—a storm refusing to be calmed.
            </div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (ducking a stray bolt)</div>
            <div class="character-speech">"Don't force it! Your magic responds to emotion. The more you panic, the more it rebels. We'll try a different approach—one step at a time."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('training_interrupted')">Next</button>
        </div>
    `,
    effects: { fable: 1 }
},

tris_training_start: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                Tris leads you to her makeshift infirmary, gesturing for you to sit on the examination table. Her hands glow with soft green light as she begins her assessment.
            </div>
        </div>
        <div class="character-scene tris-border fade-in">
            <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
            <div class="character-name">TRIS (clinical, focused)</div>
            <div class="character-speech">"Hold still. I need to trace your magical pathways. This might feel... uncomfortable. Your channels are damaged. They're like veins that have carried too much blood too quickly through your body, I'm sure they're inflamed at the very least, and possibly torn if you really pushed yourself..."</div>
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
    effects: { tris: 2}
},

tris_discovery: {
    content: `
        <div class="character-scene tris-border fade-in">
            <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
            <div class="character-name">TRIS (rare hint of excitement)</div>
            <div class="character-speech">"This is... unprecedented. Your magical signature suggests you're not channeling power from outside yourself. You're...generating it. Like a star creating its own light. Dangerous, but... remarkable."</div>
        </div>
        <div class="choices-container fade-in">
            <h3 style="color: #ffd700; margin-bottom: 15px;">How do you respond to this revelation?</h3>
            <button class="choice-button" onclick="makeChoice('tris_worried', 'tris_worried_response')">Look worried. "Is that... bad? Am I going to explode?"</button>
            <button class="choice-button" onclick="makeChoice('tris_curious', 'tris_curious_response')">Lean forward, interested. "What does that mean for my training?"</button>
            <button class="choice-button" onclick="makeChoice('tris_proud', 'tris_proud_response')">Smile slightly. "So I'm special, then?"</button>
        </div>
    `
},

tris_worried_response: {
    content: `
        <div class="character-scene tris-border fade-in">
            <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
            <div class="character-name">TRIS (almost reassuring)</div>
            <div class="character-speech">"Explode? Unlikely but...Possible, if untrained. But you haven't yet, which suggests natural resilience. I can teach you exercises to strengthen your channels and create better containment. Think of it as... building a stronger vessel for the ocean inside of you."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('training_interrupted')">Next</button>
        </div>
    `,
    effects: { tris: 1 }
},

tris_curious_response: {
    content: `
        <div class="character-scene tris-border fade-in">
            <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
            <div class="character-name">TRIS (approving of the practical question)</div>
            <div class="character-speech">"It means conventional methods won't work. We need to build from the inside out, we will strengthen your natural barriers and create release valves for excess power. I have some theories... ", she walks away clearly lost in thought.</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('training_interrupted')">Next</button>
        </div>
    `,
    effects: { tris: 2 }
},

tris_proud_response: {
    content: `
        <div class="character-scene tris-border fade-in">
            <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
            <div class="character-name">TRIS (deflating your ego)</div>
            <div class="character-speech">"Whether that's an advantage or a death sentence remains to be seen. Pride won't keep you from burning yourself out." She thinks for a moment, "Discipline might."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('training_interrupted')">Next</button>
        </div>
    `,
    effects: { tris: -1}
},

chance_training_start: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                Chance leads you to a quiet corner filled with cushions and low burning candles. The air smells of lavender, chamomile, and something else...something that makes your eyelids heavy. You sink down easily into one of the large cushions on the floor.
            </div>
        </div>
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE (settling onto cushions gracefully)</div>
            <div class="character-speech">"The others will try to hammer your magic into shape, but I prefer a gentler approach. Dreams and magic are cousins, you see love, they both reshape reality through will and desire." They sit down on a cushion across from you, "Close your eyes. Let's see what your power looks like when it's not fighting for its life."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                You close your eyes, feeling Chance's presence like a cool summer breeze. Their voice floats over you as it becomes distant, dreamlike...
            </div>
        </div>
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE (voice like silk)</div>
            <div class="character-speech">"Don't force it. Take a deep breath in...and out...Let your magic show us what it wants to be. In dreams, there are no rules..."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('dream_sequence')">Enter the Dreamscape</button>
        </div>
    `,
    effects: { chance: 1}
},

dream_sequence: {
    content: `
        <div class="story-text fade-in" style="background: linear-gradient(135deg, rgba(87, 206, 235, 0.2) 0%, rgba(135, 206, 235, 0.3) 100%);">
            <div class="narrator-text">
                You drift into a space between waking and sleeping. Here, your magic doesn't burn or explode...no here it dances. Violet stars spiral around you, each one a possibility, a spark of hope, a potential future. Chance appears beside you, their form shifting like silver smoke.
            </div>
        </div>
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE (in the dreamscape)</div>
            <div class="character-speech">"Beautiful. Your magic dreams of becoming everything...a protector, destroyer, and a creator. Most mages have one nature. You have multitudes. The question is: which one will you choose to be?"</div>
        </div>
        <div class="choices-container fade-in" style="background: linear-gradient(135deg, rgba(87, 206, 235, 0.1) 0%, rgba(135, 206, 235, 0.2) 100%);">
            <h3 style="color: #add8e6; margin-bottom: 15px;">In the dreamscape, what form does your magic take?</h3>
            <button class="choice-button" onclick="makeChoice('dream_wings', 'dream_wings_response')">Wings of violet fire—freedom to soar above everything</button>
            <button class="choice-button" onclick="makeChoice('dream_armor', 'dream_armor_response')">Armor of starlight—protection for yourself and others</button>
            <button class="choice-button" onclick="makeChoice('dream_storm', 'dream_storm_response')">A violet storm—raw power barely contained</button>
        </div>
    `
},

dream_wings_response: {
    content: `
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE (delighted)</div>
            <div class="character-speech">"Wings! Of course. You don't want to fight, you want to fly. To be free. Your magic isn't a weapon, it's an escape route. Remember this feeling when you wake."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('training_interrupted')">Wake Up</button>
        </div>
    `,
    effects: { chance: 2, fable: 1 }
},

dream_armor_response: {
    content: `
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE (thoughtful)</div>
            <div class="character-speech">"A protector's heart beats in your chest. Your magic wants to shield, not strike. That's... unexpectedly noble. The others will try to make you a weapon. But you're choosing to be a shield."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('training_interrupted')">Wake Up</button>
        </div>
    `,
    effects: { chance: 1}
},

dream_storm_response: {
    content: `
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE (stepping back, wary)</div>
            <div class="character-speech">"Ah. The honest answer. Your magic doesn't want to be controlled or directed, instead it wants to be unleashed. You're not a mage, love. You're a force of nature."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('training_interrupted')">Wake Up</button>
        </div>
    `,
    effects: { chance: 1}
},

training_interrupted: {
    content: `
        <div class="story-text fade-in">
            <div class="sfx">🔔 URGENT BELLS CLANG THROUGH THE SAFEHOUSE 🔔</div>
            <div class="narrator-text">
                Your training is cut short by the sound of warning bells. Three sharp rings. A pause. Then, three more.
                <br><br>
                Everyone moves at once. Weapons grabbed, orders given, positions taken. The casual atmosphere evaporates, replaced by deadly readiness.
            </div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (voice sharp, commanding)</div>
            <div class="character-speech">"Someone's at the outer passages. Kit, go to the western tunnel. Chance and Tris, take the eastern approach. I'll bring our new friend to the observation point."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('mysterious_arrival')">Next</button>
        </div>
    `
},

mysterious_arrival: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                Fable leads you up a narrow staircase to a hidden alcove with thin slits in the wall, it's perfect for observing the entrance without being seen. Through the gaps, you see a figure approaching through the tunnels.
                <br><br>
                It's a young woman, moving with strange, stuttering steps. Her pink hair is disheveled, her pale skin almost translucent in the dim light. She clutches at her arms as if trying to hold herself together.
                <br><br>
                She stumbles, catches herself against the wall, and you notice her fingers leave frost patterns on the stone. Magic, but... wrong somehow. Suppressed. Fighting to break free.
            </div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (whispering, suspicious)</div>
            <div class="character-speech">"I don't recognize her. But she's clearly a mage" He points, "See? Look how the magic fights against something. Stay here. If this is a trap...I don't want you to get hurt."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('ash_collapse')">Next</button>
        </div>
    `
},

ash_collapse: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                The mysterious woman takes another step, then collapses. Her body convulses, and frost spreads from where she falls, crackling across the stone in violent bursts. She's crying out, but the words are muffled, desperate.
            </div>
            <div class="dialogue">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">MYSTERIOUS WOMAN (gasping):</div>
                <div class="character-speech">"Please... help... the medicine... it's running out... I can't... control..."</div>
            </div>
            <div class="narrator-text">
                Her magic erupts again, this time as ice shards begin shooting upward, then immediately melt into steam. It's like watching two forces war inside one body.
            </div>
        </div>
        <div class="choices-container fade-in">
            <h3 style="color: #ffd700; margin-bottom: 15px;">The woman needs help, but this could be a trap. What do you do?</h3>
            <button class="choice-button" onclick="makeChoice('help_immediately', 'help_ash_response')">Rush to help her, no one should suffer like that</button>
            <button class="choice-button" onclick="makeChoice('stay_cautious', 'cautious_ash_response')">Stay hidden and let the others handle it—Fable warned you</button>
            <button class="choice-button" onclick="makeChoice('sense_magic', 'sense_ash_response')">Try to sense her magic and understand what's really happening</button>
        </div>
    `
},

help_ash_response: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                You ignore Fable's warning and rush down to the collapsed woman. Up close, you can see the pain etched on her face. You know for certain that this isn't an act. Her magic is tearing her apart from the inside.
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
            <div class="character-speech">"Suppressants? You're on magical suppressants? Those are Inquisition drugs. Move back, I know what is happening, this is withdrawal. I've seen it before."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('ash_revelation')">Next</button>
        </div>
    `,
    effects: { fable: -1, tris: 2 }
},

cautious_ash_response: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                You stay in the alcove as instructed, watching as Kit and Chance approach the fallen woman carefully. Kit has his blade drawn, while Chance's hands glow with dream magic.
            </div>
        </div>
        <div class="character-scene kit-border fade-in">
            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
            <div class="character-name">KIT (assessment mode)</div>
            <div class="character-speech">"She's in magical withdrawal. Look at the symptoms, you can see the suppressed power fighting to surface. The question is: why is she here?"</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('ash_revelation')">Next</button>
        </div>
    `,
    effects: { kit: 1, fable: 1, chance: 1 }
},

sense_ash_response: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                You reach out with your own magic, carefully touching the edges of hers. What you feel makes you gasp. You can feel that her power is caged, wrapped in artificial barriers that are crumbling. But beneath that...
                <br><br>
                There's something else. A thread of magic that doesn't belong to her, woven through her mind like puppet strings. Strange magic.
            </div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (noticing your reaction)</div>
            <div class="character-speech">"What do you sense? Your magic is resonating with something..."</div>
        </div>
        <div class="choices-container fade-in">
            <h3 style="color: #ffd700; margin-bottom: 15px;">What do you tell them?</h3>
            <button class="choice-button" onclick="makeChoice('reveal_compulsion', 'reveal_compulsion_response')">Tell them about the strange magic—she's being manipulated by something</button>
            <button class="choice-button" onclick="makeChoice('focus_withdrawal', 'focus_withdrawal_response')">Focus on the withdrawal—she needs medical help first</button>
            <button class="choice-button" onclick="makeChoice('uncertain_magic', 'uncertain_magic_response')">Admit uncertainty, tell him the magic feels wrong but you're not sure why</button>
        </div>
    `,
    effects: { chance: 1 }
},

reveal_compulsion_response: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                "She's being controlled," you say urgently. "There's compulsion magic woven through her mind. Someone sent her here."
            </div>
        </div>
        <div class="character-scene kit-border fade-in">
            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
            <div class="character-name">KIT (immediately alert)</div>
            <div class="character-speech">"A spy. Or worse—a weapon. Everyone back. If she's under compulsion, she could be triggered to—"</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                The woman's eyes snap open, glowing with unnatural light. She speaks, but the voice isn't entirely hers.
            </div>
            <div class="dialogue">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH/CONTROLLED (dual voice)</div>
                <div class="character-speech">"The heretics... must be... no, I won't... get out of my head... CLEANSED... stop it... HELP ME!"</div>
            </div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('ash_struggle')">Next</button>
        </div>
    `,
    effects: { kit: 1, fable: -1 }
},

focus_withdrawal_response: {
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
    effects: { tris: 2, kit:1 }
},

uncertain_magic_response: {
    content: `
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE (eyes unfocused, seeing beyond)</div>
            <div class="character-speech">"I see her in the dreamscape... fractured. Two selves fighting for control. She's not here to spy, I think she's here to escape. But even she doesn't know it yet."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('ash_revelation')">Next</button>
        </div>
    `,
    effects: { chance: 1, fable:1 }
},

ash_struggle: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                The woman, though you don't know her name yet, fights against invisible chains. Her magic explodes outward in desperate bursts, frost and flame alternating in chaotic patterns.
            </div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (decisive)</div>
            <div class="character-speech">"She's fighting the compulsion. We can help her break free, but it's risky. Or we turn her away, we can't risk harboring an Inquisition weapon. What's your instinct, spark?"</div>
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
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                As the rebels work to stabilize her, the woman's eyes flutter open. She looks around in confusion and growing horror.
            </div>
            <div class="dialogue">
                <div class="character-name">MYSTERIOUS WOMAN (voice breaking)</div>
                <div class="character-speech">"No... I wasn't supposed to... Father Caine said the medicine would... I'm not...I'm... I'm..."</div>
            </div>
            <div class="narrator-text">
                She breaks down sobbing, her fractured conditioning warring with the reality of where she is. The suppressants that kept her "safe" from her own magic are failing, and with them, the lies she's lived with.
            </div>
        </div>
        <div class="character-scene tris-border fade-in">
            <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
            <div class="character-name">TRIS (clinical but not unkind)</div>
            <div class="character-speech">"The suppressants aren't medicine. They're chains. You're going through withdrawal because your body is remembering how to be whole. It will hurt. But you'll survive."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('chapter3_ending')">Next</button>
        </div>
    `
},

save_ash_ending: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                "We save her," you say firmly. "The Inquisition did this to her. We can't abandon someone just because they were a victim of the same system we're fighting."
                <br><br>
                Fable nods approvingly, while Kit looks skeptical but doesn't argue. Together, you work to break the compulsion magic, you use your raw power to provide the force while the others guide it.
                <br><br>
                When it's over, the woman collapses, free but exhausted. 
            </div>
            <div class="dialogue">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name">ASH (weakly)</div>
                <div class="character-speech">"... thank you."</div>
            </div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('chapter3_ending')">Continue</button>
        </div>
    `,
    effects: { fable: 1, kit: -1, tris: 1, chance: 1 }
},

cautious_ash_ending: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                "We help her," you say, "but carefully. Set up protections. Watch her. She's a victim, but that doesn't mean she's not dangerous."
                <br><br>
                Kit nods approvingly at your pragmatism. Wards are established, watches set. Ash is given a space to recover, but under guard.
            </div>
            <div class="dialogue">
                <div class="character-name">KIT (quiet)</div>
                <div class="character-speech">"We'll keep an eye on her until we understand more."</div>
            </div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('chapter3_ending')">Continue</button>
        </div>
    `,
    effects: { kit: 2, fable: -1, tris: 1, chance:-1}
},

reject_ash_ending: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                "She has to go," you say, though the words taste bitter. "We can't risk everyone for one person, especially one that it seems like the Inquisition shaped."
                <br><br>
                Kit agrees, but Fable looks disappointed, as does Tris. Chance looks away, their expression unreadable.
            </div>
            <div class="dialogue">
                <div class="character-name">ASH (desperate)</div>
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-speech">"I...I can't go back...please...you have to help me...please"</div>
            </div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('chapter3_ending')">Continue</button>
        </div>
    `,
    effects: { kit: 1, fable: -2, chance: 1, tris: -1 }
},

chapter3_ending: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                The group agrees to take in the strange woman and keep her safe, for now. She introduces herself to you all as Ash, she is the daughter of a minor noble family. One who had been feeding her suppresants for years.
                <br> Before Fable could ask more, the young woman collapsed and Tris took her to the infirmary. 
               <div class="character-name"> ASH </div>
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                Night falls over the safehouse. Your first full day with the Morte Custodi draws to a close, but it's clear this is just the beginning.
                <br>
                You've tasted what training might offer: control, understanding, or perhaps just more questions. And, you've seen how quickly safety can shatter when someone unexpected arrives at your door.
                <br>
                Your magic hums beneath your skin, neither tamed nor wild, but something in between. Tomorrow will bring new challenges, new choices.
                <br><br>
                But tonight, for the first time in a long time, you're not alone.
            </div>
            <div class="narrator-text" style="text-align: center; font-size: 1.3em; color: #ffd700; margin-top: 30px;">
                <strong>END OF CHAPTER THREE</strong><br><br>
                <em>Your training has begun, but greater challenges await...</em>
            </div>
        </div>
        <div id="chapter3-relationships" style="margin-top: 20px; padding: 20px; background: rgba(255, 215, 0, 0.1); border-radius: 10px; text-align: center;">
            <div style="color: #ffd700; margin-bottom: 15px; font-size: 1.1em;">Your bonds with the Morte Custodi continue to evolve...</div>
            <button class="next-button" onclick="alert('Chapter 4: The First Mission - Coming Soon!')">To Be Continued...</button>
        </div>
    `
}
};