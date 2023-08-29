import { CharacterClassName } from "@/types/CharacterClass";
import { Card } from "./Card";
import { TitleCard } from "./pages/CharacterClassPage/TitleCard";

type Props = {
  characterClassName: CharacterClassName;
  titleCard?: boolean;
};

export const ClassCard = ({ characterClassName, titleCard = false }: Props) => {
  return (
    <>
      {!titleCard && (
        <Card
          title={characterClassName}
          imageAlt={characterClassName}
          imagePath={`/class-emblems/${characterClassName}.webp`}
          href={`/character-classes/${characterClassName}`}
        />
      )}
      {titleCard && (
        <TitleCard
          title={characterClassName}
          imageAlt={characterClassName}
          imagePath={`/class-emblems/${characterClassName}.webp`}
        />
      )}
    </>
  );
};
