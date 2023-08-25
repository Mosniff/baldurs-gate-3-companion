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

export type CharacterClassAbilities = {
  level1: string[];
  level2: string[];
  level3: string[];
  level4: string[];
  level5: string[];
  level6: string[];
  level7: string[];
  level8: string[];
  level9: string[];
  level10: string[];
  level11: string[];
  level12: string[];
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
