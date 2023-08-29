import {
  CharacterClass,
  CharacterClassAbilities,
} from "@/types/CharacterClass";
import { CharacterClassPageSection } from "./CharacterClassPageSection";
import { CharacterSubclass } from "@/types/CharacterSubclass";

type ProgressionTableCellProps = {
  contents: string[];
  headerCell?: boolean;
  centered?: boolean;
};

const ProgressionTableCell = ({
  contents,
  headerCell = false,
  centered = false,
}: ProgressionTableCellProps) => {
  return (
    <div
      className={`flex border border-white capitalize items-center${
        headerCell ? " p-2" : " p-1"
      }${centered ? " justify-center" : ""}
      `}
    >
      {contents.join(", ")}
    </div>
  );
};

type ProgressionTableRowProps = {
  contents1: string[];
  contents2: string[];
  contents3: string[];
  headerRow?: boolean;
};

const ProgressionTableRow = ({
  contents1,
  contents2,
  contents3,
  headerRow = false,
}: ProgressionTableRowProps) => {
  return (
    <>
      <ProgressionTableCell
        contents={contents1}
        headerCell={headerRow}
        centered={true}
      />
      <ProgressionTableCell
        contents={contents2}
        headerCell={headerRow}
        centered={headerRow}
      />
      <ProgressionTableCell
        contents={contents3}
        headerCell={headerRow}
        centered={headerRow}
      />
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
        <div className="grid" style={{ gridTemplateColumns: "auto 5fr 5fr" }}>
          <ProgressionTableRow
            contents1={["Level"]}
            contents2={[characterClass.name]}
            contents3={[selectedSubclass.name]}
            headerRow={true}
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
