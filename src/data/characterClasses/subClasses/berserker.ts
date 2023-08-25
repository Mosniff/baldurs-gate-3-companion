import { CharacterSubclass } from "@/types/CharacterSubclass";
import { barbarian } from "../coreClasses/barbarian";

export const berserker: CharacterSubclass = {
  coreClass: "barbarian",
  name: "berserker",
  abilities: {
    level1: [],
    level2: [],
    level3: ["frenzy", "frenzied strike", "enraged throw"],
    level4: [],
    level5: [],
    level6: ["mindless rage"],
    level7: [],
    level8: [],
    level9: [],
    level10: ["intimidating presence"],
    level11: [],
    level12: [],
  },
  proficiencies: {
    weapon: [],
    armour: [],
    savingThrow: [],
  },
};
