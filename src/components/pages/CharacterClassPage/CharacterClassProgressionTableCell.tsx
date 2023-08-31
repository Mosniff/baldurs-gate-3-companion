"use client";
import { Ability } from "@/types/CharacterClass";

type CellItemProps = {
  ability: Ability;
};

const CellItem = ({ ability }: CellItemProps) => {
  return (
    <a target="_blank" href={ability?.url || "/"} rel="noopener noreferrer">
      <div className="flex items-center gap-1">
        <span>{ability.name}</span>
      </div>
    </a>
  );
};

type ProgressionTableCellProps = {
  contents: Ability[];
};

export const ProgressionTableCell = ({
  contents,
}: ProgressionTableCellProps) => {
  return (
    <div className="flex border border-white capitalize items-center p-1">
      <div>
        {contents.map((content) => (
          <CellItem ability={content} />
        ))}
      </div>
    </div>
  );
};

type ProgressionTableHeaderCellProps = {
  contents: string;
};

export const ProgressionTableHeaderCell = ({
  contents,
}: ProgressionTableHeaderCellProps) => {
  return (
    <div className="flex border border-white capitalize items-center p-2 justify-center">
      <div>{contents}</div>
    </div>
  );
};
