import { ENVIRON_IMAGES, CHARACTER_IMAGES } from '../constants.js';
import { diceSystem } from '../diceSystem.js';
import { gameState } from '../gameState.js';

export const chapter2Scenes = {
    chapter2_start: {
                content: `
                    <div class="story-text fade-in">
                        <div class="narrator-text">
                            The alley swallows you whole. Damp stone walls press close, blocking out the dying light of the square. Your breath comes in ragged gasps as Fable and Kit guide you through the maze of narrow passages.
                            <br><br>
                            Lanterns flare red behind you as Inquisitors give chase, their boots striking like war drums against cobblestone. The sound echoes off the walls, a thunderous rhythm that speaks of death closing in.
                            <br><br>
                            Fable runs ahead, his cloak streaming behind him like a banner. He leads you, cutting through side streets with the fluid grace of a man who knows every stone and every shadow that haunts the city. Kit stays close behind, movements precise and deadly, scanning for threats as if the city itself were a trap.
                            <br><br>
                            You stumble along with them, smoke still clinging to your lungs and burning as your run, even now sparks still twitch at your fingertips. Remnants of the power that both saved and damned you.
                        </div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('fable_chase_1')">Next</button>
                    </div>
                `
            },

            fable_chase_1: {
                content: `
                    <div class="character-scene fable-border fade-in">
                        <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                        <div class="character-name">FABLE (calling over his shoulder, grinning despite the danger)</div>
                        <div class="character-speech">"Not exactly the most graceful of escapes, is it? Try not to trip over your own feet—it rather ruins the legend we're building!"</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('kit_chase_1')">Next</button>
                    </div>
                `
            },

            kit_chase_1: {
                content: `
                    <div class="character-scene kit-border fade-in">
                        <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                        <div class="character-name">KIT (sharp, tactical)</div>
                        <div class="character-speech">"Save the wit for later, General. Left turn—NOW. Patrol incoming from the east gate."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('courtyard_trap')">Next</button>
                    </div>
                `
            },

            courtyard_trap: {
                content: `
                    <div class="story-text fade-in">
                        <div class="narrator-text">
                            The three of you burst into a moonlit courtyard, ancient stones gleaming silver under the night sky. Then your hearts sink, it's a dead end. High walls rise on all sides like the ribs of some massive beast. Behind you, the clatter of pursuit grows louder. Lanterns blaze red as blood in the mouth of the alley.
                            <br><br>
                            ${(() => {
                                switch(gameState.backstory) {
                                    case 'noble':
                                        return 'Your noble education included studying the city\'s architecture. These courtyards were common gathering places for the old merchant houses, and often had secret escape routes. If only you could remember the details...';
                                    case 'orphan':
                                        return 'Growing up on the streets, you\'ve hidden in courtyards like this before. The drainpipes, the worn stones - there\'s always a way out if you know where to look.';
                                    case 'outsider':
                                        return 'The architecture here is so different from your homeland, but you\'ve studied similar defensive structures. There might be something you can use.';
                                    default:
                                        return 'You\'re trapped.';
                                }
                            })()}
                        </div>
                    </div>
                    <div class="choice-container">
                        ${(() => {
                            let choices = [];
                            
                            // Common choice for all backgrounds
                            choices.push('<button class="choice-button" onclick="goToScene(\'prepare_for_fight\')">Prepare to fight</button>');
                            
                            // Backstory-specific choices
                            switch(gameState.backstory) {
                                case 'noble':
                                    choices.push('<button class="choice-button" onclick="goToScene(\'noble_architect\')">Search for a merchant house escape route</button>');
                                    break;
                                case 'orphan':
                                    choices.push('<button class="choice-button" onclick="goToScene(\'orphan_climb\')">Look for a climbing route</button>');
                                    break;
                                case 'outsider':
                                    choices.push('<button class="choice-button" onclick="goToScene(\'outsider_tactics\')">Analyze defensive weaknesses</button>');
                                    break;
                            }
                            
                            return choices.join('');
                        })()}
                    </div>
                `
            },
            
            prepare_for_fight: {
                content: `
                    <div class="story-text fade-in">
                        <div class="narrator-text">You ready yourself for the coming fight, checking your magic reserves and steadying your nerves.</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('courtyard_banter')">Next</button>
                    </div>
                `
            },

            noble_architect: {
                content: `
                    <div class="story-text fade-in">
                        <div class="narrator-text">Your mind races through architectural lessons. These merchant houses often had hidden cellars for storing contraband. You spot a worn flagstone that looks slightly different from the others.</div>
                    </div>
                    ${diceSystem.createDiceRoll(
                        'Search for Secret Door',
                        'Your noble education might help you find a way out.',
                        'investigation',
                        'noble_escape_success',
                        'noble_escape_failure',
                        13,
                        'investigation'
                    )}
                `
            },

            noble_escape_success: {
                content: `
                    <div class="story-text fade-in">
                        <div class="narrator-text">The stone shifts under your touch, revealing a narrow staircase. Fable looks impressed as you guide them to safety.</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('escape_continue')">Next</button>
                    </div>
                `
            },

            noble_escape_failure: {
                content: `
                    <div class="story-text fade-in">
                        <div class="narrator-text">You can't quite remember the right details, and precious time slips away.</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('courtyard_banter')">Next</button>
                    </div>
                `
            },

            orphan_climb: {
                content: `
                    <div class="story-text fade-in">
                        <div class="narrator-text">Years of parkour on these very streets taught you to see paths where others see walls.</div>
                    </div>
                    ${diceSystem.createDiceRoll(
                        'Find Climbing Route',
                        'Your street experience might reveal a way up.',
                        'athletics',
                        'orphan_escape_success',
                        'orphan_escape_failure',
                        14,
                        'athletics'
                    )}
                `
            },

            orphan_escape_success: {
                content: `
                    <div class="story-text fade-in">
                        <div class="narrator-text">You spot a perfect route - drainpipe to windowsill to rooftop. Kit nods approvingly as you lead the way up.</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('escape_continue')">Next</button>
                    </div>
                `
            },

            orphan_escape_failure: {
                content: `
                    <div class="story-text fade-in">
                        <div class="narrator-text">The route you spot proves too risky with the guards so close behind.</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('courtyard_banter')">Next</button>
                    </div>
                `
            },

            outsider_tactics: {
                content: `
                    <div class="story-text fade-in">
                        <div class="narrator-text">Your homeland's military training kicks in as you assess the courtyard's defensive design.</div>
                    </div>
                    ${diceSystem.createDiceRoll(
                        'Analyze Defenses',
                        'Your foreign tactical knowledge might reveal an oversight in the design.',
                        'perception',
                        'outsider_escape_success',
                        'outsider_escape_failure',
                        13,
                        'perception'
                    )}
                `
            },

            outsider_escape_success: {
                content: `
                    <div class="story-text fade-in">
                        <div class="narrator-text">You spot a flaw in the wall's construction - a weakness that creates a perfect escape route. Fable grins at your ingenuity.</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('escape_continue')">Next</button>
                    </div>
                `
            },

            outsider_escape_failure: {
                content: `
                    <div class="story-text fade-in">
                        <div class="narrator-text">The defensive design proves too solid, even to your trained eye.</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('courtyard_banter')">Next</button>
                    </div>
                `
            },

            courtyard_banter: {
                content: `
                    <div class="character-scene fable-border fade-in">
                        <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                        <div class="character-name">FABLE (drawing steel, his grin turning predatory)</div>
                        <div class="character-speech">"Well, this is unexpected. Time to improvise. I suppose we'll have to give them a show after all."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('kit_strategy')">Next</button>
                    </div>
                `
            },

            kit_strategy: {
                content: `
                    <div class="character-scene kit-border fade-in">
                        <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                        <div class="character-name">KIT (checking his weapons with deadly calm)</div>
                        <div class="character-speech">"Stop calling my contingency plans 'improvisations,' General. We planned for exactly this scenario."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('final_banter')">Next</button>
                    </div>
                `
            },

            final_banter: {
                content: `
                    <div class="character-scene fable-border fade-in">
                        <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                        <div class="character-name">FABLE (laughing as he tests his blade's edge)</div>
                        <div class="character-speech">"Ah, but you take all the spontaneous joy out of causing beautiful, chaotic mayhem, my dear Captain."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('kit_pride')">Next</button>
                    </div>
                `
            },

            kit_pride: {
                content: `
                    <div class="character-scene kit-border fade-in">
                        <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                        <div class="character-name">KIT (adjusting his blades with practiced precision)</div>
                        <div class="character-speech">"Yes, sir. With considerable pride."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('courtyard_choice')">Next</button>
                    </div>
                `
            },

            courtyard_choice: {
                content: `
                    <div class="story-text fade-in">
                        <div class="narrator-text">The Inquisitors pour into the courtyard, a tidal wave of steel and righteous fury. At their head, the Captain you recognize from the square, his face twisted with rage at your escape.</div>
                    </div>
                    <div class="choices-container fade-in">
                        <h3 style="color: #ffd700; margin-bottom: 15px;">The Inquisitors have you cornered. Choose your approach:</h3>
                        <button class="choice-button" onclick="goToScene('magic_attack_roll')">Channel raw magic to blast through them</button>
                        <button class="choice-button" onclick="goToScene('clever_escape_roll')">Search for a clever solution</button>
                        <button class="choice-button" onclick="goToScene('diplomatic_roll')">Try to negotiate your way out</button>
                        <button class="choice-button" onclick="goToScene('defensive_panic_roll')">Panic and hope for the best</button>
                    </div>
                `
            },

            magic_attack_roll: {
                content: `
                    <div class="story-text fade-in">
                        <div class="narrator-text">Violet energy crackles between your fingers as you prepare to unleash your power against the advancing guards. Raw magical force could scatter them and give you a chance to escape... if you can control it.</div>
                    </div>
                    ${diceSystem.createDiceRoll(
                        'Unleash Magical Fury', 
                        'Channel your rage and desperation into devastating magical force. Success means controlled destruction. Failure means wild, dangerous magic.',
                        'magic_control',
                        'magic_attack_success',
                        'magic_attack_failure',
                        14,
                        'magic_control'
                    )}
                `
            },

            magic_attack_success: {
                content: `
                    <div class="story-text fade-in">
                        <div class="sfx">⚡ CONTROLLED VIOLET LIGHTNING ARCS OUTWARD ⚡</div>
                        <div class="narrator-text">Perfect control flows through you. Violet bolts lance out with surgical precision, striking armor joints and weapon hilts. Inquisitors cry out as their weapons heat red-hot, forcing them to drop steel that burns to touch. You manage not to deliver a single killing blow, but your attack is still devastatingly effective.<br><br>The Captain staggers back, his sword clattering to the stones, smoke rising from his gauntlets.</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('fable_impressed_magic')">Next</button>
                    </div>
                `,
                effects: { fable: 1, kit: 1}
            },

            magic_attack_failure: {
                content: `
                    <div class="story-text fade-in">
                        <div class="sfx">⚡ VIOLET FIRE ERUPTS WILDLY ⚡</div>
                        <div class="narrator-text">Power explodes from you like a dam bursting. Violet flames lance out in all directions and some Inquisitors fall groaning, but the magic scorches stone and sends everyone diving for cover, including you, Fable and Kit. The raw energy leaves you gasping.<br><br>Kit's iron grip closes on your arm like a shackle.</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('kit_warning')">Next</button>
                    </div>
                `,
                effects: { kit: -1, fable: -1 }
            },

            fable_impressed_magic: {
                content: `
                    <div class="character-scene fable-border fade-in">
                        <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                        <div class="character-name">FABLE (genuinely impressed)</div>
                        <div class="character-speech">"Now that's what I call precision! Magnificent control, spark."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('sewer_escape')">Next</button>
                    </div>
                `
            },

            kit_warning: {
                content: `
                    <div class="character-scene kit-border fade-in">
                        <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                        <div class="character-name">KIT (sharp warning)</div>
                        <div class="character-speech">"Reckless! You'll burn us all to ash before you finish them. Control it, now"</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('fable_delight')">Next</button>
                    </div>
                `
            },

            fable_delight: {
                content: `
                    <div class="character-scene fable-border fade-in">
                        <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                        <div class="character-name">FABLE (laughing with wild delight)</div>
                        <div class="character-speech">"What a magnificent show you put on, spark!"</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('sewer_escape')">Next</button>
                    </div>
                `
            },

            clever_escape_roll: {
                content: `
                    <div class="story-text fade-in">
                        <div class="narrator-text">Your eyes dart across the courtyard, searching for anything that could give you an advantage. There—wine barrels, loose stones, anything that might help level the odds against trained warriors.</div>
                    </div>
                    ${diceSystem.createDiceRoll(
                        'Find a Clever Solution', 
                        'Use your wits and environment to outsmart the Inquisitors. Look for traps, distractions, or environmental advantages.',
                        'streetwise',
                        'clever_escape_success',
                        'clever_escape_failure',
                        12,
                        'streetwise'
                    )}
                `
            },

            clever_escape_success: {
                content: `
                    <div class="story-text fade-in">
                        <div class="narrator-text">Perfect! You spot exactly what you need—a stack of wine barrels near the wall, precariously stacked. You sprint forward, shouldering into the barrels with all the strength you have<br><br>The barrels cascade down as spilled wine makes the cobblestones treacherous. Inquisitors slip and stumble, their formation in chaos as they try to avoid the liquid.</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('kit_very_impressed')">Next</button>
                    </div>
                `,
                effects: { kit: 1, fable: 1 }
            },

            clever_escape_failure: {
                content: `
                    <div class="story-text fade-in">
                        <div class="narrator-text">You rush toward the wine barrels, but in your haste, you miscalculate. The barrels topple, but directly toward you and your allies rather than the Inquisitors. Kit yanks you aside as wooden staves explode around you.<br><br>"Good idea, poor execution," Fable calls out, drawing his blades as the Inquisitors advance through the wreckage.</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('fable_covers_mistake')">Next</button>
                    </div>
                `,
                effects: { kit: -1, fable: -1 }
            },

            kit_very_impressed: {
                content: `
                    <div class="character-scene kit-border fade-in">
                        <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                        <div class="character-name">KIT (rare approval)</div>
                        <div class="character-speech">"Exceptional thinking."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('sewer_escape')">Next</button>
                    </div>
                `
            },

            fable_covers_mistake: {
                content: `
                    <div class="character-scene fable-border fade-in">
                        <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                        <div class="character-name">FABLE (stepping forward with blades drawn)</div>
                        <div class="character-speech">"Don't worry, spark. We've all had plans go sideways. Time for the backup plan!"</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('sewer_escape')">Next</button>
                    </div>
                `
            },

            diplomatic_roll: {
                content: `
                    <div class="story-text fade-in">
                        <div class="narrator-text">You step forward, hands raised in a gesture of peace. Perhaps reason can prevail where violence would only bring more bloodshed. The Inquisitors pause, uncertain.</div>
                    </div>
                    ${diceSystem.createDiceRoll(
                        'Appeal to Reason', 
                        'Try to negotiate with the Inquisitors. Success could avoid bloodshed entirely. Failure might make them even more determined.',
                        'diplomacy',
                        'diplomatic_success',
                        'diplomatic_failure',
                        15,
                        'diplomacy'
                    )}
                `
            },

            diplomatic_success: {
                content: `
                    <div class="story-text fade-in">
                        <div class="narrator-text">Your words ring with such conviction that even the hardened Inquisitors hesitate. "I never chose this power," you say, your voice carrying across the courtyard. "But I won't let it make me a monster. Stand down, and no one else has to be hurt today."<br><br>Several Inquisitors actually lower their weapons. The Captain snarls, but his men are wavering. In that moment of uncertainty, opportunity strikes.</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('fable_diplomatic_success')">Next</button>
                    </div>
                `,
                effects: { fable: 1, kit:1 }
            },

            diplomatic_failure: {
                content: `
                    <div class="story-text fade-in">
                        <div class="narrator-text">You step forward with words of peace, but the Captain's face twists with contempt.</div>
                        <div class="dialogue">
                            <img src="${CHARACTER_IMAGES.captain}" alt="captain" class="character-portrait" />
                            <div class="character-name">INQUISITION CAPTAIN (snarling):</div>
                            <div class="character-speech">"The only mistake here is that you're still breathing. You think pretty words will wash the corruption from your soul? Take them all!"</div>
                        </div>
                        <div class="narrator-text">The Inquisitors surge forward with renewed fury, your attempt at peace taken as weakness.</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('fable_diplomatic_failure')">Next</button>
                    </div>
                `,
                effects: { kit: -1, fable: -1 }
            },

            fable_diplomatic_success: {
                content: `
                    <div class="character-scene fable-border fade-in">
                        <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                        <div class="character-name">FABLE (grinning as he moves forward)</div>
                        <div class="character-speech">"Beautifully done! Now, while they're confused—this way!"</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('sewer_escape')">Next</button>
                    </div>
                `
            },

            fable_diplomatic_failure: {
                content: `
                    <div class="character-scene fable-border fade-in">
                        <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                        <div class="character-name">FABLE (drawing blades with a rueful smile)</div>
                        <div class="character-speech">"Well, that went about as expected. Points for trying, though! Time for Plan B."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('sewer_escape')">Next</button>
                    </div>
                `
            },

            defensive_panic_roll: {
                content: `
                    <div class="story-text fade-in">
                        <div class="narrator-text">Terror freezes your limbs as the Inquisitors advance. Your magic sparks wildly, unpredictably. Sometimes panic can trigger unexpected resourcefulness... or it can leave you completely helpless.</div>
                    </div>
                    ${diceSystem.createDiceRoll(
                        'Desperate Survival', 
                        'In your panic, you might accidentally stumble onto something useful, or your terror might trigger a lucky magical surge.',
                        'survival',
                        'panic_success',
                        'panic_failure',
                        14,
                        'survival'
                    )}
                `
            },

            panic_success: {
                content: `
                    <div class="story-text fade-in">
                        <div class="narrator-text">In your terror, you stumble backward—and your hand finds a hidden lever in the wall. Your panicked magic surges outward just as ancient mechanisms groan to life. The combination creates chaos: violet sparks dance as the courtyard floor tilts, spilling Inquisitors like dice from a cup.<br><br>Sometimes the gods favor fools and the desperate.</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('fable_luck')">Next</button>
                    </div>
                `,
                effects: { kit:1, fable: 1 }
            },

            panic_failure: {
                content: `
                    <div class="story-text fade-in">
                        <div class="narrator-text">Fear grips you completely. Your hands shake uncontrollably, sparks dancing between your fingers in chaotic patterns. The Captain seizes the moment, shouting, "Seize them before the corruption spreads!"<br><br>But you're not alone. Fable steps in front of you, blades singing as they clear their sheaths. Kit moves to cover your flank.</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('fable_protective')">Next</button>
                    </div>
                `,
                effects: { fable: -1, kit: -1}
            },

            fable_luck: {
                content: `
                    <div class="character-scene fable-border fade-in">
                        <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                        <div class="character-name">FABLE (laughing in amazement)</div>
                        <div class="character-speech">"Incredible!"</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('sewer_escape')">Next</button>
                    </div>
                `
            },

            fable_protective: {
                content: `
                    <div class="character-scene fable-border fade-in">
                        <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                        <div class="character-name">FABLE (soft, protective)</div>
                        <div class="character-speech">"Easy there, little spark. Breathe. You're not alone this time—we've got you."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('kit_tough_love')">Next</button>
                    </div>
                `
            },

            kit_tough_love: {
                content: `
                    <div class="character-scene kit-border fade-in">
                        <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                        <div class="character-name">KIT (snapping orders)</div>
                        <div class="character-speech">"Watch and learn!"</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('sewer_escape')">Next</button>
                    </div>
                `
            },

            sewer_escape: {
                content: `
                    <div class="story-text fade-in">
                        <div class="narrator-text">Whether through magic, wit, luck, or the god's protection, you burst through the Inquisition's ranks. Fable rushes forward, downing a guard in a swift, graceful movement. Kit takes down two more before you even have time to move. <br>In the midst of the chaos, Fable kicks open a sewer grate, gesturing you down.</div>
                        <div class="dialogue">
                             <div class="character-scene fable-border fade-in">
                        <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                        <div class="character-name">FABLE (one hand out to guide you)</div>
                       <div class="character-speech">"Down we go! Not glamorous, but neither is dying in an alley."</div>
                    </div>  
                        </div>
                        <div class="narrator-text">You plunge into darkness. The stench of damp stone and rot replaces smoke and blood. You hear Kit and Fable finish taking out the last of the guards before the sounds of chaos fade as the three of you vanish into the undercity.</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('tunnel_choice')">Next</button>
                    </div>
                `
            },

            tunnel_choice: {
                content: `
                    <div class="choices-container fade-in">
                        <h3 style="color: #ffd700; margin-bottom: 15px;">In the tunnels beneath the city:</h3>
                        <button class="choice-button" onclick="makeChoice('stop_demand_answers', 'demand_answers_response')">Stop in your tracks, and refuse to go further. "Tell me what is going on. Now."</button>
                        <button class="choice-button" onclick="makeChoice('follow_ask_where', 'ask_where_response')">Follow Fable and Kit, "Where exactly are you taking me?"</button>
                        <button class="choice-button" onclick="makeChoice('nervous_follow', 'nervous_response')">Walk behind both men, watching their movements silently until, "...Are we safe here?"</button>
                    </div>
                `
            },

            demand_answers_response: {
                content: `
                    <div class="story-text fade-in">
                        <div class="narrator-text">You plant your feet in the muck and refuse to move another step. Your voice echoes off the tunnel walls, firm and commanding.</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('fable_explains')">Next</button>
                    </div>
                `,
                effects: { kit: -1, fable: -1 }
            },

            fable_explains: {
                content: `
                    <div class="character-scene fable-border fade-in">
                        <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                        <div class="character-name">FABLE (turning, patient)</div>
                        <div class="character-speech">"I'm sure this has been a lot. All you need to know right now is that Kit and I belong to a resistance group called the Morte Custodi. One that could help you harness what you've awakened."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('kit_stubborn')">Next</button>
                    </div>
                `
            },

            kit_stubborn: {
                content: `
                    <div class="character-scene kit-border fade-in">
                        <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                        <div class="character-name">KIT (sharp)</div>
                        <div class="character-speech">"That is, if you start trusting the people who just saved your life. Twice."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('safehouse_arrival')">Next</button>
                    </div>
                `
            },

            ask_where_response: {
                content: `
                    <div class="story-text fade-in">
                        <div class="narrator-text">Fable walks confidently ahead of you, while Kit takes up the rear, ever watchful.</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('fable_safe')">Next</button>
                    </div>
                `,
                effects: { kit: 1 }
            },

            fable_safe: {
                content: `
                    <div class="character-scene fable-border fade-in">
                        <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                        <div class="character-name">FABLE (over shoulder)</div>
                        <div class="character-speech">"We're taking you somewhere safe. Somewhere the Crown's reach doesn't extend. We are part of a group that handles things like this."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('kit_purpose')">Next</button>
                    </div>
                `,
                effects: { kit: 1, fable:-1 }
            },

            kit_purpose: {
                content: `
                    <div class="character-scene kit-border fade-in">
                        <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                        <div class="character-name">KIT (tactical)</div>
                        <div class="character-speech">"We can help you learn to control your powers."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('safehouse_arrival')">Next</button>
                    </div>
                `
            },

            nervous_response: {
                content: `
                    <div class="story-text fade-in">
                        <div class="narrator-text">You stare at the backs of both men walking confidently in front of you, their certainty both reassuring and unsettling.</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('fable_reassuring')">Next</button>
                    </div>
                `,
                effects: { fable: 1, kit: -1 }
            },

            fable_reassuring: {
                content: `
                    <div class="character-scene fable-border fade-in">
                        <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                        <div class="character-name">FABLE (softly)</div>
                        <div class="character-speech">"Not yet, but we will be soon. The tunnels have kept us hidden for years and we're taking you to a safe location. We're part of a group called the Morte Custodi. We can protect you."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('kit_urgent')">Next</button>
                    </div>
                `
            },

            kit_urgent: {
                content: `
                    <div class="character-scene kit-border fade-in">
                        <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                        <div class="character-name">KIT (urgent)</div>
                        <div class="character-speech">"Walk faster. The Inquisition know these passages exist—they just don't know which ones we use."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('safehouse_arrival')">Next</button>
                    </div>
                `
            },

            safehouse_arrival: {
                content: `
                    <div class="story-text fade-in">
                        <div class="narrator-text">The three of you make your way through winding tunnels beneath the city. You hold your arm over your nose, nearly overcome by the stench of the sewers at times. Still, it's better than dying on a pyre, or in an alleyway, so you stay quiet. But just when you think you can't take it anymore, you see a light in the darkness ahead.<br>Fable walks up to the wall and presses a stone. The hidden door swings open. Fable lights a torch, guiding you through stone corridors carved long before the Crown's reign. Moss glistens in the cracks like emerald tears.<br><br>At last, he pushes open a heavy iron door.</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('safehouse_interior')">Next</button>
                    </div>
                `
            },

            safehouse_interior: {
                content: `
                    <div class="story-text fade-in">
                        <div class="narrator-text">Inside is the safehouse of the Morte Custodi. The room smells of smoke, ink, herbs, and parchment. It's an armory. It's a scholar's den hidden beneath the world. It's an infirmary. You see a table which overflows with maps and documents, candles burned low casting dancing shadows over the pages. Cots line the walls, and bundles of herbs hang from the beams, their scent sharp enough to sting your nose.<br><br>Two figures wait in the amber light.</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('meet_tris_chance')">Next</button>
                    </div>
                `
            },

            meet_tris_chance: {
                content: `
                    <div class="story-text fade-in">
                        <div class="narrator-text">The first: a woman in pale robes, her hands faintly aglow with a greenish healing magic. Her face is expressionless, her voice measured when she speaks. <br>
                        <div class="character-scene tris-border fade-in">
                        <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                        <strong style="color: #90ee90;">Tris.</strong><br><br>
                        </div>
                        The second figure leans back in a chair with casual indifference to the tension crackling through the room. Their white curls catch the firelight, their pale lavender eyes studying you with obvious amusement.
                         <div class="character-scene chance-border fade-in">
                        <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
                        <strong style="color: #add8e6;">Chance.</strong><br><br>
                        </div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('tris_efficient')">Next</button>
                    </div>
                `
            },

            tris_efficient: {
                content: `
                    <div class="character-scene tris-border fade-in">
                        <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                        <div class="character-name">TRIS (curt, efficient)</div>
                        <div class="character-speech">"Sit. You're injured. I'll tend to it."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('chance_grin')">Next</button>
                    </div>
                `
            },

            chance_grin: {
                content: `
                    <div class="character-scene chance-border fade-in">
                        <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
                        <div class="character-name">CHANCE (drawling, with a grin)</div>
                        <div class="character-speech">"Oh, don't look so grim, love. If she wanted you dead, she'd have done it already. Much more efficiently than the Inquisition, I might add."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('introductions')">Next</button>
                    </div>
                `
            },

            introductions: {
                content: `
                    <div class="choices-container fade-in">
                        <h3 style="color: #ffd700; margin-bottom: 15px;">How do you introduce yourself to the group?</h3>
                        <button class="choice-button" onclick="makeChoice('formal_intro', 'formal_intro_response')">"I'm \${gameState.playerName}. Thank you all for saving me."</button>
                        <button class="choice-button" onclick="makeChoice('casual_intro', 'casual_intro_response')">"Call me \${gameState.playerName}. Seems like I owe everyone here a debt."</button>
                        <button class="choice-button" onclick="makeChoice('mysterious_intro', 'mysterious_intro_response')">Remain silent and let Fable speak for you.</button>
                    </div>
                `
            },

            formal_intro_response: {
                content: `
                    <div class="character-scene chance-border fade-in">
                        <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
                        <div class="character-name">CHANCE (delighted)</div>
                        <div class="character-speech">"\${gameState.playerName}! Such lovely manners, so rare around here. I'm Chance, and the efficient one tending to your wounds is Tris."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('tris_formal_response')">Next</button>
                    </div>
                `,
                effects: { chance: 1, tris: 1 }
            },

            tris_formal_response: {
                content: `
                    <div class="character-scene tris-border fade-in">
                        <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                        <div class="character-name">TRIS (still working, but with slight approval)</div>
                        <div class="character-speech">"${gameState.playerName}. At least you have manners. Now hold still while I finish this."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('kit_strategy_credit')">Next</button>
                    </div>
                `
            },

            casual_intro_response: {
                content: `
                    <div class="character-scene fable-border fade-in">
                        <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                        <div class="character-name">FABLE (grinning wider)</div>
                        <div class="character-speech">"${gameState.playerName}, The dreamwalker here is Chance, and our resident miracle worker is Tris."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('chance_casual_response')">Next</button>
                    </div>
                `,
                effects: { chance: 2, tris: 1 }
            },

            chance_casual_response: {
                content: `
                    <div class="character-scene chance-border fade-in">
                        <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
                        <div class="character-name">CHANCE (amused)</div>
                        <div class="character-speech">"\${gameState.playerName}... yes, that suits you perfectly."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('kit_strategy_credit')">Next</button>
                    </div>
                `
            },

            mysterious_intro_response: {
                content: `
                    <div class="character-scene fable-border fade-in">
                        <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                        <div class="character-name">FABLE (with a knowing look)</div>
                        <div class="character-speech">"The strong, silent type, I see. Well, mystery has its own charm. This is Chance, our dreamwalker, and Tris, who's keeping you alive."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('chance_mysterious_response')">Next</button>
                    </div>
                `,
                effects: { tris: -1, chance: -1 }
            },

            chance_mysterious_response: {
                content: `
                    <div class="character-scene chance-border fade-in">
                        <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
                        <div class="character-name">CHANCE (studying you intently)</div>
                        <div class="character-speech">"Interesting. You know, in my dreams you had quite a lot to say. But I suppose reality is always... different. Glad you made it out, thanks to my visions."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('kit_strategy_credit')">Next</button>
                    </div>
                `
            },

            kit_strategy_credit: {
                content: `
                    <div class="character-scene kit-border fade-in">
                        <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                        <div class="character-name">KIT (dryly)</div>
                    <div class="character-speech">"What matters is that we got out alive, thanks to my plans."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('chance_dreams')">Next</button>
                    </div>
                `
            },

            chance_dreams: {
                content: `
                    <div class="character-scene chance-border fade-in">
                        <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
                        <div class="character-name">CHANCE (to you, lazily)</div>
                        <div class="character-speech">"Hey, you never would have been found without me.I was the one who saw you first. In my dreams, no less. Woke up one night muttering about you and look—here you are. Exactly as I pictured. Just a little more... singed, perhaps."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('dreams_choice')">Next</button>
                    </div>
                `
            },

            dreams_choice: {
                content: `
                    <div class="choices-container fade-in">
                        <h3 style="color: #ffd700; margin-bottom: 15px;">How do you respond to Chance's claim about dreams?</h3>
                        <button class="choice-button" onclick="makeChoice('wary_dreams', 'wary_dreams_response')">"Dreams? You expect me to believe that you saw me in your dreams?"</button>
                        <button class="choice-button" onclick="makeChoice('curious_dreams', 'curious_dreams_response')">"Dreams, huh? Well...what exactly did you see?"</button>
                        <button class="choice-button" onclick="makeChoice('playful_dreams', 'playful_dreams_response')">"And here I thought I'd only haunt nightmares."</button>
                    </div>
                `
            },

            wary_dreams_response: {
                content: `
                    <div class="character-scene chance-border fade-in">
                        <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
                        <div class="character-name">CHANCE (mock wounded)</div>
                        <div class="character-speech">"Oh, suspicious already? How cruel." they wink at you, "But it's true, love, I can see into dreams. And you certainly haunted mine, for a time."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('kit_dreams_1')">Next</button>
                    </div>
                `,
                effects: { chance: -2, kit: 1, tris: 1, fable:-1 }
            },

            kit_dreams_1: {
                content: `
                    <div class="character-scene kit-border fade-in">
                        <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                        <div class="character-name">KIT (crossing his arms)</div>
                        <div class="character-speech">"Dreams are unreliable."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('tris_practical_1')">Next</button>
                    </div>
                `
            },

            tris_practical_1: {
                content: `
                    <div class="character-scene tris-border fade-in">
                        <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                        <div class="character-name">TRIS (brisk)</div>
                        <div class="character-speech">"You can argue about it later, let me finish my work here first." She gestures down to the burns on you from the pyre.</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('treatment_scene')">Next</button>
                    </div>
                `
            },

            curious_dreams_response: {
                content: `
                    <div class="character-scene chance-border fade-in">
                        <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
                        <div class="character-name">CHANCE (leaning closer, eyes gleaming)</div>
                        <div class="character-speech">"A pyre. A crowd baying for blood. You standing tall even as the flames reached for you. I told the others and, well...you know the rest."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('tris_practical_2')">Next</button>
                    </div>
                `,
                effects: { chance: 1, fable: 1, tris: -1 , kit:-1}
            },

            tris_practical_2: {
                content: `
                    <div class="character-scene tris-border fade-in">
                        <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                        <div class="character-name">TRIS (flat)</div>
                        <div class="character-speech">"Chance helped Kit and Fable found you. Their dreams are useful, at least."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('fable_stories')">Next</button>
                    </div>
                `
            },

            fable_stories: {
                content: `
                    <div class="character-scene fable-border fade-in">
                        <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                        <div class="character-name">FABLE (chuckling to himself)</div>
                        <div class="character-speech">"Useful is certainly one word for them."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('treatment_scene')">Next</button>
                    </div>
                `
            },

            playful_dreams_response: {
                content: `
                    <div class="character-scene chance-border fade-in">
                        <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
                        <div class="character-name">CHANCE (smirking)</div>
                        <div class="character-speech">"Oh, don't worry love, you were only half nightmare and I happened to find the other half... intriguing."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('fable_likes')">Next</button>
                    </div>
                `,
                effects: { chance: 1, fable: 1, kit: -1 , tris:-1}
            },

            fable_likes: {
                content: `
                    <div class="character-scene fable-border fade-in">
                        <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                        <div class="character-name">FABLE (laughing)</div>
                        <div class="character-speech">"I think I like this one already."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('kit_idiots')">Next</button>
                    </div>
                `
            },

            kit_idiots: {
                content: `
                    <div class="character-scene kit-border fade-in">
                        <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                        <div class="character-name">KIT (arms folded)</div>
                        <div class="character-speech">"You survived at least"</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('treatment_scene')">Next</button>
                    </div>
                `
            },

            treatment_scene: {
                content: `
                    <div class="story-text fade-in">
                        <div class="narrator-text">Tris finishes her work, binding your wound with brisk, efficient movements. Her gaze flicks over you, assessing. Methodical. Clinical. Professional.</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('tris_done')">Next</button>
                    </div>
                `
            },

            tris_done: {
                content: `
                    <div class="character-scene tris-border fade-in">
                        <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                        <div class="character-name">TRIS (quietly, but firm)</div>
                        <div class="character-speech">"There. You'll live. You should be ready for training in a day or so."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('treatment_choice')">Next</button>
                    </div>
                `
            },

            treatment_choice: {
                content: `
                    <div class="choices-container fade-in">
                        <h3 style="color: #ffd700; margin-bottom: 15px;">How do you respond to Tris's treatment?</h3>
                        <button class="choice-button" onclick="makeChoice('grateful_treatment', 'grateful_treatment_response')">Thank you. I appreciate the kindness."</button>
                        <button class="choice-button" onclick="makeChoice('cold_treatment', 'cold_treatment_response')">"I didn't ask for any of this."</button>
                        <button class="choice-button" onclick="makeChoice('observant_treatment', 'observant_treatment_response')">"How often do you do this sort of thing?"</button>
                    </div>
                `
            },

            grateful_treatment_response: {
                content: `
                    <div class="character-scene tris-border fade-in">
                        <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                        <div class="character-name">TRIS (expressionless)</div>
                        <div class="character-speech">"I patch people up because corpses make poor allies."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('fable_insight')">Next</button>
                    </div>
                `,
                effects: { tris: -1, fable: 1, kit: 1, chance:1}
            },

            fable_insight: {
                content: `
                    <div class="character-scene fable-border fade-in">
                        <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                        <div class="character-name">FABLE (softly, to you)</div>
                        <div class="character-speech">"She says that to everyone."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('final_stance_setup')">Next</button>
                    </div>
                `
            },

            cold_treatment_response: {
                content: `
                    <div class="character-scene tris-border fade-in">
                        <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                        <div class="character-name">TRIS (shrugging faintly)</div>
                        <div class="character-speech">"Then next time, refuse. Bleed out in the gutter if you prefer. Makes no difference to me."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('kit_independence')">Next</button>
                    </div>
                `,
                effects: { tris: -2, kit: -2, fable: -4, chance:-1}
            },

            kit_independence: {
                content: `
                    <div class="character-scene kit-border fade-in">
                        <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                        <div class="character-name">KIT (disapproving)</div>
                        <div class="character-speech">"You need to trust us."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('final_stance_setup')">Next</button>
                    </div>
                `
            },

            observant_treatment_response: {
                content: `
                    <div class="character-scene tris-border fade-in">
                        <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                        <div class="character-name">TRIS (pausing briefly)</div>
                        <div class="character-speech">"More often than I'd like."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('chance_compliment')">Next</button>
                    </div>
                `,
                effects: { tris: 1, chance: -1, fable: 1, kit:1 }
            },

            chance_compliment: {
                content: `
                    <div class="character-scene chance-border fade-in">
                        <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
                        <div class="character-name">CHANCE (grinning)</div>
                        <div class="character-speech">"She'll never admit it, but she's the best field medic this side of the capital. Cold hands, warm results."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('final_stance_setup')">Next</button>
                    </div>
                `
            },

          final_stance_setup: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">The safehouse grows quiet except for the distant drip of water and the whisper of flame. Fable leans against the table of maps, studying you with new interest. Kit methodically sharpens his blade. Tris busies herself organizing medical supplies. Chance sprawls in his chair, still watching you with one eye half-lidded, as if you're a particularly interesting puzzle.</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('fable_future')">Next</button>
        </div>
    `
},

            fable_future: {
                content: `
                    <div class="character-scene fable-border fade-in">
                        <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                        <div class="character-name">FABLE (serious, though still faintly smiling)</div>
                        <div class="character-speech">"You know the Inquisition won't stop hunting now. You've revealed yourself, shown your power. You've got a choice—waste that spark running from shadow to shadow, or put it to use for something greater."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('kit_rules')">Next</button>
                    </div>
                `
            },

            kit_rules: {
                content: `
                    <div class="character-scene kit-border fade-in">
                        <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                        <div class="character-name">KIT (flat, no-nonsense)</div>
                        <div class="character-speech">"Join our group."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('chance_company')">Next</button>
                    </div>
                `
            },

            chance_company: {
                content: `
                    <div class="character-scene chance-border fade-in">
                        <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
                        <div class="character-name">CHANCE (lazily, with that perpetual smirk)</div>
                        <div class="character-speech">"Or you could stay simply because you enjoy the company. Some of us are exceptionally good company, after all."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('tris_pragmatic')">Next</button>
                    </div>
                `
            },

            tris_pragmatic: {
                content: `
                    <div class="character-scene tris-border fade-in">
                        <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                        <div class="character-name">TRIS (cold, practical)</div>
                        <div class="character-speech">"You leave and you die, that's just how it goes for our kind. So, don't make a stupid choice, okay?"</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('final_stance')">Next</button>
                    </div>
                `
            },

            final_stance: {
                content: `
                    <div class="choices-container fade-in">
                        <h3 style="color: #ffd700; margin-bottom: 15px;">What is your stance?</h3>
                        <button class="choice-button" onclick="makeChoice('defiant_stance', 'defiant_stance_response')">"I don't want to hide anymore. I want to fight back."</button>
                        <button class="choice-button" onclick="makeChoice('uncertain_stance', 'uncertain_stance_response')">"...I don't know if I can do this."</button>
                        <button class="choice-button" onclick="makeChoice('strategic_stance', 'strategic_stance_response')">"I'll stay, but I need to know your cause. All of it. I need to know what I am fighting for. "</button>
                    </div>
                `
            },

         defiant_stance_response: {
    content: `
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (delighted)</div>
            <div class="character-speech">"Now that's the spirit! The spark that refuses to be snuffed out."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('restless_night')">Rest for the Night</button>
        </div>
    `,
    effects: { fable: 1, kit: -1, chance: 1, tris: -1 }
},

            uncertain_stance_response: {
                content: `
                    <div class="character-scene tris-border fade-in">
                        <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
                        <div class="character-name">TRIS (briefly soft)</div>
                        <div class="character-speech">"Fear is honest, but don't let it stop you from making the right choice."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('restless_night')">Rest for the Night</button>
                    </div>
                `,
                effects: { tris: -2, chance: 1, kit: -1, fable: -2 }
            },

            strategic_stance_response: {
                content: `
                    <div class="character-scene kit-border fade-in">
                        <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                        <div class="character-name">KIT (nodding)</div>
                        <div class="character-speech">"We stand against the crown, and in honor of justice for those who have been wronged by its power."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('restless_night')">Rest for the Night</button>
                    </div>
                `,
                effects: { kit: 1, tris: -1, fable: 1, chance: -1 }
            },

            // ending: {
            //     content: `
            //         <div class="story-text fade-in">
            //             <div class="narrator-text">The fire gutters in the hearth, throwing long shadows across the walls like reaching fingers. The Morte Custodi have accepted you into their den—for now. Some with warmth, others with wariness, all with the hard-earned caution of survivors.<br><br>Your fate no longer belongs to the pyre or the Crown's justice. It belongs to these strangers, each carrying their own scars, their own secrets, their own reasons for standing against an empire.<br><br>And the storm inside you, awake at last after years of slumber, hums with anticipation for what comes next.</div>
            //             <div class="narrator-text" style="text-align: center; font-size: 1.3em; color: #ffd700; margin-top: 30px;"><strong>END OF THE SERPENT'S CROWN DEMO</strong><br><br><em>Part One: The Awakening</em></div>
            //             <div id="final-relationships" style="margin-top: 20px; padding: 20px; background: rgba(255, 215, 0, 0.1); border-radius: 10px; text-align: center;">
            //                 <div style="color: #ffd700; margin-bottom: 15px; font-size: 1.1em;">The choices you've made have shaped how the Morte Custodi see you. In the trials ahead, these bonds—or their absence—will determine your fate...</div>
            //                 <div id="final-display" style="margin-top: 15px;"></div>
            //             </div>
            //         </div>
            //     `,
            //     onLoad: displayFinalRelationships
            // },
            restless_night: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                Hours later, you lie in your cot staring at the stone ceiling. Sleep refuses to come. Every time you close your eyes, you see the pyre, feel the heat, hear the crowd's roar. Your magic stirs restlessly beneath your skin, matching your unease.
                <br><br>
                The safehouse is quiet, but not silent. You hear distant movements, the soft sounds of others who also can't sleep. Outside your small room, candlelight flickers in the main corridor.
            </div>
        </div>
        <div class="choices-container fade-in">
            <h3 style="color: #ffd700; margin-bottom: 15px;">Who do you seek out in the quiet hours?</h3>
            <button class="choice-button" onclick="makeChoice('seek_fable', 'fable_night_scene')">Try to find something to read to distract you</button>
            <button class="choice-button" onclick="makeChoice('seek_chance', 'chance_night_scene')">Try to breathe and meditate, hoping sleep finds you</button>
            <button class="choice-button" onclick="makeChoice('seek_tris', 'tris_night_scene')">Go get a cup of tea, or something stronger to help you rest</button>
            <button class="choice-button" onclick="makeChoice('seek_kit', 'kit_night_scene')">Explore the safehouse, see what you can find in the dark</button>
        </div>
    `
},

fable_night_scene: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                You follow the sound down a narrow corridor to a small alcove lit by a single candle. Fable sits cross-legged on a cushion, an ancient-looking book spread across his lap. His fingers absently flip a tarnished coin—heads, tails, heads, tails—in a hypnotic rhythm.
                <br><br>
                He looks up as you approach, a knowing smile crossing his face.
            </div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (gesturing to the space beside him)</div>
            <div class="character-speech">"Couldn't sleep either? Join me. I'm just revisiting an old favorite."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                You settle beside him and glimpse the book's title: "The War That Wasn't: Chronicles of the First Rebellion." The pages are yellowed with age, the binding cracked from countless readings.
            </div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (the coin still dancing across his knuckles)</div>
            <div class="character-speech">"It's about a rebellion from centuries ago. A group of mages and common folk who stood against corrupt rulers. They called themselves the Custodians of Tomorrow. Sound familiar?" He smiles wryly. "Our name is... inspired by theirs. Though we added 'Morte' because, well, we're a bit more dramatic."</div>
        </div>
        <div class="choices-container fade-in">
            <h3 style="color: #ffd700; margin-bottom: 15px;">How do you respond?</h3>
            <button class="choice-button" onclick="makeChoice('ask_ending', 'fable_story_ending')">Ask how the story ends</button>
            <button class="choice-button" onclick="makeChoice('ask_coin', 'fable_coin_story')">Ask about the coin he's flipping</button>
            <button class="choice-button" onclick="makeChoice('express_fear', 'fable_comfort')">Admit you're afraid of what comes next</button>
        </div>
    `
},

