"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = { children: React.ReactNode; className?: string };

export const PageWrapper = ({ children, className }: Props) => {
  return (
    <motion.div
      className={`page-wrapper ${className || ""}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      {children}
    </motion.div>
  );
};
