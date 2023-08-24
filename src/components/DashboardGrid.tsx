"use client";
import React from "react";
import { ClassCard } from "./ClassCard";
import { CharacterClass } from "@/types/CharacterClass";
import { motion } from "framer-motion";

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

export const DashboardGrid = ({}: Props) => {
  return (
    <ul className="grid grid-cols-4 gap-6">
      {characterClasses.map((characterClass, i) => (
        <motion.li
          initial={{ opacity: 0, translateX: -100, translateY: -100 }}
          animate={{
            opacity: 1,
            translateX: 0,
            translateY: 0,
            transition: {
              x: { type: "spring", stiffness: 100 },
              duration: 0.4,
              delay: i * 0.1,
            },
          }}
        >
          <ClassCard characterClass={characterClass} />
        </motion.li>
      ))}
    </ul>
  );
};
