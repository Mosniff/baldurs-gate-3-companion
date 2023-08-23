import { CharacterClass } from "@/types/CharacterClass";
import { Card } from "./Card";

type Props = {
  characterClass: CharacterClass;
};

const ClassCard = ({ characterClass }: Props) => {
  return (
    <Card
      title={characterClass}
      imageAlt={characterClass}
      imagePath={`/class-emblems/${characterClass}.webp`}
    />
  );
};

export { ClassCard };