fable_story_ending: {
    content: `
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (his expression softening)</div>
            <div class="character-speech">"That's the beautiful part—it doesn't really end. The rebellion succeeded in some ways, failed in others. Some of the rebels died. Some lived to see their children grow up free. But the important thing? They fought. They chose to stand up when it mattered."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('fable_gift')">Next</button>
        </div>
    `,
    effects: { fable: 1 }
},

fable_coin_story: {
    content: `
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (catching the coin and holding it up to the candlelight)</div>
            <div class="character-speech">"This? It belonged to one of those ancient rebels. Found it in the ruins of an old safehouse. The story goes that before every dangerous mission, they'd flip it. Heads, they went forward. Tails, they reconsidered." He grins. "But I think they always went forward anyway. The coin was just... a ritual. A reminder that they chose their fate."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('fable_gift')">Next</button>
        </div>
    `,
    effects: { fable: 1 }
},

fable_comfort: {
    content: `
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (setting down the coin and book, turning to face you fully)</div>
            <div class="character-speech">"Fear is honest. I'd be more worried if you weren't afraid." His voice drops, becoming gentle. "But ${gameState.playerName}, you're not alone in this anymore. Whatever comes next, we face it together."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('fable_gift')">Next</button>
        </div>
    `,
    effects: { fable: 2 }
},

