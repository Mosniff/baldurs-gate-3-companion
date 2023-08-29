"use client";
import { CharacterClass } from "@/types/CharacterClass";
import { ClassCard } from "@/components/ClassCard";
import { CharacterClassControls } from "./CharacterClassControls";
import { CharacterClassProficiencies } from "./CharacterClassProficiencies";
import { CharacterClassProgressionTable } from "./CharacterClassProgressionTable";
import { CharacterClassHitpoints } from "./CharacterClassHitpoints";
import { useState } from "react";

type Props = { characterClass: CharacterClass };

type levelRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export const CharacterClassPage = ({ characterClass }: Props) => {
  const [currentLevel, setCurrentLevel] = useState<levelRange>(1);
  const [selectedSubclassIndex, setSelectedSubclassIndex] = useState(0);
  const [selectedSubclass, setSelectedSubclass] = useState(
    characterClass.subclasses[selectedSubclassIndex]
  );

  const incrementLevel = () => {
    currentLevel < 12
      ? setCurrentLevel((currentLevel + 1) as levelRange)
      : null;
  };

  const decrementLevel = () => {
    currentLevel > 1 ? setCurrentLevel((currentLevel - 1) as levelRange) : null;
  };

  const incrementSubclass = () => {
    console.log(selectedSubclassIndex, characterClass.subclasses.length);
    if (selectedSubclassIndex < characterClass.subclasses.length - 1) {
      setSelectedSubclass(characterClass.subclasses[selectedSubclassIndex + 1]);
      setSelectedSubclassIndex(selectedSubclassIndex + 1);
    }
  };

  const decrementSubclass = () => {
    if (selectedSubclassIndex > 0) {
      setSelectedSubclass(characterClass.subclasses[selectedSubclassIndex - 1]);
      setSelectedSubclassIndex(selectedSubclassIndex - 1);
    }
  };

  return (
    <div className="bg-companion-gold p-4 rounded flex flex-col gap-4">
      <div className="grid gap-8" style={{ gridTemplateColumns: "auto 1fr" }}>
        {/* <div className="w-72"> */}
        <ClassCard characterClassName={characterClass.name} titleCard={true} />
        {/* </div> */}
        <CharacterClassControls
          currentLevel={currentLevel}
          incrementLevel={incrementLevel}
          decrementLevel={decrementLevel}
          selectedSubclass={selectedSubclass}
          incrementSubclass={incrementSubclass}
          decrementSubclass={decrementSubclass}
        />
      </div>
      <div className="flex gap-4">
        <div className="w-3/4">
          <CharacterClassProficiencies
            weaponProficiencies={[
              ...characterClass.proficiencies.weapon,
              ...selectedSubclass.proficiencies.weapon,
            ]}
            armourProficiencies={[
              ...characterClass.proficiencies.armour,
              ...selectedSubclass.proficiencies.armour,
            ]}
            savingThrowProficiencies={[
              ...characterClass.proficiencies.savingThrow,
              ...selectedSubclass.proficiencies.savingThrow,
            ]}
          />
        </div>
        <div className="w-1/4">
          <CharacterClassHitpoints
            firstLevel={characterClass.hitpointsAtStart}
            perLevel={characterClass.hitpointsPerLevel}
          />
        </div>
      </div>
      <div>
        <CharacterClassProgressionTable
          characterClass={characterClass}
          selectedSubclass={selectedSubclass}
        />
      </div>
    </div>
  );
};
