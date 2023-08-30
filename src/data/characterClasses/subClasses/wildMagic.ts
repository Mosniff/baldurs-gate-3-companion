import { CharacterSubclass } from "@/types/CharacterSubclass";
import { barbarianAbilities } from "@/data/abilities";

export const wildMagic: CharacterSubclass = {
  coreClass: "barbarian",
  name: "wild magic",
  abilities: {
    level1: [],
    level2: [],
    level3: [
      barbarianAbilities["rage: wild magic"],
      barbarianAbilities["magic awareness"],
    ],
    level4: [],
    level5: [],
    level6: [
      barbarianAbilities["bolstering magic: boon"],
      barbarianAbilities["bolstering magic: level 1 spell slot"],
      barbarianAbilities["bolstering magic: level 2 spell slot"],
    ],
    level7: [],
    level8: [],
    level9: [barbarianAbilities["bolstering magic: level 3 spell slot"]],
    level10: [barbarianAbilities["unstable backlash"]],
    level11: [],
    level12: [],
  },
  proficiencies: {
    weapon: [],
    armour: [],
    savingThrow: [],
  },
};