fable_gift: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                Fable reaches into his coat and pulls out a small pendant on a leather cord. It's simple—a circle of dark metal with strange symbols etched around the edge.
            </div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (offering it to you)</div>
            <div class="character-speech">"This is a ward. Nothing fancy, but it'll help mask your magical signature. Make it harder for Inquisition mages to track you. Consider it a welcome gift to the Morte Custodi."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                You take the pendant, feeling a faint tingle of protective magic as it settles against your chest. The weight is comforting, grounding.
            </div>
        </div>
        <div class="character-scene fable-border fade-in">
            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
            <div class="character-name">FABLE (standing and offering his hand to help you up)</div>
            <div class="character-speech">"You should try to sleep. Tomorrow begins your real training. And ${gameState.playerName}? You're going to be just fine. I have a good feeling about you."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('chapter3_morning')">Next</button>
        </div>
    `,
    effects: { fable: 2 }
},

chance_night_scene: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                Before you can decide where to go, your door opens softly. Chance leans against the doorframe, silhouetted by corridor candlelight, their white curls catching the glow like a halo.
            </div>
        </div>
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE (with that perpetual amused smile)</div>
            <div class="character-speech">"I felt you tossing and turning from three rooms away. Your dreams are... quite loud, you know. May I come in?"</div>
        </div>
        <div class="choices-container fade-in">
            <h3 style="color: #ffd700; margin-bottom: 15px;">How do you respond?</h3>
            <button class="choice-button" onclick="makeChoice('invite_in', 'chance_enters')">Invite them in—you could use the company</button>
            <button class="choice-button" onclick="makeChoice('wary_chance', 'chance_wary_response')">Ask suspiciously what they mean by "loud dreams"</button>
            <button class="choice-button" onclick="makeChoice('flirt_chance', 'chance_flirt_response')">Smile and say "Depends on your intentions"</button>
        </div>
    `
},

