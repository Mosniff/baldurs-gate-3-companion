import { CharacterClassName } from "@/types/CharacterClass";
import { Card } from "./Card";

type Props = {
  characterClassName: CharacterClassName;
};

export const ClassCard = ({ characterClassName }: Props) => {
  return (
    <Card
      title={characterClassName}
      imageAlt={characterClassName}
      imagePath={`/class-emblems/${characterClassName}.webp`}
      href={`/character-classes/${characterClassName}`}
    />
  );
};
