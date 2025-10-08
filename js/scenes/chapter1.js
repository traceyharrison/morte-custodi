import { ENVIRON_IMAGES, CHARACTER_IMAGES } from '../constants.js';
import { diceSystem } from '../diceSystem.js';
import { gameState } from '../gameState.js';

export const chapter1Scenes = {
    character_creation: {
        content: `
            <div class="character-creation fade-in">
                <h2 style="color: #ffd700; text-align: center; margin-bottom: 25px; font-size: 2em;">Before Your Fate</h2>
                <img src="${ENVIRON_IMAGES.pyre}" alt="pyre" class="character-portrait" />
                <div style="text-align: center; margin-bottom: 25px;">
                    <p style="color: #f5f5dc; line-height: 1.6;">
                        Before the pyre, before the flames, before your magic awakened in desperation, before the downfall that got you here... you had a name, and a past. 
                        Tell us who you were, so we may understand who you will become.
                    </p>
                </div>

                <div style="margin-bottom: 25px;">
                    <label style="color: #ffd700; font-weight: 600; display: block; margin-bottom: 10px;">What is your name?</label>
                    <input type="text" id="player-name" class="name-input" placeholder="Enter your name..." maxlength="20">
                </div>

                <div style="margin-bottom: 25px;">
                    <h3 style="color: #ffd700; margin-bottom: 15px;">Choose your past:</h3>
                    
                    <div class="backstory-option" data-backstory="noble" onclick="window.selectBackstory('noble')">
                        <div class="backstory-title">Fallen Noble</div>
                        <div class="backstory-description">
                            Once you walked in gilded halls and commanded respect with a single glance. Your family's name opened doors and silenced whispers. But scandal, betrayal, or simple misfortune stripped away your titles and wealth. Now you understand both privilege and the loss thereof. Perhaps that makes you dangerous to those who still cling to power.
                        </div>
                    </div>

                    <div class="backstory-option" data-backstory="orphan" onclick="window.selectBackstory('orphan')">
                        <div class="backstory-title">Street Orphan</div>
                        <div class="backstory-description">
                            The streets raised you when no one else could, or would. You learned to survive on quick wits, quicker fingers, and an instinct for reading people's true intentions. You've slept in doorways, hidden in the streets, and stolen bread to live another day. The powerful have always been your enemies, but you know how to slip between their fingers like smoke.
                        </div>
                    </div>

                    <div class="backstory-option" data-backstory="outsider" onclick="window.selectBackstory('outsider')">
                        <div class="backstory-title">Foreign Exile</div>
                        <div class="backstory-description">
                            You came from beyond the kingdom's borders, carrying strange customs and stranger knowledge. Whether you fled persecution, sought opportunity, or followed a calling, you never quite belonged here. Your accent marks you as different, your ways are often misunderstood, and your words mistrusted, but you see this land's flaws clearly because you're not blind to them by birth.
                        </div>
                    </div>
                </div>

                <div style="text-align: center;">
                    <button id="begin-story" class="next-button" onclick="window.beginStory()" disabled style="opacity: 0.5;">Begin Your Story</button>
                </div>
            </div>
        `
    },

    start: {
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Dawn bleeds over the town square. The air tastes of smoke and iron. A thousand eyes press on you from the gathered crowd, their faces half-hidden in the rising fog. You do not stand among them, but before them. You have been punished for the crime of magic. Your sentence? <br> <b>Death.</b>
                    <br><br>
                    You stand bound at the pyre, wrists raw beneath coarse rope. The stake at your back is damp with yesterday's rain, but the kindling piled beneath your feet is dry, almost eager to erupt into flames around you.
                    <br><br>
                    The Crown's banners hang from the gallows arch, and you see the serpent swallowing its own tail in an endless unbroken cycle. The symbol of eternity, they say. You see it more as a neverending wheel of suffering. An endless cycle of death.
                    <br>
                    <img src="${ENVIRON_IMAGES.cityFlag}" alt="city flag" style="width: 120px; height: auto; display: block; margin: 15px auto; border: 2px solid #8b0000; box-shadow: 0 0 15px rgba(139, 0, 0, 0.5);" />
                    Someone moves to the stage and the crowd stirs as the Inquisitors move into place. They form a ring of steel. Helmets gleam, halberds fixed. At their head: the Captain of the Inquisition, voice hard and ceremonial.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="window.goToScene('captain_speech')">Next</button>
            </div>
        `
    },

    captain_speech: {
        content: `
            <div class="story-text fade-in">
                <div class="dialogue">
                <img src="${CHARACTER_IMAGES.captain}" alt="captain" class="character-portrait" />
                    <div class="character-name">CAPTAIN:</div>
                    <div class="character-speech">"By decree of His Radiance, bearer of the Serpent Throne, this heretic shall be purged of corruption. The sin of sorcery shall be burned from the flesh. As the serpent devours its tail, so too may the rot of magic be cleansed from our ever holy land"</div>
                </div>
                <div class="narrator-text">
                    Murmurs ripple through the people. Some clutch charms of warding. Others avert their eyes. A child is hoisted onto their father's shoulders to watch. Magic is a poison. It has been outlawed for almost as long as anyone can remember. You are no exception.
                    <br><br>
                    The torchbearer steps forward.
                    <br>
                    And in your chest, the storm stirs. Something dark rumbles. 
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="window.goToScene('first_choice')">Next</button>
            </div>
        `
    },

    first_choice: {
        getContent: function() {
            console.log('Generating first_choice content. Current backstory:', gameState.backstory);
            const backstoryChoices = {
                'noble': '<button class="choice-button" onclick="window.makeChoice(\'noble_authority\', \'noble_authority_response\')">Invoke your family name: "I demand to speak to the High Inquisitor. This is beneath my station."</button>',
                'orphan': '<button class="choice-button" onclick="window.makeChoice(\'street_wisdom\', \'street_wisdom_response\')">Call out to familiar faces: "You all know me. Are you really going to let them burn one of your own?"</button>',
                'outsider': '<button class="choice-button" onclick="window.makeChoice(\'foreign_wisdom\', \'foreign_wisdom_response\')">Share your truth: "You are ruled by fear, and fear alone. But I am not the one you should be afraid of."</button>'
            };
            
            return `
                <div class="choices-container fade-in">
                    <h3 style="color: #ffd700; margin-bottom: 15px;">How do you face the crowd?</h3>
                    <button class="choice-button" onclick="window.makeChoice('defiant1', 'defiant_response')">Spit toward the Captain. "I will never bow to your cowardice"</button>
                    <button class="choice-button" onclick="window.makeChoice('begging1', 'begging_response')">Call out to the crowd. "Please, help me! Someone!"</button>
                    <button class="choice-button" onclick="window.makeChoice('silent1', 'silent_response')">Lower your head in silence. Let them think you've surrendered.</button>
                    ${backstoryChoices[gameState.backstory] || '<!-- No backstory choice available -->'}
                </div>
            `;
        },
        content: null,
        onLoad: function() {
            console.log('First choice scene loaded. Current backstory:', gameState.backstory);
            // Set content dynamically when the scene loads
            this.content = this.getContent();
        }
    },

    defiant_response: {
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">Gasps from the crowd. The Captain sneers, and there's something like disgust in his cold eyes.</div>
                <div class="dialogue">
                    <div class="character-name">CAPTAIN:</div>
                    <div class="character-speech">"Arrogant to the end. Light it. I want to hear the screams."</div>
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="window.goToScene('backstory_reflection')">Next</button>
            </div>
        `,
        effects: { kit: -1, fable: 1}
    },

    begging_response: {
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">Whispers ripple. A few avert their eyes. A woman mutters a prayer. Some hearts still beat with compassion.</div>
                <div class="dialogue">
                <img src="${CHARACTER_IMAGES.captain}" alt="captain" class="character-portrait" />
                    <div class="character-name">CAPTAIN:</div>
                    <div class="character-speech">"Pitiful. Your plea falls on deaf ears. Everyone knows you don't deserve saving."</div>
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="window.goToScene('backstory_reflection')">Next</button>
            </div>
        `,
        effects: { fable: 1, kit: -1 }
    },

    silent_response: {
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">The silence weighs heavy. Some think you broken. Others see the quiet dignity of the condemned.</div>
                <div class="dialogue">
                <img src="${CHARACTER_IMAGES.captain}" alt="captain" class="character-portrait" />
                    <div class="character-name">CAPTAIN:</div>
                    <div class="character-speech">"Good. Meet the judgment of The Gods quietly."</div>
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="window.goToScene('backstory_reflection')">Next</button>
            </div>
        `,
        effects: { kit: 1, fable: -1 }
    },

    noble_authority_response: {
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Your words cut through the tension like a blade. Several of the older guards shift uncomfortably—they remember when your family's influence could make or break careers. The Captain's face darkens with rage, but you see a flicker of uncertainty in his eyes.
                </div>
                <div class="dialogue">
                    <div class="character-name">CAPTAIN (through gritted teeth):</div>
                    <div class="character-speech">"The High Inquisitor has more important matters than entertaining the demands of a fallen house. Your noble blood won't save you from righteous flames."</div>
                </div>
                <div class="narrator-text">
                    But your words have had their effect. Several of the senior Inquisitors exchange glances, clearly wondering if they should delay until proper protocol is observed. The power of nobility, even fallen nobility, runs deep in this kingdom.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="window.goToScene('fire_scene')">Next</button>
            </div>
        `,
        effects: { kit: -2, fable: 2 }
    },

    street_wisdom_response: {
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Your words stir something in the crowd. Faces you know from countless alleyways and marketplaces look up with recognition. The vegetable seller who sometimes left bruised apples where you could find them. The cobbler's apprentice you once helped escape a guard patrol.
                </div>
                <div class="dialogue">
                    <div class="character-name">CAPTAIN (sneering):</div>
                    <div class="character-speech">"Street loyalty? How pathetic. These good citizens know better than to side with a magical deviant."</div>
                </div>
                <div class="narrator-text">
                    But you see it in their eyes—guilt, memory, the complicated bonds of street life. A few even turn away, unable to watch. The streets may not save you, but they haven't forgotten you either.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="window.goToScene('fire_scene')">Next</button>
            </div>
        `,
        effects: { kit: 0, fable: 2 }
    },

    foreign_wisdom_response: {
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    Your accent carries the weight of distant lands, and your words bring new concepts that make the crowd shift uneasily. Some make signs to ward off foreign influence, but others listen with barely concealed curiosity.
                </div>
                <div class="dialogue">
                    <div class="character-name">CAPTAIN (voice sharp with warning):</div>
                    <div class="character-speech">"Silence your heathen tongue! Your foreign corruption has no place in our holy land."</div>
                </div>
                <div class="narrator-text">
                    But you've planted a seed of doubt. In a kingdom so sure of its ways, you've offered a glimpse of other possibilities, other truths. Some in the crowd will remember this moment, this suggestion that their certainties might not be as absolute as they believed.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="window.goToScene('fire_scene')">Next</button>
            </div>
        `,
        effects: { kit: 1, fable: 2 }
    },

    backstory_reflection: {
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    The Captain's words hang in the air like smoke... Your response comes not from calculation, but from the deepest part of your nature, forged by the life you lived before this pyre.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="window.triggerBackstoryResponse()">Next</button>
            </div>
        `
    },
    noble_response: {
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    You straighten your spine despite the ropes, lifting your chin with the bearing that was drilled into you from childhood. Even bound and condemned, you carry yourself like nobility. The crowd stirs uneasily, many remember when your family's word was law, when a single glance from your bloodline could change their fate.
                </div>
                <div class="dialogue">
                    <div class="character-name">YOU (voice carrying across the square with aristocratic authority):</div>
                    <div class="character-speech">"Captain, you forget yourself. My blood has ruled these lands for centuries. Show proper respect."</div>
                </div>
                <div class="narrator-text">
                    Murmurs ripple through the gathering. Some of the older citizens shift uncomfortably, old habits of deference warring with current hatred. A few actually avert their eyes—muscle memory of submission to your station.
                </div>
                <div class="dialogue">
                    <div class="character-name">CAPTAIN (face flushing with anger and embarrassment):</div>
                    <div class="character-speech">"Your 'noble blood' means nothing to the pyre. You'll burn just like any common wretch. Perhaps you'll burn brighter, as corruption runs deeper in noble veins."</div>
                </div>
                <div class="narrator-text">
                    But you see it in his eyes: even he hesitates before your bearing. The power of bloodline and breeding doesn't vanish overnight, even at the execution ground.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="window.goToScene('fire_scene')">Next</button>
            </div>
        `,
        effects: { kit: -1 }
    },

    orphan_response: {
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                    You flash the same devil-may-care grin that got you through a thousand close calls on these very streets. Your voice carries the rough edge of someone who learned to speak defiance before they learned their letters. Several faces in the crowd are familiar—shopkeepers who chased you, guards who hunted you through alleys, merchants who spat curses at your retreating form.
                </div>
                <div class="dialogue">
                    <div class="character-name">YOU (laughing with street-hardened bravado):</div>
                    <div class="character-speech">"Come on then, you bastards! I've been running from you lot since I could walk, don't tell me you're tired of the chase now?"</div>
                </div>
                <div class="narrator-text">
                    A ripple passes through the crowd—some nod with grudging respect. You were a thorn in their side, but you were <em>their</em> thorn. A few faces show something almost like admiration, or perhaps disappointment at seeing you here.
                </div>
                <div class="dialogue">
                    <div class="character-name">CAPTAIN (snarling):</div>
                    <div class="character-speech">"Still think this is a game, street rat? We'll see how clever you are when the flames reach you. Should've stayed in the gutters where you belong."</div>
                </div>
                <div class="narrator-text">
                    An old woman near the platform catches your eye and makes a subtle gesture—fingers crossed for luck. The streets remember their own, even at the end.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="window.goToScene('fire_scene')">Next</button>
            </div>
        `,
        effects: { fable: 1, kit: -1 }
    },

    outsider_response: {
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">
                   You are not from here.<br> You look to the crowd and speak first in the tongue of your homeland, words that taste of distant shores flow from your lips. The crowd falls silent, unnerved by the new sounds. Then you switch to their language, your accent unmistakable—marking you as other, as stranger, as someone who doesn't belong.
                </div>
                <div class="dialogue">
                    <div class="character-name">YOU (voice carrying otherworldly weight):</div>
                    <div class="character-speech">"In my land, we have a saying: 'The fire that burns brightest reveals the darkness of those who kindle it.' Your gods are not the only ones watching this day, Captain."</div>
                </div>
                <div class="narrator-text">
                    Unease spreads through the square like smoke. Several people make protective signs, unsure whether you're cursing them or prophesying. Perhaps it is both.
                </div>
                <div class="dialogue">
                    <div class="character-name">CAPTAIN (voice tight with uncertainty):</div>
                    <div class="character-speech">"Your heathen words have no power here, outsider. This is righteous judgment under our true gods. Your corruption ends today."</div>
                </div>
                <div class="narrator-text">
                    But you see several in the crowd exchange nervous glances. The Captain's confidence wavers for just a moment.
                </div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="window.goToScene('fire_scene')">Next</button>
            </div>
        `,
        effects: {fable: 1 }
    },

    fire_scene: {
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">"Light the pyre." The Captain commands. <br> The torch lowers toward the pyre. Smoke curls upward. Your heart hammers. The storm in your veins pounds against its cage. Your heart races and your breath catches in your lungs. You feel your power building inside you like a tempest ready to break free.<br><br>This is your moment. Can you harness the magic within you to break free, or will you need to find another way?</div>
            </div>
            ${(() => {
                let difficulty = 13;
                let description = 'The power writhes within you like a caged beast. Focus your will and try to break free from your bonds using the magical energy coursing through your veins.';
                
                switch(gameState.backstory) {
                    case 'noble':
                        difficulty = 12;
                        description = 'Years of noble education taught you control and discipline. Even as the magic threatens to overwhelm you, your trained mind seeks to impose order on chaos.';
                        break;
                    case 'orphan':
                        difficulty = 14;
                        description = 'The streets taught you that power comes in many forms. Your raw survival instinct resonates with the wild magic, dangerous but potentially devastating.';
                        break;
                    case 'outsider':
                        difficulty = 13;
                        description = 'Your understanding of magic differs from theirs. Foreign traditions and mystical insights guide your attempt to channel the power.';
                        break;
                }
                
                return diceSystem.createDiceRoll(
                    'Channel Your Magic',
                    description,
                    'magic_control',
                    'magic_escape_success',
                    'magic_escape_failure',
                    difficulty,
                    'magic_control'
                );
            })()}
        `
    },

    magic_escape_success: {
        content: `
            <div class="story-text fade-in">
                <div class="sfx">⚡ A THUNDERCLAP. VIOLET FIRE EXPLODES OUTWARD. ⚡</div>
                <div class="narrator-text">The power flows through you with perfect control. Violet flames dance around your wrists, burning away the ropes with surgical precision. The fire spreads outward in a controlled burst, forcing the Inquisitors back but harming no innocents.<br><br>You stand free, violet sparks playing across your hands like tamed lightning. The crowd gasps in awe and terror. Even the Captain stumbles backward, his face pale with shock.<br><br>For the first time in your life, your magic feels like a gift rather than a curse.</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="window.goToScene('controlled_magic_choice')">Next</button>
            </div>
        `,
        effects: { fable:1, kit: 1 }
    },

    magic_escape_failure: {
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">The power builds within you, but you cannot grasp it. Like trying to hold water in cupped hands, it slips away just when you need it most. The torch touches the kindling.<br><br>Flames begin to lick upward. Panic floods your chest. Just when hope seems lost—</div>
                <div class="sfx">⚡ A THUNDERCLAP. VIOLET FIRE EXPLODES. ⚡</div>
                <div class="narrator-text">The magic erupts from you in a desperate, uncontrolled burst. The ropes burn away, but so does half the platform. Inquisitors are thrown sprawling. The crowd screams, scattering in terror.<br><br>Your chest heaves. Wild sparks dance across your hands. You are free, but the power feels dangerous, unpredictable.</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="window.goToScene('fire_choice')">Next</button>
            </div>
        `,
        effects: { kit: -1, fable: -1 }
    },

    controlled_magic_choice: {
        content: `
            <div class="choices-container fade-in">
                <h3 style="color: #ffd700; margin-bottom: 15px;">With your magic under control, what do you do?</h3>
                <button class="choice-button" onclick="window.makeChoice('confident_escape', 'confident_escape_response')">Walk calmly through the crowd, power crackling visibly around you.</button>
                <button class="choice-button" onclick="window.makeChoice('protective_stance', 'protective_stance_response')">Shield yourself and look for a way out without harming anyone.</button>
                <button class="choice-button" onclick="window.makeChoice('dramatic_exit', 'dramatic_exit_response')">Create a spectacular display to cover your escape.</button>
            </div>
        `
    },

    confident_escape_response: {
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">Violet energy swirls around you like a protective cloak as you step down from the ruined pyre. The crowd parts before you like the sea, too awed and terrified to interfere. Some kneel. Others flee.<br><br>You walk with the confidence of someone who has just discovered they are more than they ever imagined.</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="window.goToScene('strangers_arrive')">Next</button>
            </div>
        `,
        effects: { fable: 1, kit: -1 }
    },

    protective_stance_response: {
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">You pull the magic inward, creating a shimmering barrier around yourself. No one will be hurt by your power today. The crowd watches in wonder as you carefully pick your way through them, your shield parting around frightened children and cowering adults.<br><br>Even in your moment of liberation, you choose compassion.</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="window.goToScene('strangers_arrive')">Next</button>
            </div>
        `,
        effects: { fable: 1, kit: 1 }
    },

    dramatic_exit_response: {
        content: `
            <div class="story-text fade-in">
                <div class="narrator-text">Violet fire spirals skyward in magnificent pillars, painting the dawn in otherworldly light. The display is beautiful, terrible, and utterly mesmerizing. In the chaos of swirling magic and scattered light, you slip away like smoke.<br><br>Behind you, the crowd whispers and you wonder if they will speak of this day for years to come.</div>
            </div>
            <div class="next-container">
                <button class="next-button" onclick="window.goToScene('strangers_arrive')">Next</button>
            </div>
        `,
        effects: { fable: 1, kit: -1 }
    },

    fire_choice: {
        content: `
            <div class="choices-container fade-in">
                <h3 style="color: #ffd700; margin-bottom: 15px;">What is your first instinct?</h3>
                <button class="choice-button" onclick="window.makeChoice('aggressive2', 'aggressive_response')">Lash out at the nearest guards in fear and anger, hoping to take them out.</button>
                <button class="choice-button" onclick="window.makeChoice('fleeing2', 'fleeing_response')">Stumble toward the panicked crowd hoping for help.</button>
                <button class="choice-button" onclick="window.makeChoice('frozen2', 'frozen_response')">Stare at your hands, unable to move, hoping an idea comes to you.</button>
            </div>
        `
    },
     aggressive_response: {
                content: `
                    <div class="story-text fade-in">
                        <div class="narrator-text">Bolts of violet fire arc outward. Inquisitors shield themselves, shouting "heretic!" The power feels wild, uncontrolled, dangerous.</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('strangers_arrive')">Next</button>
                    </div>
                `,
                effects: { kit: -2, fable: -1 }
            },

            fleeing_response: {
                content: `
                    <div class="story-text fade-in">
                        <div class="narrator-text">The crowd recoils in fear, parting as if you carry plague. A woman spits at your feet as hands grab at you, but some eyes show pity rather than hatred. No one reaches out a hand in help or kindness. </div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('strangers_arrive')">Next</button>
                    </div>
                `,
                effects: { fable: 1, kit: -1 }
            },

            frozen_response: {
                content: `
                    <div class="story-text fade-in">
                        <div class="narrator-text">The Captain seizes the moment, shouting, "Seize the prisoner! Before the corruption spreads!" But your stillness unnerves some of the crowd. Watchers stare at you warily while the guards begin to collect themselves at their captain's command.</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('strangers_arrive')">Next</button>
                    </div>
                `,
                effects: { fable: -2, kit: 1 }
            },

            strangers_arrive: {
                content: `
                    <div class="story-text fade-in">
                        <div class="narrator-text">Before the Inquisition can regroup, movement splits the chaos.<br><br>Two strangers stride into the square.<br><br>The first: a tall man, his hair is black with a single silver streak, and his eyes are warm yet weary. He grins as if this is all a great amusement and not en execution. The second man is broad sholdered with scarred armor. His amber eyes are sharp as a hawk's. His steps are measured, efficient, merciless.</div>
                        <div class="character-scene fable-border fade-in">
                            <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                            <strong style="color: #ffd700;">Fable Voss.</strong>
                            <br><br>
                            <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" /> 
                            <strong style="color: #ff6b6b;">Kit Alderidge.</strong>
                            <br><br>
                            The two men rush forward in perfect synchronized movements. They manage to pull you out of the grasp of the Inquisitors that surround you and grant you a moment of reprieve.
                        </div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('fable_speaks')">Next</button>
                    </div>
                `
            },

            fable_speaks: {
                content: `
                    <div class="character-scene fable-border fade-in">
                        <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                        <div class="character-name">FABLE (grinning)</div>
                        <div class="character-speech">"Some timing you've got. Lucky for you, ours is just as good."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('kit_speaks')">Next</button>
                    </div>
                `
            },

            kit_speaks: {
                content: `
                    <div class="character-scene kit-border fade-in">
                        <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                        <div class="character-name">KIT (cold, precise)</div>
                        <div class="character-speech">"Less talking, more moving. More guards will be here any moment."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('respond_to_strangers')">Next</button>
                    </div>
                `
            },

            respond_to_strangers: {
                content: `
                    <div class="choices-container fade-in">
                        <h3 style="color: #ffd700; margin-bottom: 15px;">How do you respond to these strangers?</h3>
                        <button class="choice-button" onclick="makeChoice('introduce_self', 'introduce_response')">"I'm \${gameState.playerName}. And I suppose...I owe you my life."</button>
                        <button class="choice-button" onclick="makeChoice('suspicious3', 'suspicious_response')">Pull away from them, "Who are you? Why are you here?"</button>
                        <button class="choice-button" onclick="makeChoice('grateful3', 'grateful_response')">"You...saved me... thank you."</button>
                        <button class="choice-button" onclick="makeChoice('defiant3', 'defiant_response2')">Back away from them, "I don't need rescuing."</button>
                    </div>
                `
            },

            introduce_response: {
                content: `
                    <div class="character-scene fable-border fade-in">
                        <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                        <div class="character-name">FABLE (with a appreciative nod)</div>
                        <div class="character-speech">"\${gameState.playerName}. A good name. I'm Fable Voss, and this is Kit Alderidge. Pleasure to make your acquaintance even under these... interesting circumstances."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('kit_introduction')">Next</button>
                    </div>
                `,
                effects: { fable: 1, kit: 1 }
            },

            kit_introduction: {
                content: `
                    <div class="character-scene kit-border fade-in">
                        <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                        <div class="character-name">KIT (curt but respectful)</div>
                        <div class="character-speech">"Well met, \${gameState.playerName}. Now that introductions are done—we need to move. More guards coming."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('final_choice_setup')">Next</button>
                    </div>
                `
            },

            suspicious_response: {
                content: `
                    <div class="character-scene kit-border fade-in">
                        <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                        <div class="character-name">KIT (stoic)</div>
                        <div class="character-speech">"We're your salvation."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('fable_response_1')">Next</button>
                    </div>
                `,
                effects: { kit: 1, fable: 1 }
            },

            fable_response_1: {
                content: `
                    <div class="character-scene fable-border fade-in">
                        <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                        <div class="character-name">FABLE (smiling)</div>
                        <div class="character-speech">"We're here to help. Trust me, you'll like us better than the pyre."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('final_choice_setup')">Next</button>
                    </div>
                `
            },

            grateful_response: {
                content: `
                    <div class="character-scene fable-border fade-in">
                        <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                        <div class="character-name">FABLE (soft chuckle)</div>
                        <div class="character-speech">"Don't thank us yet. Wait until we've actually got you out."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('kit_response_1')">Next</button>
                    </div>
                `,
                effects: { fable: 1, kit: 1 }
            },

            kit_response_1: {
                content: `
                    <div class="character-scene kit-border fade-in">
                        <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                        <div class="character-name">KIT (frowning)</div>
                        <div class="character-speech">"Keep moving."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('final_choice_setup')">Next</button>
                    </div>
                `
            },

            defiant_response2: {
                content: `
                    <div class="character-scene kit-border fade-in">
                        <img src="${CHARACTER_IMAGES.kit}" alt="kit" class="character-portrait" />
                        <div class="character-name">KIT (nodding)</div>
                        <div class="character-speech">"Maybe you will survive this"</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('fable_response_2')">Next</button>
                    </div>
                `,
                effects: { kit: 1, fable: -1 }
            },

            fable_response_2: {
                content: `
                    <div class="character-scene fable-border fade-in">
                        <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                        <div class="character-name">FABLE (mock wounded)</div>
                        <div class="character-speech">"Ah, but everyone needs saving once in a while, don't they? Come on, let us play hero."</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('final_choice_setup')">Next</button>
                    </div>
                `
            },

            final_choice_setup: {
                content: `
                    <div class="story-text fade-in">
                        <div class="sfx">🔔 BELLS TOLL. BOOTS THUNDER. 🔔</div>
                        <div class="narrator-text">The Inquisition rallies at the square's edge.<br><br>The Captain rises, face twisted in rage. His soldiers form ranks, lanterns burning blood-red.</div>
                        <div class="dialogue">
                            <div class="character-name">CAPTAIN:</div>
                            <div class="character-speech">"Seize the prisoner! Do not let the heretic escape!"</div>
                        </div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('fable_final')">Next</button>
                    </div>
                `
            },

            fable_final: {
                content: `
                    <div class="character-scene fable-border fade-in">
                        <img src="${CHARACTER_IMAGES.fable}" alt="fable" class="character-portrait" />
                        <div class="character-name">FABLE (urgent, extending hand)</div>
                        <div class="character-speech">"Choice time, spark. With us — or with them?"</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="goToScene('final_choice')">Next</button>
                    </div>
                `
            },

            final_choice: {
                content: `
                    <div class="choices-container fade-in">
                        <h3 style="color: #ffd700; margin-bottom: 15px;">The final choice:</h3>
                        <button class="choice-button" onclick="makeChoice('take_hand', 'take_hand_ending')">Take Fable's hand. "Fine. Lead the way."</button>
                        <button class="choice-button" onclick="makeChoice('refuse_run', 'refuse_ending')">Refuse and try to run alone. "I'll make my own path."</button>
                        <button class="choice-button" onclick="makeChoice('hesitate', 'hesitate_ending')">Stand frozen, unsure what to do as the Inquisitors advance.</button>
                    </div>
                `
            },

            take_hand_ending: {
                content: `
                    <div class="story-text fade-in">
                        <div class="narrator-text">You grasp Fable's hand firmly. His grip is strong, reassuring. Kit nods approvingly as the three of you move as one.</div>
                        <div class="narrator-text">Together you vanish into the labyrinth of alleys. Behind you, the square fills with fire and steel.<br><br>The Captain kneels by the broken pyre, hand outstretched to the lingering violet flame.</div>
                        <div class="dialogue">
                            <div class="character-name">CAPTAIN (grimly):</div>
                            <div class="character-speech">"Mark them. Hunt them. They will not escape the Crown."</div>
                        </div>
                        <div class="narrator-text" style="text-align: center; font-size: 1.3em; color: #ffd700; margin-top: 30px;"><strong>END OF CHAPTER ONE</strong><br><br>Your choices have shaped your path and the bonds you have begun to forge...</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="startChapter2()">Begin Chapter 2</button>
                    </div>
                `,
                effects: { fable: 2, kit: 1 }
            },

            refuse_ending: {
                content: `
                    <div class="story-text fade-in">
                        <div class="narrator-text">You turn to flee alone, but strong hands grab your arms. "Stubborn fool," Kit mutters, dragging you with him. Fable shakes his head, following behind "They always choose the hard way. Is it me? I wonder if it's me..."</div>
                        <div class="narrator-text">Together you vanish into the labyrinth of alleys. Behind you, the square fills with fire and steel.<br><br>The Captain kneels by the broken pyre, hand outstretched to the lingering violet flame.</div>
                        <div class="dialogue">
                            <div class="character-name">CAPTAIN (grimly):</div>
                            <div class="character-speech">"Mark them. Hunt them. They will not escape the Crown."</div>
                        </div>
                        <div class="narrator-text" style="text-align: center; font-size: 1.3em; color: #ffd700; margin-top: 30px;"><strong>END OF CHAPTER ONE</strong><br><br>Your choices have shaped your path and the bonds you have begun to forge...</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="startChapter2()">Begin Chapter 2</button>
                    </div>
                `,
                effects: { kit: -1, fable: -1 }
            },

            hesitate_ending: {
                content: `
                    <div class="story-text fade-in">
                        <div class="narrator-text">Frozen by indecision, you feel Kit's iron grip on your arm. "No time for doubt," he growls, dragging you forward. Fable mutters, "We'll work on the confidence later."</div>
                        <div class="narrator-text">Together you vanish into the labyrinth of alleys. Behind you, the square fills with fire and steel.<br><br>The Captain kneels by the broken pyre, hand outstretched to the lingering violet flame.</div>
                        <div class="dialogue">
                            <div class="character-name">CAPTAIN (grimly):</div>
                            <div class="character-speech">"Mark them. Hunt them. They will not escape the Crown."</div>
                        </div>
                        <div class="narrator-text" style="text-align: center; font-size: 1.3em; color: #ffd700; margin-top: 30px;"><strong>END OF CHAPTER ONE</strong><br><br>Your choices have shaped your path and the bonds you have begun to forge...</div>
                    </div>
                    <div class="next-container">
                        <button class="next-button" onclick="startChapter2()">Begin Chapter 2</button>
                    </div>
                `,
                effects: { kit: -1, fable: -1 }
            }
};