chance_enters: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                Chance glides in and settles at the foot of your cot with easy familiarity, as if they've known you for years rather than hours.
            </div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('chance_conversation')">Next</button>
        </div>
    `,
    effects: { chance: 1 }
},

chance_wary_response: {
    content: `
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE (raising hands in mock surrender)</div>
            <div class="character-speech">"Nothing invasive, I promise. It's just... dreamwalkers like me, we sense the emotional texture of dreams. Yours taste like smoke and lightning and fear. Quite striking, really."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                They wait at the threshold, respecting your space despite their casual demeanor.
            </div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('chance_conversation')">Next</button>
        </div>
    `,
    effects: { chance: 0 }
},

chance_flirt_response: {
    content: `
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE (eyes lighting with delight)</div>
            <div class="character-speech">"Oh, I like you. My intentions are entirely honorable, I assure you. Well... mostly honorable. Acceptable levels of honor, at least."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                They enter with a graceful flourish, settling at the foot of your cot.
            </div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('chance_conversation')">Next</button>
        </div>
    `,
    effects: { chance: 2 }
},

chance_conversation: {
    content: `
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE (studying you with lavender eyes)</div>
            <div class="character-speech">"You're intriguing, ${gameState.playerName}. Most new recruits are terrified or angry or both. But you... there's something else beneath the surface. Curiosity? Determination? A delicious cocktail of both?"</div>
        </div>
        <div class="choices-container fade-in">
            <h3 style="color: #ffd700; margin-bottom: 15px;">What do you want to know?</h3>
            <button class="choice-button" onclick="makeChoice('ask_dreamwalking', 'chance_explains_power')">Ask about their dreamwalking abilities</button>
            <button class="choice-button" onclick="makeChoice('ask_chance_past', 'chance_deflects')">Ask about their past</button>
            <button class="choice-button" onclick="makeChoice('ask_safety', 'chance_reassures')">Ask if you're really safe here</button>
        </div>
    `
},

chance_explains_power: {
    content: `
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE (settling more comfortably)</div>
            <div class="character-speech">"Ah, straight to the interesting questions. I like that. Dreamwalking is... imagine being able to step sideways from reality into the world of dreams. Everyone's dreams, including my own. I can observe, sometimes guide, occasionally... intervene. Nightmares are my specialty—I can walk through them, reshape them, even banish them if needed."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                Their expression grows more serious.
            </div>
        </div>
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE</div>
            <div class="character-speech">"The Inquisition fears dreamwalkers almost as much as they fear raw power like yours. After all, who wants someone who can see their darkest fears and secret desires?"</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('chance_gift')">Next</button>
        </div>
    `,
    effects: { chance: 1 }
},

chance_deflects: {
    content: `
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE (smile turning mysterious)</div>
            <div class="character-speech">"My past? Oh darling, everyone here has a past they'd rather not discuss in detail. Let's just say I learned very young that reality is negotiable, and I've been negotiating ever since." They wink. "Besides, the present is so much more interesting than the past, don't you think?"</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('chance_gift')">Next</button>
        </div>
    `,
    effects: { chance: 0 }
},

chance_reassures: {
    content: `
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE (voice soft and genuine)</div>
            <div class="character-speech">"Safer than anywhere else in this gods-forsaken kingdom. The Morte Custodi have kept this safehouse hidden for years. Kit's paranoia ensures every entrance is trapped and warded. Fable's networks warn us of threats. Tris can heal almost anything. And I... well, I make sure no one finds us in their dreams."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                They reach out and gently touch your hand.
            </div>
        </div>
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE</div>
            <div class="character-speech">"You're safe here, ${gameState.playerName}. I promise you that."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('chance_gift')">Next</button>
        </div>
    `,
    effects: { chance: 2 }
},

chance_gift: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                Chance produces a small vial of silvery liquid from their pocket. It swirls with an otherworldly shimmer.
            </div>
        </div>
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE (offering it to you)</div>
            <div class="character-speech">"Distilled dreamflower extract. A few drops under your tongue and you'll sleep peacefully, no nightmares of pyres or inquisitors. I make it myself." They smile warmly. "Consider it a gift from one survivor to another."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                You take the vial, feeling the cool glass in your palm. Chance stands to leave, pausing at the door.
            </div>
        </div>
        <div class="character-scene chance-border fade-in">
            <img src="${CHARACTER_IMAGES.chance}" alt="chance" class="character-portrait" />
            <div class="character-name">CHANCE (with a final enigmatic smile)</div>
            <div class="character-speech">"Sweet dreams, ${gameState.playerName}. And if you need me... well, I'll be in the dreamscape. Just call out, and I'll find you."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('chapter3_morning')">Next</button>
        </div>
    `,
    effects: { chance: 2 }
},

