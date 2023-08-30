"use client";
import { Ability } from "@/types/CharacterClass";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { useState } from "react";
import Image from "next/image";

type CellItemProps = {
  ability: Ability;
};

const CellItem = ({ ability }: CellItemProps) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <div className="flex items-center gap-1">
        <ExpandCircleDownIcon
          className={`${
            expanded ? "expanded-icon--expanded" : "expanded-icon"
          }`}
          onClick={() => setExpanded(!expanded)}
        />
        <span>{ability.name}</span>
      </div>
      {expanded && (
        <div className="flex gap-6 py-2 pl-6 normal-case">
          <div className="flex items-center">
            <Image
              src={ability.imagePath || "/fallback.png"}
              width={75}
              height={75}
              alt={ability.name}
            />
          </div>
          <div className="text-sm">
            {ability.activeProperties && (
              <div className="bg-gray-500 p-2">
                <div className="capitalize flex items-center">
                  <Image
                    src={`/${ability.activeProperties.actionType
                      .split(" ")
                      .join("_")}.webp`}
                    width={25}
                    height={25}
                    alt={ability.activeProperties.actionType}
                  />
                  {ability.activeProperties.actionType}
                </div>
                <div className="grid grid-cols-3 p-1">
                  {ability.activeProperties.cost && (
                    <div>{`Cost: ${ability.activeProperties.cost.value} ${ability.activeProperties.cost.resource}`}</div>
                  )}
                  {ability.activeProperties.range && (
                    <div>{`Range: ${ability.activeProperties.range}`}</div>
                  )}
                  {ability.activeProperties.duration && (
                    <div>{`Duration: ${ability.activeProperties.duration}`}</div>
                  )}
                  {ability.activeProperties.targetingType && (
                    <div>{`${ability.activeProperties.targetingType}`}</div>
                  )}
                  {ability.activeProperties.recharge && (
                    <div>{`Reacharge ${ability.activeProperties.recharge}`}</div>
                  )}
                </div>
              </div>
            )}
            <ul className="list-disc">
              {ability.information.map((info) => (
                <li>{info}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
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
