import { bardAbilities, commonAbilities } from "@/data/abilities";
import { CharacterSubclass } from "@/types/CharacterSubclass";

export const collegeOfLore: CharacterSubclass = {
  coreClass: "bard",
  name: "college of lore",
  abilities: {
    level1: [],
    level2: [],
    level3: [
      bardAbilities["gain proficiency in 3 skills"],
      bardAbilities["cutting words"],
    ],
    level4: [],
    level5: [],
    level6: [bardAbilities["magical secrets"]],
    level7: [],
    level8: [],
    level9: [],
    level10: [],
    level11: [],
    level12: [],
  },
  proficiencies: {
    weapon: [],
    armour: [],
    savingThrow: [],
  },
};
