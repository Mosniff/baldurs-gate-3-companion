import { CharacterClass } from "@/types/CharacterClass";
import { bardSubclasses } from "../subClasses";
import { commonAbilities, bardAbilities } from "@/data/abilities/";

export const bard: CharacterClass = {
  name: "bard",
  abilities: {
    level1: [
      bardAbilities["spellcasting"],
      bardAbilities["bardic inspiration (d6)"],
    ],
    level2: [
      bardAbilities["song of rest"],
      bardAbilities["jack of all trades"],
    ],
    level3: [bardAbilities["expertise"]],
    level4: [commonAbilities["feat"]],
    level5: [
      bardAbilities["improved bardic inspiration (d8)"],
      bardAbilities["font of inspiration"],
    ],
    level6: [bardAbilities["countercharm"]],
    level7: [],
    level8: [commonAbilities["feat"]],
    level9: [],
    level10: [
      bardAbilities["improved bardic inspiration (d10)"],
      bardAbilities["expertise"],
      bardAbilities["magical secrets"],
    ],
    level11: [],
    level12: [commonAbilities["feat"]],
  },
  proficiencies: {
    weapon: [
      "simple",
      "hand crossbows",
      "rapiers",
      "longswords",
      "shortswords",
    ],
    armour: ["light"],
    savingThrow: ["dexterity", "charisma"],
  },
  subclasses: bardSubclasses,
  hitpointsAtStart: 8,
  hitpointsPerLevel: 5,
  numberOfSkills: 3,
  availableSkills: [
    "acrobatics",
    "animal handling",
    "arcana",
    "athletics",
    "deception",
    "history",
    "insight",
    "intimidation",
    "investigation",
    "medicine",
    "nature",
    "perception",
    "performance",
    "persuasion",
    "religion",
    "sleight of hand",
    "stealth",
    "survival",
  ],
};
