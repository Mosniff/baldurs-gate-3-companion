import type {
  BaseClassType,
  CharacterClassAbilities,
  CharacterClassName,
} from "./CharacterClass";

export interface CharacterSubclass extends BaseClassType {
  name: CharacterSubclassName;
  abilities: CharacterClassAbilities;
  coreClass: CharacterClassName;
}

export type CharacterSubclassName =
  | "berserker"
  | "wildheart"
  | "wild magic"
  | "college of swords"
  | "college of valour"
  | "college of lore";