tris_night_scene: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                You follow the scent of herbs to the infirmary. Soft green light spills from the doorway. Inside, Tris works with methodical precision, bottling salves and organizing bundles of dried plants. She doesn't look up as you enter.
            </div>
        </div>
        <div class="character-scene tris-border fade-in">
            <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
            <div class="character-name">TRIS (still focused on her work)</div>
            <div class="character-speech">"Can't sleep? Common after traumatic events. Your body's still processing the stress."</div>
        </div>
        <div class="choices-container fade-in">
            <h3 style="color: #ffd700; margin-bottom: 15px;">How do you respond?</h3>
            <button class="choice-button" onclick="makeChoice('ask_help_tris', 'tris_offer_help')">Offer to help with the bottling</button>
            <button class="choice-button" onclick="makeChoice('ask_remedy', 'tris_doctors_orders')">Ask if she has something that might help you sleep</button>
            <button class="choice-button" onclick="makeChoice('just_watch', 'tris_observation')">Just watch her work in silence</button>
        </div>
    `
},

tris_offer_help: {
    content: `
        <div class="character-scene tris-border fade-in">
            <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
            <div class="character-name">TRIS (finally looking up, mildly surprised)</div>
            <div class="character-speech">"Help? No. I work better alone. My systems are... specific. Besides, you should be resting, not working."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                There's no malice in her refusal, just straightforward honesty. She turns back to her bottles.
            </div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('tris_gift')">Next</button>
        </div>
    `,
    effects: { tris: 0 }
},

tris_doctors_orders: {
    content: `
        <div class="character-scene tris-border fade-in">
            <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
            <div class="character-name">TRIS (considering)</div>
            <div class="character-speech">"I could give you a sedative, but your magical channels are still inflamed. Mixing medicine with unstable magic is... inadvisable. You could end up sleeping for three days or hallucinating. Neither is ideal."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('tris_gift')">Next</button>
        </div>
    `,
    effects: { tris: 1 }
},

tris_observation: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                You lean against the doorframe and simply watch. Tris's movements are precise, economical. Every gesture has purpose. There's something almost meditative about her efficiency.
            </div>
        </div>
        <div class="character-scene tris-border fade-in">
            <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
            <div class="character-name">TRIS (after several minutes of companionable silence)</div>
            <div class="character-speech">"You don't fill silence with nervous chatter. Good. That's... rare."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('tris_gift')">Next</button>
        </div>
    `,
    effects: { tris: 1 }
},

