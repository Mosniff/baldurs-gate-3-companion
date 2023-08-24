import type {
  CharacterClass,
  CharacterClassName,
} from "../types/CharacterClass";

export const barbarian: CharacterClass = { name: "barbarian" };

export const characterClasses: { [key in CharacterClassName]: CharacterClass } =
  {
    barbarian: { name: "barbarian" },
    bard: { name: "bard" },
    cleric: { name: "cleric" },
    druid: { name: "druid" },
    fighter: { name: "fighter" },
    monk: { name: "monk" },
    paladin: { name: "paladin" },
    ranger: { name: "ranger" },
    rogue: { name: "rogue" },
    sorcerer: { name: "sorcerer" },
    warlock: { name: "warlock" },
    wizard: { name: "wizard" },
  };
