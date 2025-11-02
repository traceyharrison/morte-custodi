import { ENVIRON_IMAGES, CHARACTER_IMAGES } from '../constants.js';
import { diceSystem } from '../diceSystem.js';
import { relationshipManager } from '../relationshipManager.js';

export const chapter4Scenes = {
ash_morning: {
    id: '4.1.0',
    title: 'Ash\'s First Morning',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                Morning light filters through the safehouse once more, but this time something is different. The air feels heavier, charged with an unfamiliar tension. You wake to find Tris already moving between patients in her makeshift infirmary, and there, in the corner bed, lies Ash.
                <br><br>
                Her pink hair spreads across the pillow like spilled paint, and even in sleep, her face is drawn with pain. Her magic pulses erratically beneath her skin, visible as faint shimmer of frost over her skin.
                <br><br>
                You approach quietly, not wanting to disturb her, but as you draw near, her eyes flutter open. They're unfocused at first, then lock onto you with sudden intensity.
            </div>
        </div>
        <div class="choices-container fade-in">
            <h3 style="color: #ffd700; margin-bottom: 15px;">How do you greet Ash?</h3>
            <button class="choice-button" onclick="makeChoice('gentle_greeting', 'gentle_greeting_response')">Smile gently from the doorway. "Good morning"</button>
            <button class="choice-button" onclick="makeChoice('distant_greeting', 'distant_greeting_response')">Keep your distance. "I see you're awake."</button>
            <button class="choice-button" onclick="makeChoice('kind_greeting', 'kind_greeting_response')">Sit beside her bed. "I'm glad you made it through the night. How are you?"</button>
        </div>
    `
},

gentle_greeting_response: {
    id: '4.1.1',
    title: 'Gentle Greeting',
    content: `
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH (voice weak, confused)</div>
            <div class="character-speech">"You're... you're the one from yesterday. The one who..."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                She tries to sit up but winces, her body still recovering from the withdrawal.
            </div>
        </div>
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH (struggling)</div>
            <div class="character-speech">"I don't... where am I? This isn't... how did I get here? This…it's all wrong and…everything hurts."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                Her eyes fill with tears, but she blinks them back fiercely.
            </div>
        </div>
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH</div>
            <div class="character-speech">"I'm alright…I think…"</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('tris_examination')">Next</button>
        </div>
    `,
    effects: { ash: 1 }
},

distant_greeting_response: {
    id: '4.1.2',
    title: 'Distant Greeting',
    content: `
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH (defensive)</div>
            <div class="character-speech">"Good to know you're observant."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                She looks away, pulling the blankets tighter around herself. The rejection in her posture is clear, even through her obvious pain.
            </div>
        </div>
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH (quietly)</div>
            <div class="character-speech">"I understand that none of you trust me, but you don't have to treat me like I'm a prisoner. I don't…I don't know what's going on any more than any of you…"</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('tris_examination')">Next</button>
        </div>
    `,
    effects: { ash: -1 }
},

kind_greeting_response: {
    id: '4.1.3',
    title: 'Kind Greeting',
    content: `
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH (surprised)</div>
            <div class="character-speech">"Why do you…care?"</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                Something in her expression shifts, a crack in the defensive wall she's built around herself. You say nothing, simply give her a moment to process her emotions.
            </div>
        </div>
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH (voice breaking)</div>
            <div class="character-speech">"I'm…thank you. No one has asked me if I'm okay in a long time."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('tris_examination')">Next</button>
        </div>
    `,
    effects: { ash: 2 }
},

tris_examination: {
    id: '4.2.0',
    title: 'Tris\'s Examination',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                Tris approaches with her usual clinical efficiency, but there's something gentler in her eyes as she looks at Ash.
            </div>
        </div>
        <div class="character-scene tris-border fade-in">
            <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
            <div class="character-name">TRIS (professional)</div>
            <div class="character-speech">"I need to check your channels again. The withdrawal is progressing well, but you're not out of danger yet. Your magic is still fighting against years of suppression."</div>
        </div>
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH (anxious)</div>
            <div class="character-speech">"Will it... will it hurt?"</div>
        </div>
        <div class="character-scene tris-border fade-in">
            <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
            <div class="character-name">TRIS</div>
            <div class="character-speech">"There may be some discomfort, yes. But I'll be as gentle as I can."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                Tris's hands glow with soft green light as she begins her examination. Ash flinches at first, then gradually relaxes as the healing magic flows through her.
            </div>
        </div>
        <div class="character-scene tris-border fade-in">
            <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
            <div class="character-name">TRIS (frowning)</div>
            <div class="character-speech">"Your magical channels are damaged, scarred from years of forcing your power down. Whoever prescribed those suppressants was slowly killing you."</div>
        </div>
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH (shocked)</div>
            <div class="character-speech">"Killing me? That can't be, Father Caine said–"</div>
        </div>
        <div class="character-scene tris-border fade-in">
            <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
            <div class="character-name">TRIS (cutting her off)</div>
            <div class="character-speech">"Father Caine lied to you."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                Ash looks to you for confirmation, and all you can do is nod in agreement with Tris.
            </div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('ash_questions')">Next</button>
        </div>
    `
},

ash_questions: {
    id: '4.3.0',
    title: 'Ash Has Questions',
    content: `
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH (looking between you and Tris)</div>
            <div class="character-speech">"I don't understand any of this. Magic is a curse. Those suppressants were keeping me safe and…and keeping others safe from me. But you... all of you... you use magic openly?"</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                She looks at you with desperate confusion.
            </div>
        </div>
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH</div>
            <div class="character-speech">"How? How are you not afraid of becoming monsters?"</div>
        </div>
        <div class="choices-container fade-in">
            <h3 style="color: #ffd700; margin-bottom: 15px;">How do you respond?</h3>
            <button class="choice-button" onclick="makeChoice('magic_not_evil', 'magic_not_evil_response')">"The Crown is wrong, magic isn't evil, people are."</button>
            <button class="choice-button" onclick="makeChoice('learning_together', 'learning_together_response')">"We choose freedom and kindness over fear, that's how."</button>
            <button class="choice-button" onclick="makeChoice('never_monster', 'never_monster_response')">"You were never the monster, Ash. They were."</button>
        </div>
    `
},

magic_not_evil_response: {
    id: '4.3.1',
    title: 'Magic Isn\'t Evil Response',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                You speak with calm conviction, and Ash listens intently, as if hearing these words for the first time.
            </div>
        </div>
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH</div>
            <div class="character-speech">"Evil? But that doesn't make any sense... my family loves me. Father Caine blessed our house. They wouldn't..."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                Her voice trails off as doubt creeps in, warring with years of conditioning.
            </div>
        </div>
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH (whisper)</div>
            <div class="character-speech">"Would they?"</div>
        </div>
        <div class="character-scene tris-border fade-in">
            <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
            <div class="character-name">TRIS (gently)</div>
            <div class="character-speech">"How did you get here, Ash?"</div>
        </div>
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH (quietly)</div>
            <div class="character-speech">"I was in the woods with Father Caine, and he told me to wait while he went to get more supplies for our fire. Then he…never came back. I walked until I found this place…you don't think…you don't think he could have left me there on purpose?"</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('fable_arrives')">Next</button>
        </div>
    `,
    effects: { ash: -1, tris: 1 }
},

learning_together_response: {
    id: '4.3.2',
    title: 'Learning Together Response',
    content: `
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH (slight smile)</div>
            <div class="character-speech">"That sounds... nice."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                She flexes her fingers, and small ice crystals form at her fingertips before melting away.
            </div>
        </div>
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH</div>
            <div class="character-speech">"I never got to choose before. It was always just... suppress it. Hide it. Pretend it doesn't exist."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('fable_arrives')">Next</button>
        </div>
    `,
    effects: { ash: 1 }
},

never_monster_response: {
    id: '4.3.3',
    title: 'Never the Monster Response',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                Ash stares at you, her pink eyes wide with emotion.
            </div>
        </div>
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH</div>
            <div class="character-speech">"I'm not... I'm not a monster?"</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                The question is so broken, so full of years of pain, that even Tris's clinical mask cracks slightly.
            </div>
        </div>
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH (holding back tears)</div>
            <div class="character-speech">"They told me... they said if I ever stopped the medicine, I'd hurt people. That I'd lose control and destroy everything. That's why I had to keep taking it, no matter how sick it made me. Then, yesterday, I was in the woods with Father Caine, and he told me to wait while he went to get more supplies for our fire. Then he…never came back. I walked until I found this place…I think…I think he did it on purpose, hoping I wouldn't find help."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                She composes herself despite the tears that slip from the corner of her eyes.
            </div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('fable_arrives')">Next</button>
        </div>
    `,
    effects: { ash: 2, tris: 1 }
},

fable_arrives: {
    id: '4.4.0',
    title: 'Fable Arrives',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                Fable enters the infirmary, his usual warm smile softening as he sees Ash's tears. He pulls up a chair and sits down with an effortless, fluid grace.
            </div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (gentle)</div>
            <div class="character-speech">"Ash, is it? Tris tells me you're recovering well, considering everything you've been through."</div>
        </div>
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH (wiping tears)</div>
            <div class="character-speech">"I don't even know what I've been through."</div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE</div>
            <div class="character-speech">"Yes, well, that's what I was hoping we could learn together. We need to know how you found your way here and if there is anyone else coming to look for you."</div>
        </div>
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH (quietly)</div>
            <div class="character-speech">"Yesterday I was in the woods with Father Caine collecting firewood and helping him prepare for his Winter Attonement. Once it started to get dark, he told me to wait while he went to get more supplies for our fire. So I waited, and waited, and waited, for hours, but he…never came back. I got cold, and hungry, and I walked until I found this place…you don't think…you don't think he could have left me there on purpose?"</div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE</div>
            <div class="character-speech">"That's something we need to find out. For now, just rest and recover, and we can talk once you're healed."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                Fable puts a reassuring hand on hers and nods, before turning to leave, stopping by Tris near the door and speaking quietly.
            </div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE</div>
            <div class="character-speech">"Keep an eye on her. One of the most challenging parts of breaking free from the Inquisition is freeing yourself from their lies."</div>
        </div>
        <div class="character-scene tris-border fade-in">
            <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
            <div class="character-name">TRIS (neutral)</div>
            <div class="character-speech">"I remember, General. Vividly."</div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (sad smile)</div>
            <div class="character-speech">"So you do, Doc, so you do."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('ash_magic_flare')">Next</button>
        </div>
    `,
    effects: { fable: 1, ash: 1 }
},

ash_magic_flare: {
    id: '4.5.0',
    title: 'Ash\'s Magic Flares',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                Without warning, Ash cries out in sudden pain as her magic surges. Ice spreads across the bed in jagged patterns, frost climbing the walls.
            </div>
        </div>
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH (terrified)</div>
            <div class="character-speech">"No! No, why is this happening? I can't control it! Everyone get back!"</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                The temperature in the room plummets. Your breath mists in the suddenly freezing air as ice crawls its way across the room.
            </div>
        </div>
        <div class="choices-container fade-in">
            <h3 style="color: #ffd700; margin-bottom: 15px;">What do you do?</h3>
            <button class="choice-button" onclick="makeChoice('calm_words', 'calm_with_words')">Try to calm her with words. "Ash, listen to my voice. You're safe and you're in control."</button>
            <button class="choice-button" onclick="makeChoice('magic_counter', 'magic_counteract')">Use your own magic to counteract hers, attempting to stop the spread</button>
            <button class="choice-button" onclick="makeChoice('let_others', 'let_others_handle')">Step back and let Tris and Fable handle it, you're not sure if you'll help or hurt right now.</button>
        </div>
    `
},

calm_with_words: {
    id: '4.5.1',
    title: 'Calm With Words',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                You step closer despite the cold, your voice steady and calm as you tell Ash that she is okay.
            </div>
        </div>
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH (panicking)</div>
            <div class="character-speech">"Get away! I'll hurt you!"</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                But you don't move. You just keep talking, your presence a steady anchor in her storm as you continue to remind her that she is safe.
                <br><br>
                Slowly, gradually, the ice stops spreading. Ash's breathing evens out. The frost begins to melt.
            </div>
        </div>
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH (exhausted)</div>
            <div class="character-speech">"How did you... I've never been able to stop it once it starts."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                Fable looks at you, impressed.
            </div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE</div>
            <div class="character-speech">"That's because you've never had us before."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('kit_enters')">Next</button>
        </div>
    `,
    effects: { ash: 2, fable: 1 }
},

magic_counteract: {
    id: '4.5.2',
    title: 'Magic Counteract',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                You reach out with your own power, violet energy meeting her ice. The magics swirl together, not fighting, but finding balanc until eventually yours is able to soothe her magic into something calm and reserved.
            </div>
        </div>
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH (amazed)</div>
            <div class="character-speech">"Your magic... it's helping mine calm down. How?"</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                You're not sure yourself, but somehow your chaotic power is helping to stabilize hers, giving it structure without suppressing it.
            </div>
        </div>
        <div class="character-scene tris-border fade-in">
            <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
            <div class="character-name">TRIS (impressed)</div>
            <div class="character-speech">"Remarkable. Your magic is adaptive, responding to need rather than force. I'll have to investigate this further next time we meet."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('kit_enters')">Next</button>
        </div>
    `,
    effects: { ash: 1, tris: 1 }
},

let_others_handle: {
    id: '4.5.3',
    title: 'Let Others Handle It',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                You step back, giving Tris and Fable space to work, worried you'll just get in the way. Tris's healing magic wraps around Ash like a warm blanket while Fable's shadows absorb the excess cold spreading through the room.
            </div>
        </div>
        <div class="character-scene tris-border fade-in">
            <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
            <div class="character-name">TRIS (working)</div>
            <div class="character-speech">"It's alright. We've got you. Just breathe."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                Between the two of them, they manage to bring Ash's magic under control. But you notice Ash looking at you with something like disappointment.
            </div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('kit_enters')">Next</button>
        </div>
    `,
    effects: { ash: -1, tris: 1, fable: 1 }
},

kit_enters: {
    id: '4.6.0',
    title: 'Kit Enters',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                Kit strides into the infirmary wearing his sturdy leather armor. His expression is serious as he surveys the frost-covered walls with a tactical eye.
            </div>
        </div>
        <div class="character-scene kit-border fade-in">
            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
            <div class="character-name">KIT (to Fable)</div>
            <div class="character-speech">"We need to talk about this. She's untrained, unstable, and her magic is only half under her control. That's a liability."</div>
        </div>
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH (shrinking back)</div>
            <div class="character-speech">"I'm sorry. I didn't mean to—"</div>
        </div>
        <div class="character-scene kit-border fade-in">
            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
            <div class="character-name">KIT (cutting her off)</div>
            <div class="character-speech">"I'm not blaming you. I'm stating facts. It's not your fault, but it is reality."</div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (warning)</div>
            <div class="character-speech">"Kit..."</div>
        </div>
        <div class="character-scene kit-border fade-in">
            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
            <div class="character-name">KIT</div>
            <div class="character-speech">"We can help her. But she needs to be in control of herself. She also needs intensive training, now. Before someone gets seriously hurt."</div>
        </div>
        <div class="choices-container fade-in">
            <h3 style="color: #ffd700; margin-bottom: 15px;">Do you agree with Kit?</h3>
            <button class="choice-button" onclick="makeChoice('agree_kit', 'agree_with_kit')">"He's right. Ash needs training for her own safety."</button>
            <button class="choice-button" onclick="makeChoice('time_heal', 'time_to_heal')">"She needs time to heal and recover first. Training can wait."</button>
            <button class="choice-button" onclick="makeChoice('needs_safe', 'needs_to_feel_safe')">"What Ash needs is to feel safe and free from control, not pressured."</button>
        </div>
    `
},

agree_with_kit: {
    id: '4.6.1',
    title: 'Agree With Kit',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                You nod, understanding Kit's tactical perspective even if his delivery is somewhat harsh.
            </div>
        </div>
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH (hurt)</div>
            <div class="character-speech">"If I'm so dangerous, why not just kick me out?"</div>
        </div>
        <div class="character-scene kit-border fade-in">
            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
            <div class="character-name">KIT</div>
            <div class="character-speech">"It's not out of the question."</div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (warning)</div>
            <div class="character-speech">"Kit–"</div>
        </div>
        <div class="character-scene kit-border fade-in">
            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
            <div class="character-name">KIT</div>
            <div class="character-speech">"But for now, we'll start with basic exercises. Small, controlled releases of power. Nothing dramatic."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                Ash looks small in her bed, but there's a determination in her eyes, mixed with fear. She nods in agreement, accepting Kit's offer for training, if somewhat reluctantly.
            </div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('chance_dreamwalking')">Next</button>
        </div>
    `,
    effects: { kit: 2, ash: -1, tris: -1 }
},

time_to_heal: {
    id: '4.6.2',
    title: 'Time to Heal First',
    content: `
        <div class="character-scene tris-border fade-in">
            <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
            <div class="character-name">TRIS (firm)</div>
            <div class="character-speech">"I agree. Medically speaking, she's still in withdrawal. Pushing her to use magic right now could cause permanent damage to her channels."</div>
        </div>
        <div class="character-scene kit-border fade-in">
            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
            <div class="character-name">KIT (frustrated)</div>
            <div class="character-speech">"And letting her magic flare uncontrolled could cause damage to the safehouse."</div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE</div>
            <div class="character-speech">"The safehouse can be repaired; people can't. Perhaps we find a middle ground? Light exercises, but only when Tris clears her medically."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                Kit considers this, then nods grudgingly. As does Tris. The pair shakes on the agreement.
            </div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('chance_dreamwalking')">Next</button>
        </div>
    `,
    effects: { tris: 2, kit: -1, ash: 1 }
},

needs_to_feel_safe: {
    id: '4.6.3',
    title: 'Needs to Feel Safe',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                You speak up, your voice carrying conviction. You insist that Ash needs time to heal before she stands any chance of controlling her magic.
            </div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (smiling)</div>
            <div class="character-speech">"Well said, spark."</div>
        </div>
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH (grateful)</div>
            <div class="character-speech">"Thank you. I... I want to learn. I do. But everything is happening so fast. I just…I need time to breathe."</div>
        </div>
        <div class="character-scene kit-border fade-in">
            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
            <div class="character-name">KIT (sighing)</div>
            <div class="character-speech">"Fine. But the moment she's ready, training begins. Agreed?"</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                Ash nods, and you can see some of the tension leave her shoulders.
            </div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('chance_dreamwalking')">Next</button>
        </div>
    `,
    effects: { ash: 2, fable: 1, tris: 1 }
},

chance_dreamwalking: {
    id: '4.7.0',
    title: 'Chance\'s Offer',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                Chance appears in the doorway, having been listening quietly. They move with their usual fluid grace as they enter the room.
            </div>
        </div>
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE (to Ash)</div>
            <div class="character-speech">"There's another option, if you're interested. Less intense than Kit's bootcamp at the very least."</div>
        </div>
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH (uncertain)</div>
            <div class="character-speech">"What is it?"</div>
        </div>
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE</div>
            <div class="character-speech">"I could walk your dreams, help you process some of what you've been through. Often the mind needs healing as much as the body."</div>
        </div>
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH</div>
            <div class="character-speech">"Walk my dreams? That sounds... invasive."</div>
        </div>
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE (reassuring)</div>
            <div class="character-speech">"I would only see what you allow me to see. And dreams can be a safe space to confront fears that feel too overwhelming in the real world."</div>
        </div>
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH (looking at you)</div>
            <div class="character-speech">"What do you think? Should I do it?"</div>
        </div>
        <div class="choices-container fade-in">
            <h3 style="color: #ffd700; margin-bottom: 15px;">What do you advise?</h3>
            <button class="choice-button" onclick="makeChoice('recommend_chance', 'recommend_chance_response')">"Chance helped me understand my magic. They could help you too."</button>
            <button class="choice-button" onclick="makeChoice('her_choice', 'her_choice_response')">"It's your choice. No one should pressure you either way."</button>
            <button class="choice-button" onclick="makeChoice('wait_stronger', 'wait_until_stronger')">"Maybe wait until you feel stronger first."</button>
        </div>
    `
},

recommend_chance_response: {
    id: '4.7.1',
    title: 'Recommend Chance',
    content: `
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE (pleased)</div>
            <div class="character-speech">"I promise, I'll be gentle. And if at any point you want me to leave, I will."</div>
        </div>
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH (nervous but willing)</div>
            <div class="character-speech">"Okay. I trust... I trust you all, I think. Or, well…I'm trying to."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                Chance smiles warmly and begins preparing their dream-weaving ritual.
            </div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('ash_family_revelation')">Next</button>
        </div>
    `,
    effects: { chance: 2, ash: 1 }
},

her_choice_response: {
    id: '4.7.2',
    title: 'Her Choice',
    content: `
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH (thoughtful)</div>
            <div class="character-speech">"My choice? Right. I'm…not exactly used to having those."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                She looks at Chance for a long moment, weighing the offer.
            </div>
        </div>
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH</div>
            <div class="character-speech">"I think... I think I'd like to try. But slowly?"</div>
        </div>
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE (nodding)</div>
            <div class="character-speech">"As slowly as you need."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('ash_family_revelation')">Next</button>
        </div>
    `,
    effects: { ash: 2, chance: 1 }
},

wait_until_stronger: {
    id: '4.7.3',
    title: 'Wait Until Stronger',
    content: `
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE</div>
            <div class="character-speech">"The offer stands whenever you're ready, Ash."</div>
        </div>
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH (relieved)</div>
            <div class="character-speech">"Thank you. For understanding and…not pushing."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                Chance nods and withdraws, leaving Ash to rest.
            </div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('ash_family_revelation')">Next</button>
        </div>
    `,
    effects: { ash: 1, chance: -1 }
},

ash_family_revelation: {
    id: '4.8.0',
    title: 'Ash\'s Family Revelation',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                Slowly, Ash becomes more talkative, though pain still shadows her features and she frequently needs to rest.
            </div>
        </div>
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH (bitter)</div>
            <div class="character-speech">"I keep thinking about my family. The Juvadi family has served the Inquisition for generations. Hell, my own father is a magistrate and my mother leads prayer circles. And yet when it came to me…"</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                Her hands clench the blankets, frost seeping through her fingers.
            </div>
        </div>
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH</div>
            <div class="character-speech">"They loved me, I think. In their way. But they loved their reputation more. When my magic first appeared, they called it a test from the gods. A trial for them to overcome through faith and discipline. Like I was nothing more than a burden for them to endure."</div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (gently)</div>
            <div class="character-speech">"And the suppressants? When did they start giving them to you?"</div>
        </div>
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH</div>
            <div class="character-speech">"Father Caine prescribed them. It started when I was three or four. He said they were blessed medicine that would protect me. I…I don't know what to think now…"</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                The room falls silent at that revelation.
            </div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE</div>
            <div class="character-speech">"Think about healing, then we'll handle what comes after."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('training_decision')">Next</button>
        </div>
    `
},

training_decision: {
    id: '4.9.0',
    title: 'Training Decision',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                Later, after much discussion, a training plan is formed. Kit will teach combat and control. Fable will teach magical theory. Tris will monitor her health. And Chance offers dream therapy when she's ready.
            </div>
        </div>
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH (overwhelmed)</div>
            <div class="character-speech">"That's... that's a lot of teachers."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                She looks at you specifically.
            </div>
        </div>
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH</div>
            <div class="character-speech">"What about you? Will you help train me too?"</div>
        </div>
        <div class="choices-container fade-in">
            <h3 style="color: #ffd700; margin-bottom: 15px;">How do you respond?</h3>
            <button class="choice-button" onclick="makeChoice('learn_together', 'learn_together_training')">"Of course. We'll train together; I have just as much to learn as you."</button>
            <button class="choice-button" onclick="makeChoice('help_however', 'help_however_can')">"I'm still figuring things out myself, but I'll help however I can."</button>
            <button class="choice-button" onclick="makeChoice('focus_teachers', 'focus_on_teachers')">"I think you should focus on the experienced teachers first."</button>
        </div>
    `
},

learn_together_training: {
    id: '4.9.1',
    title: 'Learn Together',
    content: `
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH (smiling genuinely for the first time)</div>
            <div class="character-speech">"Together. I…I think I like that word."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                There's something fragile but hopeful in her expression, like a flower beginning to bloom after a long winter.
            </div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('chapter4_ending')">Next</button>
        </div>
    `,
    effects: { ash: 2 }
},

help_however_can: {
    id: '4.9.2',
    title: 'Help However Possible',
    content: `
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH</div>
            <div class="character-speech">"You're learning too? But your magic seemed so... powerful."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                You laugh at that, remembering all the times your power has exploded unexpectedly. You remind Ash that power and control are very different things.
            </div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('chapter4_ending')">Next</button>
        </div>
    `,
    effects: { ash: 1 }
},

focus_on_teachers: {
    id: '4.9.3',
    title: 'Focus on Teachers',
    content: `
        <div class="character-scene ash-border fade-in">
            <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
            <div class="character-name">ASH (disappointed)</div>
            <div class="character-speech">"Oh. Right. That makes sense. I'm sure you have your own training to focus on anyway."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                She tries to hide the hurt, but it's clear in her eyes.
            </div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('chapter4_ending')">Next</button>
        </div>
    `,
    effects: { ash: -2 }
},

chapter4_ending: {
    id: '4.10.0',
    title: 'Chapter 4 Ending',
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                As night falls once again and plans have been made, Ash is finally sleeping peacefully, her magic no longer fighting against her with every breath. The frost has melted from the walls, replaced by a gentle warmth.
                <br><br>
                Before bed, you find yourself standing in the doorway of the infirmary, watching her sleep. She looks younger like this, more vulnerable. Hard to believe that just yesterday she stumbled into your lives, broken and desperate and begging for help. Hard to believe that you were in the same position just the day before that.
            </div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (appearing beside you)</div>
            <div class="character-speech">"She'll be alright, you know. She's stronger than she realizes. The Inquisition…Gods even her own family tried to break her, but she survived. That takes remarkable resilience."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                You turn to look at Fable, and he flashes you a knowing smile.
            </div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE</div>
            <div class="character-speech">"The same could be said of you, of course. I suppose we collect broken things here and give them a home. Not a bad way to spend a life."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                He walks away, leaving you with your thoughts. Tomorrow brings new challenges. Both yours and Ash's training will truly begin, and with it, new questions about magic, control, and what it means to be free.
                <br><br>
                But tonight, you allow yourself a moment of quiet satisfaction. You helped save someone today. Maybe that's enough.
            </div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('chapter5_start')">End of Demo</button>
        </div>
    `,
    effects: { fable: 1, ash: 1 }
}
};