tris_gift: {
    content: `
        <div class="character-scene tris-border fade-in">
            <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
            <div class="character-name">TRIS (reaching for a book from her shelf)</div>
            <div class="character-speech">"Since you're not sleeping anyway..." She hands you a worn book. "Mystery novel. 'The Poisoner's Apprentice.' If your mind won't quiet, give it something else to focus on."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                You take the book. The cover shows a shadowy figure surrounded by bottles and vials.
            </div>
        </div>
        <div class="character-scene tris-border fade-in">
            <img src="${CHARACTER_IMAGES.tris}" alt="tris" class="character-portrait" />
            <div class="character-name">TRIS (firm, but not unkind)</div>
            <div class="character-speech">"Now go. Rest. Doctor's orders. You'll need your strength tomorrow."</div>
        </div>
        <div class="choices-container fade-in">
            <h3 style="color: #ffd700; margin-bottom: 15px;">Do you read the book?</h3>
            <button class="choice-button" onclick="makeChoice('read_book', 'tris_book_consequence')">Read it—the mystery sounds intriguing</button>
            <button class="choice-button" onclick="makeChoice('sleep_instead', 'tris_obey_orders')">Take her advice and try to sleep instead</button>
        </div>
    `
},

tris_book_consequence: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                Back in your room, you light a candle and open the book. Just one chapter, you tell yourself.
                <br><br>
                Three hours later, you're still reading, completely absorbed in the mystery of who's been poisoning the noble houses of Karnassus. The protagonist is brilliant but flawed, and you <em>need</em> to know if your theory about the merchant's daughter is correct...
                <br><br>
                When you finally notice the candle has burned down to a stub, dawn is already breaking. Your eyes ache, but you solved the mystery—and you were right about the merchant's daughter.
                <br><br>
                Tris is going to give you such a look when she sees the dark circles under your eyes.
            </div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('chapter3_morning')">Face the Morning (Exhausted)</button>
        </div>
    `,
    effects: { tris: -1 }
},

tris_obey_orders: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                You place the book on your small side table and lie down. Maybe it's Tris's clinical confidence or simply exhaustion finally catching up, but sleep comes easier than expected.
                <br><br>
                You wake feeling actually rested for the first time since the pyre.
            </div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('chapter3_morning')">Face the Morning (Rested)</button>
        </div>
    `,
    effects: { tris: 1 }
},

