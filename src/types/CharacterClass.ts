import { CharacterSubclass } from "./CharacterSubclass";

export type BaseClassType = {
  abilities: CharacterClassAbilities;
  proficiencies: {
    weapon: weaponProficiency[];
    armour: armourProficiency[];
    savingThrow: savingThrowProficiency[];
  };
};

export interface CharacterClass extends BaseClassType {
  name: CharacterClassName;
  subclasses: CharacterSubclass[];
  hitpointsAtStart: number;
  hitpointsPerLevel: number;
  numberOfSkills: number;
  availableSkills: skill[];
}

export type CharacterClassName =
  | "barbarian"
  | "bard"
  | "cleric"
  | "druid"
  | "fighter"
  | "monk"
  | "paladin"
  | "ranger"
  | "rogue"
  | "sorcerer"
  | "warlock"
  | "wizard";

// export type AbilityCost = {
//   resource: "rage charge";
//   value: number;
// };

// export type Ability = {
//   name: string;
//   information: string[];
//   imagePath?: string;
//   type?: string;
//   activeProperties?: {
//     actionType: "bonus action" | "action" | "reaction";
//     cost?: AbilityCost;
//     range?: string;
//     duration?: number;
//     targetingType?: "attack roll" | "wisdom save";
//     recharge?: "once per turn";
//   };
// };

export type Ability = {
  name: string;
  url: string;
};

export type CharacterClassAbilities = {
  level1: Ability[];
  level2: Ability[];
  level3: Ability[];
  level4: Ability[];
  level5: Ability[];
  level6: Ability[];
  level7: Ability[];
  level8: Ability[];
  level9: Ability[];
  level10: Ability[];
  level11: Ability[];
  level12: Ability[];
};

type weaponProficiency = "simple" | "martial";

type armourProficiency = "light" | "medium" | "heavy" | "shield";

type savingThrowProficiency =
  | "strength"
  | "dexterity"
  | "constitution"
  | "intelligence"
  | "wisdom"
  | "charisma";

type skill =
  | "athletics"
  | "acrobatics"
  | "sleight of hand"
  | "stealth"
  | "arcana"
  | "history"
  | "investigation"
  | "nature"
  | "religion"
  | "animal handling"
  | "insight"
  | "medicine"
  | "perception"
  | "survival"
  | "deception"
  | "intimidation"
  | "performance"
  | "persuasion";
