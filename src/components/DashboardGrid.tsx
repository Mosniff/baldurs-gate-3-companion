import React from "react";
import { Card } from "./Card";
import { ClassCard } from "./ClassCard";
import { CharacterClass } from "@/types/CharacterClass";

type Props = {};

const characterClasses: CharacterClass[] = [
  "barbarian",
  "bard",
  "cleric",
  "druid",
  "fighter",
  "monk",
  "paladin",
  "ranger",
  "rogue",
  "sorcerer",
  "warlock",
  "wizard",
];

const DashboardGrid = ({}: Props) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {characterClasses.map((characterClass) => (
        <ClassCard characterClass={characterClass} />
      ))}
    </div>
  );
};

export { DashboardGrid };
