import { CharacterClass } from "@/types/CharacterClass";
import { barbarianSubclasses } from "../subClasses";

export const barbarian: CharacterClass = {
  name: "barbarian",
  abilities: {
    level1: ["unarmored defence", "rage"],
    level2: ["danger sense", "reckless attack"],
    level3: ["additional rage charge", "pick subclass"],
    level4: ["feat"],
    level5: ["extra attack", "fast movement"],
    level6: ["additional rage charge"],
    level7: ["feral instinct"],
    level8: ["feat"],
    level9: ["brutal critical"],
    level10: [],
    level11: ["relentless rage"],
    level12: ["additional rage charge", "feat"],
  },
  proficiencies: {
    weapon: ["simple", "martial"],
    armour: ["light", "medium", "shield"],
    savingThrow: ["strength", "constitution"],
  },
  subclasses: barbarianSubclasses,
  hitpointsAtStart: 12,
  hitpointsPerLevel: 7,
  numberOfSkills: 2,
  availableSkills: [
    "animal handling",
    "athletics",
    "intimidation",
    "nature",
    "perception",
    "survival",
  ],
};
