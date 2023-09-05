import { CharacterClass } from "@/types/CharacterClass";
import { barbarianSubclasses } from "../subClasses";
import { commonAbilities, barbarianAbilities } from "@/data/abilities/";

export const barbarian: CharacterClass = {
  name: "barbarian",
  abilities: {
    level1: [
      barbarianAbilities["unarmored defence"],
      barbarianAbilities["rage"],
    ],
    level2: [
      barbarianAbilities["danger sense"],
      barbarianAbilities["reckless attack"],
    ],
    level3: [barbarianAbilities["additional rage charge"]],
    level4: [commonAbilities["feat"]],
    level5: [
      commonAbilities["extra attack"],
      barbarianAbilities["fast movement"],
    ],
    level6: [barbarianAbilities["additional rage charge"]],
    level7: [barbarianAbilities["feral instinct"]],
    level8: [commonAbilities["feat"]],
    level9: [barbarianAbilities["brutal critical"]],
    level10: [],
    level11: [barbarianAbilities["relentless rage"]],
    level12: [
      barbarianAbilities["additional rage charge"],
      commonAbilities["feat"],
    ],
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
