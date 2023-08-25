import React from "react";
import { CharacterClassPageSection } from "./CharacterClassPageSection";

type Props = {
  firstLevel: number;
  perLevel: number;
};

export const CharacterClassHitpoints = ({ firstLevel, perLevel }: Props) => {
  return (
    <CharacterClassPageSection>
      <h2>Hitpoints</h2>
      <div>At 1st level: {`${firstLevel} + Con modifier`}</div>
      <div>Per level: {`${perLevel} + Con modifier`}</div>
    </CharacterClassPageSection>
  );
};
