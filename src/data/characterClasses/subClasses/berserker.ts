import { barbarianAbilities } from "@/data/abilities";
import { CharacterSubclass } from "@/types/CharacterSubclass";

export const berserker: CharacterSubclass = {
  coreClass: "barbarian",
  name: "berserker",
  abilities: {
    level1: [],
    level2: [],
    level3: [
      barbarianAbilities["frenzy"],
      barbarianAbilities["frenzied strike"],
      barbarianAbilities["enraged throw"],
    ],
    level4: [],
    level5: [],
    level6: [barbarianAbilities["mindless rage"]],
    level7: [],
    level8: [],
    level9: [],
    level10: [barbarianAbilities["intimidating presence"]],
    level11: [],
    level12: [],
  },
  proficiencies: {
    weapon: [],
    armour: [],
    savingThrow: [],
  },
};
