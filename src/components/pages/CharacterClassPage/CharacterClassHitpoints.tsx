import React from "react";
import { CharacterClassPageSection } from "./CharacterClassPageSection";

type Props = {
  firstLevel: number;
  perLevel: number;
};

export const CharacterClassHitpoints = ({ firstLevel, perLevel }: Props) => {
  return (
    <CharacterClassPageSection className="h-full flex flex-col gap-4 text-2xl">
      <h2>Hitpoints</h2>
      <div className="text-xl flex flex-col gap-2">
        <div>At 1st level: {`${firstLevel} + Con modifier`}</div>
        <div>Per level: {`${perLevel} + Con modifier`}</div>
      </div>
    </CharacterClassPageSection>
  );
};
