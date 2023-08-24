import { CharacterClass } from "@/types/CharacterClass";

type Props = { characterClass: CharacterClass };

export const CharacterClassPage = ({ characterClass }: Props) => {
  return <div>{characterClass.name}</div>;
};
