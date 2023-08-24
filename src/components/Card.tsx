"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  imagePath?: string;
  imageAlt?: string;
  title: string;
};

export const Card = ({ imageAlt, imagePath, title }: Props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="w-full p-2 border border-black bg-black flex items-center justify-between rounded"
    >
      <Image
        src={imagePath || "/fallback.png"}
        width={75}
        height={75}
        alt={imageAlt || "image"}
      />
      <div className="w-full flex justify-center">
        <p className="text-companion-gold text-3xl capitalize font-sans">
          {title}
        </p>
      </div>
    </motion.div>
  );
};
