import React from "react";
import { CharacterClassPageSection } from "./CharacterClassPageSection";

type Props = {
  availableSkills: string[];
  skillpoints: number;
};

export const CharacterClassSkills = ({
  availableSkills,
  skillpoints,
}: Props) => {
  return (
    <CharacterClassPageSection>
      <div className="flex flex-col gap-4 text-2xl justify-center">
        <h2>Skills - Pick {skillpoints}:</h2>
        <div className="flex justify-between text-xl capitalize">
          <ul className="text-lg list-disc px-8 py-2">
            {availableSkills.map((skill, i) => (
              <li>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </CharacterClassPageSection>
  );
};
