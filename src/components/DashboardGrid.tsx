"use client";
import React from "react";
import { ClassCard } from "./ClassCard";
import { CharacterClassName } from "@/types/CharacterClass";
import { motion } from "framer-motion";

type Props = {};

const characterClasses: CharacterClassName[] = [
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
    <ul className="grid sm:grid-cols-4 gap-6">
      {characterClasses.map((characterClass, i) => (
        <motion.li
          key={characterClass}
          initial={{ opacity: 0, translateX: -100, translateY: -100 }}
          animate={{
            opacity: 1,
            translateX: 0,
            translateY: 0,
            transition: {
              x: { type: "spring", stiffness: 100 },
              duration: 0.2,
              delay: i * 0.05,
            },
          }}
        >
          <ClassCard characterClassName={characterClass} />
        </motion.li>
      ))}
    </ul>
  );
};
