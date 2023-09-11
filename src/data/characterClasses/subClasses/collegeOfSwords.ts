import { bardAbilities, commonAbilities } from "@/data/abilities";
import { CharacterSubclass } from "@/types/CharacterSubclass";

export const collegeOfSwords: CharacterSubclass = {
  coreClass: "bard",
  name: "college of swords",
  abilities: {
    level1: [],
    level2: [],
    level3: [bardAbilities["blade flourish"], bardAbilities["fighting style"]],
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
    weapon: ["scimitars"],
    armour: ["medium"],
    savingThrow: [],
  },
};