kit_night_scene: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                The rhythmic scrape of steel on stone draws you to the armory. Kit stands at a workbench, methodically cleaning and sharpening weapons from today's chaos. Each movement is precise, almost ritualistic.
                <br><br>
                He looks up as you enter, amber eyes assessing.
            </div>
        </div>
        <div class="character-scene kit-border fade-in">
            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
            <div class="character-name">KIT (setting down the blade he was working on)</div>
            <div class="character-speech">"Can't sleep?" It's not really a question. "How are you feeling? Physically, I mean."</div>
        </div>
        <div class="choices-container fade-in">
            <h3 style="color: #ffd700; margin-bottom: 15px;">How honest are you?</h3>
            <button class="choice-button" onclick="makeChoice('honest_sore', 'kit_assessment')">Admit everything hurts and you're exhausted</button>
            <button class="choice-button" onclick="makeChoice('downplay_pain', 'kit_sees_through')">Downplay it—say you're fine</button>
            <button class="choice-button" onclick="makeChoice('deflect_to_kit', 'kit_about_himself')">Turn it around—ask how he's feeling</button>
        </div>
    `
},

kit_assessment: {
    content: `
        <div class="character-scene kit-border fade-in">
            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
            <div class="character-name">KIT (nodding with approval)</div>
            <div class="character-speech">"Good. Honest assessment of your condition is the first step to survival. Pain means you're alive. Exhaustion means you fought hard. Both are acceptable."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('kit_training_offer')">Next</button>
        </div>
    `,
    effects: { kit: 1 }
},

kit_sees_through: {
    content: `
        <div class="character-scene kit-border fade-in">
            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
            <div class="character-name">KIT (eyes narrowing slightly)</div>
            <div class="character-speech">"You're lying. I can see it in how you're favoring your left side and the tension in your shoulders. Don't lie about your condition—not to me, not to yourself. It's dangerous."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                His tone isn't harsh, just matter-of-fact. He returns to his weapons maintenance.
            </div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('kit_training_offer')">Next</button>
        </div>
    `,
    effects: { kit: -1 }
},

kit_about_himself: {
    content: `
        <div class="character-scene kit-border fade-in">
            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
            <div class="character-name">KIT (pausing, considering)</div>
            <div class="character-speech">"I'm functional. That's all that matters." A ghost of something—maybe appreciation—crosses his face. "But thank you for asking. Most don't."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('kit_training_offer')">Next</button>
        </div>
    `,
    effects: { kit: 1 }
},

kit_training_offer: {
    content: `
        <div class="character-scene kit-border fade-in">
            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
            <div class="character-name">KIT (gesturing to the weapons)</div>
            <div class="character-speech">"Tomorrow I'll start training you in magic control. But tonight... your magic isn't the only thing you need to know. Come here."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                He selects a simple dagger from the rack—well-balanced, practical, lethal. He demonstrates the proper grip, his movements economical and precise.
            </div>
        </div>
        <div class="character-scene kit-border fade-in">
            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
            <div class="character-name">KIT</div>
            <div class="character-speech">"Magic can fail. Be suppressed. Or simply run out. But steel?" He offers you the dagger. "Steel is reliable. Show me your stance."</div>
        </div>
        <div class="choices-container fade-in">
            <h3 style="color: #ffd700; margin-bottom: 15px;">How do you approach this impromptu lesson?</h3>
            <button class="choice-button" onclick="makeChoice('eager_student', 'kit_good_student')">Pay careful attention and follow his instructions exactly</button>
            <button class="choice-button" onclick="makeChoice('natural_fighter', 'kit_impressed')">Trust your instincts—you've been in fights before</button>
            <button class="choice-button" onclick="makeChoice('nervous_blade', 'kit_patience')">Hesitate—you've never held a weapon like this</button>
        </div>
    `
},

kit_good_student: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                You focus completely on Kit's instructions, adjusting your grip when he corrects it, shifting your weight when he demonstrates. The dagger feels strange in your hand, but his patient guidance makes it less intimidating.
            </div>
        </div>
        <div class="character-scene kit-border fade-in">
            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
            <div class="character-name">KIT (rare approval in his voice)</div>
            <div class="character-speech">"Better. You listen. That's more valuable than natural talent. Keep practicing that guard position."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('kit_gift')">Next</button>
        </div>
    `,
    effects: { kit: 2 }
},

