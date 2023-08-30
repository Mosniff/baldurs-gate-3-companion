import { CharacterSubclass } from "@/types/CharacterSubclass";
import { barbarianAbilities } from "@/data/abilities";

export const wildheart: CharacterSubclass = {
  coreClass: "barbarian",
  name: "wildheart",
  abilities: {
    level1: [],
    level2: [],
    level3: [
      barbarianAbilities["speak with animals"],
      barbarianAbilities["bestial heart"],
    ],
    level4: [],
    level5: [],
    level6: [barbarianAbilities["animal aspect"]],
    level7: [],
    level8: [barbarianAbilities["land's stride: difficult terrain"]],
    level9: [],
    level10: [barbarianAbilities["animal aspect"]],
    level11: [],
    level12: [],
  },
  proficiencies: {
    weapon: [],
    armour: [],
    savingThrow: [],
  },
};
