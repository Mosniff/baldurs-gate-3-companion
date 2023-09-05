"use client";
import { CharacterClass } from "@/types/CharacterClass";
import { ClassCard } from "@/components/ClassCard";
import { CharacterClassControls } from "./CharacterClassControls";
import { CharacterClassProficiencies } from "./CharacterClassProficiencies";
import { CharacterClassProgressionTable } from "./CharacterClassProgressionTable";
import { CharacterClassHitpoints } from "./CharacterClassHitpoints";
import { useState } from "react";
import { CharacterClassSkills } from "./CharacterClassSkills";

type Props = { characterClass: CharacterClass };

type levelRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export const CharacterClassPage = ({ characterClass }: Props) => {
  const [currentLevel, setCurrentLevel] = useState<levelRange>(1);
  const [selectedSubclassIndex, setSelectedSubclassIndex] = useState(0);
  const [selectedSubclass, setSelectedSubclass] = useState(
    characterClass.subclasses[selectedSubclassIndex]
  );
  const [STR, setSTR] = useState(10);
  const [DEX, setDEX] = useState(10);
  const [CON, setCON] = useState(10);
  const [INT, setINT] = useState(10);
  const [WIS, setWIS] = useState(10);
  const [CHA, setCHA] = useState(10);

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
        <ClassCard characterClassName={characterClass.name} titleCard={true} />
        <CharacterClassControls
          currentLevel={currentLevel}
          incrementLevel={incrementLevel}
          decrementLevel={decrementLevel}
          selectedSubclass={selectedSubclass}
          incrementSubclass={incrementSubclass}
          decrementSubclass={decrementSubclass}
          stats={{
            STR: { value: STR, setter: setSTR },
            DEX: { value: DEX, setter: setDEX },
            CON: { value: CON, setter: setCON },
            INT: { value: INT, setter: setINT },
            WIS: { value: WIS, setter: setWIS },
            CHA: { value: CHA, setter: setCHA },
          }}
        />
      </div>
      <div
        className="grid gap-8"
        style={{ gridTemplateColumns: "2fr 1fr 1fr" }}
      >
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
        <CharacterClassSkills
          skillpoints={characterClass.numberOfSkills}
          availableSkills={characterClass.availableSkills}
        />
        <CharacterClassHitpoints
          firstLevel={characterClass.hitpointsAtStart}
          perLevel={characterClass.hitpointsPerLevel}
        />
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
