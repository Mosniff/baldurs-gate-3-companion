"use client";
import { Ability } from "@/types/CharacterClass";
import CircleIcon from "@mui/icons-material/Circle";

type CellItemProps = {
  ability: Ability;
};

const CellItem = ({ ability }: CellItemProps) => {
  return (
    <a target="_blank" href={ability?.url} rel="noopener noreferrer">
      <div className="flex items-center gap-1 text-base">
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
    <div className="flex border border-white capitalize items-center p-2">
      <div className="flex items-center gap-2">
        {contents.map((content, i) => (
          <>
            <CellItem ability={content} />
            {i < contents.length - 1 && <CircleIcon sx={{ fontSize: 8 }} />}
          </>
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
