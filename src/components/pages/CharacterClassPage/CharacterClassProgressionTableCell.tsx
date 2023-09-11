"use client";
import { Ability } from "@/types/CharacterClass";
import CircleIcon from "@mui/icons-material/Circle";

type CellItemProps = {
  ability: Ability;
  finalItem: boolean;
  mobile: boolean;
};

const CellItem = ({ ability, finalItem, mobile }: CellItemProps) => {
  return (
    <a target="_blank" href={ability?.url} rel="noopener noreferrer">
      <div className="flex items-center gap-1 text-base">
        <span>{ability.name}</span>
        {!finalItem && !mobile && <CircleIcon sx={{ fontSize: 8 }} />}
      </div>
    </a>
  );
};

type ProgressionTableCellProps = {
  contents: Ability[];
  mobile?: boolean;
  subclassCell?: boolean;
};

export const ProgressionTableCell = ({
  contents,
  mobile = false,
  subclassCell = false,
}: ProgressionTableCellProps) => {
  return (
    <div className="border border-white">
      {mobile && (
        <div className="flex justify-end uppercase text-xs">
          <span
            className={`p-1 ${
              subclassCell
                ? "bg-companion-gold text-white"
                : "bg-white text-black"
            }`}
          >
            {subclassCell ? "subclass" : "class"}
          </span>
        </div>
      )}
      <div className="flex capitalize items-center p-2 h-full">
        <div className={`items-center gap-2${mobile ? "" : " flex"}`}>
          {contents.map((content, i) => (
            <CellItem
              key={content.name}
              ability={content}
              finalItem={!(i < contents.length - 1)}
              mobile={mobile}
            />
          ))}
        </div>
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
