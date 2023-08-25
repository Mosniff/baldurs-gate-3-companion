import {
  CharacterClass,
  CharacterClassAbilities,
} from "@/types/CharacterClass";
import { characterClasses } from "@/data/characterClasses/characterClasses";
import { CharacterClassPageSection } from "./CharacterClassPageSection";
import { CharacterClassName } from "@/types/CharacterClass";
import { CharacterSubclass } from "@/types/CharacterSubclass";

type ProgressionTableCellProps = {
  contents: string[];
};

const ProgressionTableCell = ({ contents }: ProgressionTableCellProps) => {
  return <div className="border border-white">{contents}</div>;
};

type ProgressionTableRowProps = {
  contents1: string[];
  contents2: string[];
  contents3: string[];
};

const ProgressionTableRow = ({
  contents1,
  contents2,
  contents3,
}: ProgressionTableRowProps) => {
  return (
    <>
      <ProgressionTableCell contents={contents1} />
      <ProgressionTableCell contents={contents2} />
      <ProgressionTableCell contents={contents3} />
    </>
  );
};

type Props = {
  characterClass: CharacterClass;
  selectedSubclass: CharacterSubclass;
};

export const CharacterClassProgressionTable = ({
  characterClass,
  selectedSubclass,
}: Props) => {
  return (
    <CharacterClassPageSection>
      <div className="flex flex-col gap-4 text-2xl justify-center">
        <h2>Progression</h2>
        <div className="grid grid-cols-3">
          <ProgressionTableRow
            contents1={["Level"]}
            contents2={[characterClass.name]}
            contents3={[selectedSubclass.name]}
          />
          {Object.keys(characterClass.abilities).map((level, i) => (
            <ProgressionTableRow
              contents1={[(i + 1).toString()]}
              contents2={
                characterClass.abilities[
                  `${level}` as keyof CharacterClassAbilities
                ]
              }
              contents3={
                selectedSubclass.abilities[
                  `${level}` as keyof CharacterClassAbilities
                ]
              }
            />
          ))}

          {/* <ProgressionTableRow
            contents1="1"
            contents2="ability"
            contents3="other ability"
          />
          <ProgressionTableRow
            contents1="2"
            contents2="ability"
            contents3="other ability"
          />
          <ProgressionTableRow
            contents1="3"
            contents2="ability"
            contents3="other ability"
          />
          <ProgressionTableRow
            contents1="4"
            contents2="ability"
            contents3="other ability"
          /> */}
        </div>
      </div>
    </CharacterClassPageSection>
  );
};
