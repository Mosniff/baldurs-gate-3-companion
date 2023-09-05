import {
  Ability,
  CharacterClass,
  CharacterClassAbilities,
} from "@/types/CharacterClass";
import { CharacterClassPageSection } from "./CharacterClassPageSection";
import { CharacterSubclass } from "@/types/CharacterSubclass";
import {
  ProgressionTableCell,
  ProgressionTableHeaderCell,
} from "@/components/pages/CharacterClassPage/CharacterClassProgressionTableCell";

type ProgressionTableRowProps = {
  contents1: string | Ability[];
  contents2: string | Ability[];
  contents3: string | Ability[];
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
      {!headerRow && (
        <>
          <ProgressionTableHeaderCell contents={contents1 as string} />
          <ProgressionTableCell contents={contents2 as Ability[]} />
          <ProgressionTableCell contents={contents3 as Ability[]} />
        </>
      )}
      {headerRow && (
        <>
          <ProgressionTableHeaderCell contents={contents1 as string} />
          <ProgressionTableHeaderCell contents={contents2 as string} />
          <ProgressionTableHeaderCell contents={contents3 as string} />
        </>
      )}
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
            contents1={"Level"}
            contents2={characterClass.name}
            contents3={selectedSubclass.name}
            headerRow={true}
          />
          {Object.keys(characterClass.abilities).map((level, i) => (
            <ProgressionTableRow
              key={level}
              contents1={(i + 1).toString()}
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
        </div>
      </div>
    </CharacterClassPageSection>
  );
};
