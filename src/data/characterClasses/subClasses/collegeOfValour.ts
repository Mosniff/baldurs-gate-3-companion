import { bardAbilities, commonAbilities } from "@/data/abilities";
import { CharacterSubclass } from "@/types/CharacterSubclass";

export const collegeOfValour: CharacterSubclass = {
  coreClass: "bard",
  name: "college of valour",
  abilities: {
    level1: [],
    level2: [],
    level3: [bardAbilities["combat inspiration"]],
    level4: [],
    level5: [],
    level6: [commonAbilities["extra attack"]],
    level7: [],
    level8: [],
    level9: [],
    level10: [],
    level11: [],
    level12: [],
  },
  proficiencies: {
    weapon: ["martial"],
    armour: ["medium", "shield"],
    savingThrow: [],
  },
};
