import { Ability } from "@/types/CharacterClass";

export const commonAbilities: { [key: string]: Ability } = {
  feat: {
    name: "feat",
    information: ["Gain a feat."],
  },
  "extra attack": {
    name: "extra attack",
    information: [
      "Can make an additional free attack after making an unarmed or weapon attack. If you gain the Extra Attack feature from more than one class, they don't add together. ",
    ],
    imagePath: "/ability-icons/extra_attack.webp",
  },
};

export const barbarianAbilities: { [key: string]: Ability } = {
  "unarmored defence": {
    name: "unarmored defence",
    information: [
      "While not wearing armour, you add your Constitution Modifier (to your Dexterity) to your Armour Class.",
      "You can use a shield and still gain this benefit.",
      "Wearing Heavy Amour impedes your Rage.",
    ],
    imagePath: "/ability-icons/unarmored_defence.webp",
  },
  rage: {
    name: "rage",
    information: [
      "Gain Resistance to Bludgeoning, Slashing and Piercing damage, and Advantage on Strength Checks and Saving Throws.",
      "Gain a damage bonus to your attacks: +2 between level 2-8 and +3 between level 9-12.",
      "Rage ends early if you don't attack an enemy or take damage each turn.",
      "You can't cast or concentrate on spells while raging.",
      "Cannot wear Heavy Armor.",
    ],
    activeProperties: {
      actionType: "bonus action",
      cost: { resource: "rage charge", value: 1 },
    },
    imagePath: "/ability-icons/rage.webp",
  },
  "danger sense": {
    name: "danger sense",
    information: [
      "Gain advantage on Dexterity Saving Throws against traps, spells, and surfaces",
      "To gain this benefit, you can't be Blinded or Incapacitated.",
    ],
    imagePath: "/ability-icons/danger_sense.png",
  },
  "reckless attack": {
    name: "reckless attack",
    information: [
      "Until your next turn, you have Advantage on all Attack Rolls, but enemies also have Advantage on Attack Rolls against you.",
      "While Reckless Attack must be made with a melee attack, all attacks for the turn gain Advantage, including ranged attacks.",
    ],
    activeProperties: {
      actionType: "action",
      targetingType: "attack roll",
      duration: 1,
      range: "1.5m",
    },
    imagePath: "/ability-icons/reckless_attack.webp",
  },
  "additional rage charge": {
    name: "additional rage charge",
    information: ["Gain an additional rage charge."],
    imagePath: "/ability-icons/rage.webp",
  },
  "fast movement": {
    name: "fast movement",
    information: [
      "Your Movement Speed increases by 1.5m while not wearing Heavy Armour.",
    ],
    imagePath: "/ability-icons/fast_movement.webp",
  },
  "feral instinct": {
    name: "feral instinct",
    information: ["You gain a +3 bonus to Initiative and can't be surprised."],
    imagePath: "/ability-icons/feral_instinct.png",
  },
  "brutal critical": {
    name: "brutal critical",
    information: [
      "When you land a Critical Hit, you roll an extra damage die as well as the normal additional critical dice.",
    ],
    imagePath: "/ability-icons/brutal_critical.png",
  },
  "relentless rage": {
    name: "relentless rage",
    information: [
      "Once per Short Rest, if you drop to 0 hit point while Enraged, you regain 1 hit points instead of being Downed.",
    ],
    imagePath: "/ability-icons/relentless_rage.png",
  },
  frenzy: {
    name: "frenzy",
    information: [
      "Your Rage turns into a frenzy",
      "You gain the use of Frenzied Strike and Enraged Throw.",
      "You can use an Improvised Melee Weapon as a bonus action.",
    ],
    imagePath: "/ability-icons/frenzy.webp",
  },
  "frenzied strike": {
    name: "frenzied strike",
    information: [
      "Make a melee attack with your weapon. Will cause a stack of Frenzied Strain on the Barbarian.",
      "Using Frenzied Strike adds a stack of Frenzied Strain. The barbarian takes a -1 penalty on Attack Rolls for every stack.",
      "All stacks are removed when Frenzy ends.",
    ],
    imagePath: "/ability-icons/frenzied_strike.webp",
    activeProperties: {
      actionType: "bonus action",
      range: "1.5m",
      recharge: "once per turn",
    },
  },
  "enraged throw": {
    name: "enraged throw",
    information: [
      "Pick up an item or creature and throws it at a target, dealing Bludgeoning damage and knocking it Prone.",
      "Your Strength affects how much weight you can throw. Heavier items deal more damage.",
      "The damage of Thrown Weapons is the same as the Weapon's melee damage.",
      "Using Enraged Throw adds a stack of Frenzied Strain. The barbarian takes a -1 penalty on Attack Rolls for every stack.",
      "All stacks are removed when Frenzy ends.",
    ],
    imagePath: "/ability-icons/enraged_throw.webp",
    activeProperties: {
      actionType: "bonus action",
      targetingType: "attack roll",
      range: "1m",
      recharge: "once per turn",
      duration: 1,
    },
  },
  "mindless rage": {
    name: "mindless rage",
    information: [
      "While Frenzied, you cant be Charmed or Frightened, and Calm Emotions no longer ends your rage.",
    ],
    imagePath: "/ability-icons/mindless_rage.png",
  },
  "intimidating presence": {
    name: "intimidating presence",
    information: [
      "Menace an enemy and instill a terrible Fear within them.",
      "If the target resists this effect, it can't be targeted again until it Long Rests",
    ],
    imagePath: "/ability-icons/intimidating_presence.png",
    activeProperties: {
      actionType: "action",
      range: "9m",
      duration: 2,
      targetingType: "wisdom save",
    },
  },
  "speak with animals": {
    name: "speak with animals",
    information: ["Learn Speak with Animals"],
    imagePath: "/ability-icons/speak_with_animals.png",
  },
  "bestial heart": {
    name: "bestial heart",
    information: [
      "Bear Heart: You obtain  Rage: Bear Heart and Unrelenting Ferocity",
      "Eagle Heart: You obtain Rage: Eagle Heart and Diving Strike ",
      "Elk Heart: You obtain Rage: Elk Heart and  Primal Stampede",
      "Tiger Heart: You obtain Rage: Tiger Heart and Tiger's Bloodlust",
      "Wolf Heart: You obtain Rage: Wolf Heart and Inciting Howl",
    ],
    imagePath: "/ability-icons/bestial_heart.png",
  },
  "animal aspect": {
    name: "animal aspect",
    information: [
      "Choose an Animal Aspect:",
      "Bear: Carrying capacity is doubled, Advantage on Strength Checks.",
      "Chimpanzee: Resistance to Falling damage, throwing camp supplies Blinds targets.",
      "Crocodile: Movement on water-based surfaces increased by 3m. On slippery surfaces, gain Advantage on Saving Throws against being knocked Prone.",
      "Eagle: Darkvision up to 12m, Advantage on Perception Checks.",
      "Elk: Movement speed increase by 1.5m for yourself and nearby allies.",
      "Honey Badger: 50% chance for a free Rage, if Poisoned, Frightened, or Charmed at the start of your turn.",
      "Stallion: Dashing grants you temporary hit points equal to twice your level.",
      "Tiger: Double Strength Modifier on Attack Rolls against Bleeding or Poisoned targets, gain proficiency in Survival.",
      "Wolf: Gain Proficiency in Stealth, You and nearby allies add your Dexterity modifier as a bonus to Stealth Checks.",
      "Wolverine: Attacks on Bleeding or Poisoned targets Maim them (No move, Disadvantage DEX Saves) it for 1 turn.",
    ],
  },
  "land's stride: difficult terrain": {
    name: "land's stride: difficult terrain",
    information: [
      "You have become an expert at moving through the wilderness. Difficult Terrain no longer slows you down",
    ],
    imagePath: "/ability-icons/lands_string.webp",
  },
  "rage: wild magic": {
    name: "rage: wild magic",
    information: [
      "Enter a Rage that releases all the magic rolling inside of you, causing a random magical effect.",
    ],
    imagePath: "/ability-icons/rage_wild_magic.png",
  },
  "magic awareness": {
    name: "magic awareness",
    information: [
      "Anyone within range adds their Proficiency Bonus to Saving Throws against spells.",
    ],
    imagePath: "/ability-icons/magic_awareness.webp",
  },
  "bolstering magic: boon": {
    name: "bolstering magic: boon",
    information: [
      "You or an ally receive a +1d4 bonus to Attack Rolls and Ability Checks.",
    ],
    imagePath: "/ability-icons/bolstering_magic_boon.png",
  },
  "bolstering magic: level 1 spell slot": {
    name: "bolstering magic: level 1 spell slot",
    information: ["You or an ally recover a Level 1 spell slot"],
    imagePath: "/ability-icons/bolstering_magic_1.webp",
  },
  "bolstering magic: level 2 spell slot": {
    name: "bolstering magic: level 2 spell slot",
    information: ["You or an ally recover a Level 2 spell slot"],
    imagePath: "/ability-icons/bolstering_magic_2.webp",
  },
  "bolstering magic: level 3 spell slot": {
    name: "bolstering magic: level 3 spell slot",
    information: ["You or an ally recover a Level 3 spell slot"],
    imagePath: "/ability-icons/bolstering_magic_3.webp",
  },
  "unstable backlash": {
    name: "unstable backlash",
    information: [
      "While enraged, when you take damage or fail a saving throw, you trigger another Wild Magic effect that replaces the current one.",
    ],
  },
};
