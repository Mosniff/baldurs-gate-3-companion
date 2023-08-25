import { CharacterSubclass } from "@/types/CharacterSubclass";
import { barbarian } from "../coreClasses/barbarian";

export const wildMagic: CharacterSubclass = {
  coreClass: "barbarian",
  name: "wild magic",
  abilities: {
    level1: [],
    level2: [],
    level3: ["rage: wild magic", "magic awareness"],
    level4: [],
    level5: [],
    level6: [
      "bolstering magic: boon",
      "bolstering magic: level 1 spell slot",
      "bolstering magic: level 2 spell slot",
    ],
    level7: [],
    level8: [],
    level9: ["bolstering magic: level 3 spell slot"],
    level10: ["unstable backlash"],
    level11: [],
    level12: [],
  },
  proficiencies: {
    weapon: [],
    armour: [],
    savingThrow: [],
  },
};
