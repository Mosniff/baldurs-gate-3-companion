"use client";
import { PageWrapper } from "@/components/PageWrapper";
import { useParams } from "next/navigation";
import { characterClasses } from "@/data/characterClasses";
import { CharacterClassName } from "@/types/CharacterClass";
import { CharacterClassPage } from "@/components/pages/CharacterClassPage";

export default function Home() {
  const params = useParams();
  const characterClass =
    characterClasses[`${params.characterClassName as CharacterClassName}`];

  console.log(characterClass);

  return (
    <PageWrapper>
      <CharacterClassPage characterClass={characterClass} />
    </PageWrapper>
  );
}
