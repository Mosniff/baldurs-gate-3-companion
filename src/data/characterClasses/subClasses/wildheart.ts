import { CharacterSubclass } from "@/types/CharacterSubclass";
import { barbarian } from "../coreClasses/barbarian";

export const wildheart: CharacterSubclass = {
  coreClass: "barbarian",
  name: "wildheart",
  abilities: {
    level1: [],
    level2: [],
    level3: ["speak with animals", "bestial heart"],
    level4: [],
    level5: [],
    level6: ["animal aspect"],
    level7: [],
    level8: ["land's stride: difficult terrain"],
    level9: [],
    level10: ["animal aspect"],
    level11: [],
    level12: [],
  },
  proficiencies: {
    weapon: [],
    armour: [],
    savingThrow: [],
  },
};