kit_impressed: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                You take the dagger and fall into a stance that feels natural—weight on your back foot, blade held defensively. Kit's eyebrows rise slightly.
            </div>
        </div>
        <div class="character-scene kit-border fade-in">
            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
            <div class="character-name">KIT (studying your form)</div>
            <div class="character-speech">"Street fighting experience?" He adjusts your elbow angle slightly. "Not formal training, but practical. Good foundation. We'll refine it."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('kit_gift')">Next</button>
        </div>
    `,
    effects: { kit: 1 }
},

kit_patience: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                The blade feels heavy and dangerous in your unpracticed hand. You hold it awkwardly, uncertain where your fingers should go.
            </div>
        </div>
        <div class="character-scene kit-border fade-in">
            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
            <div class="character-name">KIT (stepping closer, his voice surprisingly gentle)</div>
            <div class="character-speech">"Everyone starts somewhere. Here—" He guides your hand into the proper grip, adjusting your stance with careful touches. "The weapon is a tool, not a monster. Respect it, but don't fear it."</div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('kit_gift')">Next</button>
        </div>
    `,
    effects: { kit: 1 }
},

kit_gift: {
    content: `
        <div class="story-text fade-in">
            <div class="narrator-text">
                After running through several basic strikes and defensive positions, Kit steps back and nods once.
            </div>
        </div>
        <div class="character-scene kit-border fade-in">
            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
            <div class="character-name">KIT (gesturing to the dagger you're holding)</div>
            <div class="character-speech">"Keep it. You'll need a blade of your own. This one's well-balanced for a beginner—not too heavy, good steel. Wear it always. Even here, especially here."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                He produces a simple leather sheath and shows you how to attach it to your belt.
            </div>
        </div>
        <div class="character-scene kit-border fade-in">
            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
            <div class="character-name">KIT (meeting your eyes seriously)</div>
            <div class="character-speech">"Tomorrow we'll train properly. Magic and steel both. But tonight... get some rest. You survived today. That's enough."</div>
        </div>
        <div class="story-text fade-in">
            <div class="narrator-text">
                He returns to his weapon maintenance, but you catch the slightest hint of satisfaction in his expression. Coming from Kit, it might as well be a warm embrace.
            </div>
        </div>
        <div class="next-container">
            <button class="next-button" onclick="goToScene('chapter3_morning')">Next</button>
        </div>
    `,
    effects: { kit: 2 }
}
};