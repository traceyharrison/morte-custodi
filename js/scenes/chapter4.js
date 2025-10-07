import { CHARACTER_IMAGES } from '../constants.js';
import { diceSystem } from '../diceSystem.js';
import { gameState } from '../gameState.js';
import { relationshipManager } from '../relationshipManager.js';

export const chapter4Scenes = {
    // Morning after Ash's arrival
    ash_morning: {
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Morning light filters weakly through the safehouse. You wake to hushed voices—Tris and Fable arguing in low tones. The air feels different, charged with tension that wasn't there yesterday.
                    <br><br>
                    You remember the collapsed woman. Ash. The woman whose ice magic was tearing her apart from within, fighting the suppressants in her body.
                    <br><br>
                    Rising from your cot, you find the main room transformed into a makeshift isolation ward. Frost patterns crawl across one corner where Tris has cordoned off a section with hanging blankets. The temperature drops noticeably as you approach.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="window.goToScene('morning_briefing')">Next</button>
            </div>
        `
    },

    morning_briefing: {
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    The group has gathered around the central table, but their usual ease is replaced by wary calculation. Kit stands with arms crossed, Chance leans against the wall with an unreadable expression, and Fable studies a worn book with unusual intensity.
                </div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS (exhausted, clinical)</div>
                <div class="character-speech">"She's stable. Barely. The withdrawal is worse than I thought. She's been on suppressants since childhood—at least fifteen years. Her magical channels are... damaged. Atrophied. Like muscles that never learned to work properly."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="window.goToScene('kit_concern')">Next</button>
            </div>
        `
    },

    kit_concern: {
        content: `
            <div class="character-scene kit-border fade-in">
                <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                <div class="character-name">KIT (sharp, strategic)</div>
                <div class="character-speech">"And the compulsion magic? The threads I felt woven through her mind?"</div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS</div>
                <div class="character-speech">"Still there. Dormant, but present. Someone planted triggers deep. If activated..." She pauses. "She could be turned into a weapon against us. Or a spy. Or worse."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="window.goToScene('fable_perspective')">Next</button>
            </div>
        `,
        effects: { kit: 1 }
    },

    fable_perspective: {
        content: `
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE (closing his book)</div>
                <div class="character-speech">"She's also a terrified young woman who escaped her captors. The Judvadi family are minor nobles, but they're fanatics in the church. True believers in the Serpent's Tail doctrine. If they kept a mage child hidden for fifteen years..." He shakes his head. "That's not protection. That's imprisonment."</div>
            </div>
            <div class="character-scene chance-border fade-in">
                <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
                <div class="character-name">CHANCE (quietly)</div>
                <div class="character-speech">"I've walked her dreams. They're... fractured. Full of locked rooms and distant voices telling her she's corrupted, dangerous, and wrong. She believes them. She's more afraid of herself than of us."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="window.goToScene('player_input_decision')">Next</button>
            </div>
        `,
        effects: { fable: 1, chance: 1 }
    },

    player_input_decision: {
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Four pairs of eyes turn to you. Despite being the newest member of the Morte Custodi, your opinion carries weight. You freed yourself from a pyre, and more importantly, you understand what it means to have power you didn't ask for.
                </div>
            </div>
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE</div>
                <div class="character-speech">"What do you think, ${gameState.playerName}? She's awake now. Should we bring her into the fold properly, or keep her alone here, isolated until we understand the compulsion magic better?"</div>
            </div>
            <div class="choices-container fade-in">
                <h3 style="color: #ffd700; margin-bottom: 15px;">How should the group approach Ash?</h3>
                <button class="choice-button" onclick="window.makeChoice('trust_ash', 'trust_ash_response')">Advocate for trust. "She deserves a chance to prove herself. We all did."</button>
                <button class="choice-button" onclick="window.makeChoice('cautious_ash', 'cautious_ash_response')">Support caution. "Help her, but with safeguards. Kit's right about the risk."</button>
                <button class="choice-button" onclick="window.makeChoice('meet_first', 'meet_first_response')">Suggest meeting her first. "Let me talk to her before we decide anything."</button>
            </div>
        `
    },

    trust_ash_response: {
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Your words carry the weight of recent experience. Just days ago, you stood on a pyre with strangers deciding your fate. You know better than anyone else here just what that woman is going though.
                </div>
            </div>
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE (nodding with approval)</div>
                <div class="character-speech">"Well said. Fear breeds the very monsters we're trying to avoid becoming."</div>
            </div>
            <div class="character-scene kit-border fade-in">
                <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                <div class="character-name">KIT (reluctant acceptance)</div>
                <div class="character-speech">"Idealism doesn't stop compulsion triggers. But... I understand the principle. We'll keep watch. Any sign of activation, and we intervene immediately."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="window.goToScene('meet_ash_setup')">Next</button>
            </div>
        `,
        effects: { fable: 2, kit: -1, chance: 1, tris: 0 }
    },

    cautious_ash_response: {
        content: `
            <div class="character-scene kit-border fade-in">
                <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                <div class="character-name">KIT (satisfied)</div>
                <div class="character-speech">"Pragmatic. Good. We'll establish protocols—wards on her quarters, regular checks for compulsion activation, supervised interactions."</div>
            </div>
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE (slight disappointment)</div>
                <div class="character-speech">"Careful we don't become her new jailers. But... yes, some precautions are reasonable."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="window.goToScene('meet_ash_setup')">Next</button>
            </div>
        `,
        effects: { kit: 2, fable: -1, tris: 1, chance: 0 }
    },

    meet_first_response: {
        content: `
            <div class="character-scene chance-border fade-in">
                <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
                <div class="character-name">CHANCE (intrigued)</div>
                <div class="character-speech">"Wise. We'll see who she really is when awake."</div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS (practical)</div>
                <div class="character-speech">"She's weak but conscious. Don't upset her—emotional distress triggers magical surges. We've already had to reinforce the frost wards twice this morning."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="window.goToScene('meet_ash_setup')">Next</button>
            </div>
        `,
        effects: { chance: 1, tris: 1, kit: 0, fable: 1 }
    },

    meet_ash_setup: {
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    You approach the makeshift isolation area. Frost patterns web across the hanging blankets, beautiful and dangerous. The temperature drops with each step until your breath mists in the air.
                    <br><br>
                    You push aside the blanket and enter.
                    <br><br>
                    The space is small, barely ten feet across. Ash sits on a cot in the corner, knees drawn to her chest, pink hair falling in tangled waves around her pale face. Ice crystals sparkle on the floor around her—unconscious manifestations of her power.
                    <br><br>
                    When she sees you, she flinches, pressing herself against the wall. Her pink eyes are wide with fear.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="window.goToScene('first_meeting_ash')">Next</button>
            </div>
        `
    },

    first_meeting_ash: {
        content: `
            <div class="character-scene fade-in" style="border-color: #b19cd9; box-shadow: 0 0 30px rgba(177, 156, 217, 0.5);">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name" style="color: #b19cd9;">ASH (voice barely above a whisper)</div>
                <div class="character-speech">"Don't—please don't come closer. I can't control it. The ice, it just... happens. I don't want to hurt you."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Her hands shake. Frost spreads from her fingertips across the blanket she clutches.
                </div>
            </div>
            <div class="choices-container fade-in">
                <h3 style="color: #ffd700; margin-bottom: 15px;">How do you approach her?</h3>
                <button class="choice-button" onclick="window.makeChoice('gentle_approach', 'gentle_approach_response')">Speak softly and keep your distance. "I'm not here to hurt you. My name is ${gameState.playerName}."</button>
                <button class="choice-button" onclick="window.makeChoice('show_magic', 'show_magic_response')">Show her your own magic. "I understand. Look—I can't control mine either sometimes."</button>
                <button class="choice-button" onclick="window.makeChoice('direct_approach', 'direct_approach_response')">Be direct. "Your magic isn't the problem. Whoever put those suppressants in you is."</button>
            </div>
        `
    },

    gentle_approach_response: {
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    You stay where you are, non-threatening. Her shoulders relax slightly, though fear still haunts her eyes.
                </div>
            </div>
            <div class="character-scene fade-in" style="border-color: #b19cd9;">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name" style="color: #b19cd9;">ASH</div>
                <div class="character-speech">"${gameState.playerName}..." She tests the name like it's a foreign concept. "They said you were... like me. That you have magic too."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="window.goToScene('ash_conversation_branch')">Next</button>
            </div>
        `,
        effects: { ash: 1 }
    },

    show_magic_response: {
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Slowly, carefully, you let violet sparks dance across your fingertips. Small, controlled, but unmistakably magical. Ash's eyes widen—not with fear, but with something like recognition. Like seeing another person stranded on the same island.
                </div>
            </div>
            <div class="character-scene fade-in" style="border-color: #b19cd9;">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name" style="color: #b19cd9;">ASH (breathless)</div>
                <div class="character-speech">"You... you're not afraid of it. How? Father Caine said magic was corruption, that it would eat away at our souls until—" She stops, shaking her head. "But yours looks... different. Beautiful, almost."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="window.goToScene('ash_conversation_branch')">Next</button>
            </div>
        `,
        effects: { ash: 2 }
    },

    direct_approach_response: {
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Your words cut through her fear like a blade. She looks up, startled, and for a moment you see anger flash across her face—the first emotion besides terror.
                </div>
            </div>
            <div class="character-scene fade-in" style="border-color: #b19cd9;">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name" style="color: #b19cd9;">ASH (defensive, but listening)</div>
                <div class="character-speech">"You don't understand. My family—they protected me. The medicine kept me safe from... from becoming a monster. Father Caine said—"</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    She stops, doubt creeping into her voice. The conditioning wars with the reality of her situation.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="window.goToScene('ash_conversation_branch')">Next</button>
            </div>
        `,
        effects: { ash: 1, kit: 1 }
    },

    ash_conversation_branch: {
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Silence stretches between you. Outside the blanket partition, you hear the others moving about, giving you space but staying close enough to intervene if needed.
                </div>
            </div>
            <div class="character-scene fade-in" style="border-color: #b19cd9;">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name" style="color: #b19cd9;">ASH (hesitant)</div>
                <div class="character-speech">"Why did you come in here? Everyone else... they're afraid. I can feel it. But you..." She studies you. "You're not afraid of me."</div>
            </div>
            <div class="choices-container fade-in">
                <h3 style="color: #ffd700; margin-bottom: 15px;">Why aren't you afraid?</h3>
                <button class="choice-button" onclick="window.makeChoice('understand_fear', 'understand_fear_response')">"Because I know what it's like to be feared for something you didn't choose."</button>
                <button class="choice-button" onclick="window.makeChoice('see_person', 'see_person_response')">"Because I see a person, not a weapon. That's what they tried to make you, isn't it?"</button>
                <button class="choice-button" onclick="window.makeChoice('practical_reason', 'practical_reason_response')">"Because fear doesn't help anyone. You need training, not isolation."</button>
            </div>
        `
    },

    understand_fear_response: {
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Something breaks in her expression. The rigid fear cracks, and beneath it you see exhaustion, loneliness, desperation.
                </div>
            </div>
            <div class="character-scene fade-in" style="border-color: #b19cd9;">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name" style="color: #b19cd9;">ASH (voice trembling)</div>
                <div class="character-speech">"I've been alone for so long. In my family's estate, I had a room. One room. For fifteen years." Tears freeze on her cheeks as they fall. "I thought that was love. Protection. But you... but now...."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="window.goToScene('ash_opening_up')">Next</button>
            </div>
        `,
        effects: { ash: 2, fable: 1 }
    },

    see_person_response: {
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    She flinches as if struck. Your words have hit something deep.
                </div>
            </div>
            <div class="character-scene fade-in" style="border-color: #b19cd9;">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name" style="color: #b19cd9;">ASH (barely audible)</div>
                <div class="character-speech">"A weapon. Yes. That's what they said, they called it the 'weapon inside me that needed to be contained.' I never understood what he meant until now" Her voice breaks. "But you don't see that when you look at me?"</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="window.goToScene('ash_opening_up')">Next</button>
            </div>
        `,
        effects: { ash: 2, chance: 1 }
    },

    practical_reason_response: {
        content: `
            <div class="character-scene fade-in" style="border-color: #b19cd9;">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name" style="color: #b19cd9;">ASH (shaking her head)</div>
                <div class="character-speech">"Magic can only be suppressed. That's why the medicine was necessary."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    You gesture to yourself—living proof that he was wrong.
                </div>
            </div>
            <div class="character-scene fade-in" style="border-color: #b19cd9;">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name" style="color: #b19cd9;">ASH (hope creeping into her voice)</div>
                <div class="character-speech">"So... I don't have to be afraid forever? There's a way to live with this?"</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="window.goToScene('ash_opening_up')">Next</button>
            </div>
        `,
        effects: { ash: 1, kit: 1, tris: 1 }
    },

    ash_opening_up: {
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Ash shifts slightly on the cot, the ice around her feet crackling but not spreading. Progress, however small.
                </div>
            </div>
            <div class="character-scene fade-in" style="border-color: #b19cd9;">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name" style="color: #b19cd9;">ASH</div>
                <div class="character-speech">"The others...do they... do they know about the compulsion magic?"</div>
            </div>
            <div class="choices-container fade-in">
                <h3 style="color: #ffd700; margin-bottom: 15px;">How honest should you be?</h3>
                <button class="choice-button" onclick="window.makeChoice('full_honesty', 'full_honesty_response')">Tell her everything. "Yes. They know someone planted triggers in your mind. But we want to help you break free."</button>
                <button class="choice-button" onclick="window.makeChoice('gentle_truth', 'gentle_truth_response')">Soften it. "They know you were hurt by someone. We'll figure out the details together."</button>
                <button class="choice-button" onclick="window.makeChoice('deflect', 'deflect_response')">Deflect. "What matters is what you want now. What do you remember about this Father Caine?"</button>
            </div>
        `
    },

    full_honesty_response: {
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    The frost around Ash surges, spreading rapidly. She gasps, pulling her hands back as if burned.
                </div>
            </div>
            <div class="character-scene fade-in" style="border-color: #b19cd9;">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name" style="color: #b19cd9;">ASH (panic rising)</div>
                <div class="character-speech">"Triggers? In my mind? You mean I'm—I could be made to—oh gods..."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Ice shards begin forming in the air. This is escalating quickly.
                </div>
            </div>
            ${diceSystem.createDiceRoll(
                'Calm Her Down', 
                'You need to prevent a magical surge that could injure both of you. Use your words or your own magic to help her regain control.',
                'diplomacy',
                'calm_success',
                'calm_failure',
                10,
                'diplomacy'
            )}
        `,
        effects: { ash: 1 }
    },

    gentle_truth_response: {
        content: `
            <div class="character-scene fade-in" style="border-color: #b19cd9;">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name" style="color: #b19cd9;">ASH (processing)</div>
                <div class="character-speech">"Hurt by someone... yes...for a long time." She looks at her hands. "But I never thought...I thought this was normal. This was... protection."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    The frost around her stabilizes, neither growing nor receding.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="window.goToScene('father_caine_revelation')">Next</button>
            </div>
        `,
        effects: { ash: 2 }
    },

    deflect_response: {
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Ash seems relieved that you're not pushing too hard. She takes a shaky breath.
                </div>
            </div>
            <div class="character-scene fade-in" style="border-color: #b19cd9;">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name" style="color: #b19cd9;">ASH</div>
                <div class="character-speech">"Father Caine... he was our family's spiritual advisor. He came every week with the suppressants. He would pray over me, tell me that the medicine kept the corruption at bay."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="window.goToScene('father_caine_revelation')">Next</button>
            </div>
        `,
        effects: { ash: 1, chance: 1 }
    },

    calm_success: {
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    You step closer and extend your hand slowly. Your own magic responds, violet light intertwining with her frost. Not fighting it, but flowing with it, guiding it.
                </div>
                <div class="dialogue">
                    <div class="character-name">YOU:</div>
                    <div class="character-speech">"Breathe with me. In... and out. Your magic responds to emotion like mine. We'll learn to work with it together. You're not alone anymore."</div>
                </div>
                <div class="narrator-text">
                    Gradually, miraculously, the ice shards dissolve into harmless mist. Ash stares at you with wonder.
                </div>
            </div>
            <div class="character-scene fade-in" style="border-color: #b19cd9;">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name" style="color: #b19cd9;">ASH (awed)</div>
                <div class="character-speech">"You... you stopped it. How did you do that?"</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="window.goToScene('father_caine_revelation')">Next</button>
            </div>
        `,
        effects: { ash: 3 }
    },

    calm_failure: {
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    The ice shards explode outward. You throw up a barrier of violet energy, but one shard cuts your arm before you can fully shield yourself. Pain blooms hot and cold simultaneously.
                </div>
                <div class="sfx">❄️ CRACK! ICE SHATTERS ACROSS THE ROOM ❄️</div>
                <div class="narrator-text">
                    The blanket partition tears open. Kit bursts in, blade drawn, while Tris is already channeling healing magic.
                </div>
            </div>
            <div class="character-scene fade-in" style="border-color: #b19cd9;">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name" style="color: #b19cd9;">ASH (horrified)</div>
                <div class="character-speech">"No, no, no! I told you! I told you I couldn't control it! This is why I should be locked away, why I should have stayed—"</div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS (working on your wound)</div>
                <div class="character-speech">"Both of you, be quiet. Ash, stop spiraling. ${gameState.playerName}, hold still."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="window.goToScene('aftermath_injury')">Next</button>
            </div>
        `,
        effects: { ash: -1, chance: 1, tris: -1 }
    },

    aftermath_injury: {
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Tris works efficiently, closing the wound with green healing light. It stings, then goes numb, then feels merely sore. Kit sheathes his blade but doesn't leave, standing guard.
                </div>
            </div>
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE (to you, not unkindly)</div>
                <div class="character-speech">"Brave, but reckless. Next time, perhapys you could call for backup before attempting emotional de-escalation with an unstable mage."</div>
            </div>
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Ash has curled into herself again, frost spreading uncontrollably around her in waves of shame and fear.
                </div>
            </div>
            <div class="choices-container fade-in">
                <h3 style="color: #ffd700; margin-bottom: 15px;">What do you do?</h3>
                <button class="choice-button" onclick="window.makeChoice('reassure_ash', 'reassure_ash_response')">Reassure her despite the injury. "It's okay. I'm fine. This doesn't change anything."</button>
                <button class="choice-button" onclick="window.makeChoice('acknowledge_danger', 'acknowledge_danger_response')">Acknowledge the danger honestly. "This proves you need training. Let us help you."</button>
                <button class="choice-button" onclick="window.makeChoice('leave_space', 'leave_space_response')">Give her space. Exit quietly and let her process.</button>
            </div>
        `
    },

    reassure_ash_response: {
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Despite Tris's protests, you move closer to Ash again. She tenses but doesn't interfere.
                </div>
            </div>
            <div class="character-scene fade-in" style="border-color: #b19cd9;">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name" style="color: #b19cd9;">ASH (disbelieving)</div>
                <div class="character-speech">"How can you say that? I hurt you! This is exactly what they warned me would happen if I ever—"</div>
            </div>
            <div class="story-text fade-in">
                <div class="dialogue">
                    <div class="character-name">YOU:</div>
                    <div class="character-speech">"My magic hurt people too but the difference is, I have these people to help me. You can too."</div>
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="window.goToScene('father_caine_revelation')">Next</button>
            </div>
        `,
        effects: { ash: 2, kit: -1, fable: 1 }
    },

    acknowledge_danger_response: {
        content: `
            <div class="character-scene fade-in" style="border-color: #b19cd9;">
                <img src="${CHARACTER_IMAGES.ash}" alt="ash" class="character-portrait" />
                <div class="character-name" style="color: #b19cd9;">ASH (looking up, hope and fear mixed)</div>
                <div class="character-speech">"Training... you really think it's possible? That I could learn to stop hurting people?"</div>
            </div>
            <div class="character-scene tris-border fade-in">
                <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                <div class="character-name">TRIS (clinical but supportive)</div>
                <div class="character-speech">"With the right approach, yes. Your magical channels are damaged but not beyond repair. It will take time and patience."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="window.goToScene('father_caine_revelation')">Next</button>
            </div>
        `,
        effects: { ash: 1, tris: 2, kit: 1 }
    },

    leave_space_response: {
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    You nod to Kit and Tris, and the three of you exit quietly. Behind the blanket, you hear Ash crying softly—not the sobs of a child, but the broken sounds of someone who has carried too much for too long.
                </div>
            </div>
            <div class="character-scene chance-border fade-in">
                <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
                <div class="character-name">CHANCE (appearing beside you)</div>
                <div class="character-speech">"Sometimes the kindest thing is to let someone grieve. She needs to process what her family did to her. That takes time."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="window.goToScene('father_caine_revelation')">Next</button>
            </div>
        `,
        effects: { ash: 0, chance: 1, kit: 1 }
    },

    father_caine_revelation: {
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Later, after Ash has had time to rest and compose herself, the group reconvenes. Fable has been researching, and his expression is grim.
                </div>
            </div>
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE</div>
                <div class="character-speech">"Father Caine isn't just a priest. He's an Inquisition operative—specifically trained in compulsion magic and suppressant administration. The Judvadi family paid him handsomely to keep their 'problem' contained. Ash wasn't just imprisoned. She was a project."</div>
            </div>
            <div class="character-scene kit-border fade-in">
                <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                <div class="character-name">KIT</div>
                <div class="character-speech">"Which means the Inquisition knows about her. About us now, too. She led them straight to our door."</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="window.goToScene('chapter4_decision')">Next</button>
            </div>
        `,
        effects: { fable: 1, kit: 1 }
    },

    chapter4_decision: {
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    The weight of this revelation settles over everyone. Ash, recovering in the next room, doesn't yet know the full extent of the betrayal. But she will need to, eventually.
                </div>
            </div>
            <div class="character-scene fable-border fade-in">
                <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                <div class="character-name">FABLE (looking at you)</div>
                <div class="character-speech">"She trusts you, ${gameState.playerName}. More than any of us. When we tell her the truth about Father Caine, about what was done to her... I think you should be there."</div>
            </div>
            <div class="narrator-text" style="text-align: center; font-size: 1.3em; color: #ffd700; margin-top: 30px;">
                <strong>END OF CHAPTER FOUR</strong><br><br>
                <em>Ash has joined the Morte Custodi, but the shadows of her past are not far behind...</em>
            </div>
            <div id="chapter4-relationships" style="margin-top: 20px; padding: 20px; background: rgba(177, 156, 217, 0.1); border-radius: 10px; text-align: center;">
                <div style="color: #b19cd9; margin-bottom: 15px; font-size: 1.1em;">
                    Your choices have shaped your relationship with Ash and affected how the group sees you both...
                </div>
                <button class="next-button" onclick="alert('Chapter 5: Breaking Chains - Coming Soon!')">To Be Continued...</button>
            </div>
        `
    }
};

// Ensure the export is available
export default chapter4Scenes;