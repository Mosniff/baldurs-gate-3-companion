import Image from "next/image";
import React from "react";

type Props = {};

function Card({}: Props) {
  return (
    <div className="p-2 border border-black bg-black flex items-center justify-between rounded">
      <Image
        src="/class-emblems/barbarian.webp"
        width={100}
        height={100}
        alt="barbarian"
      />
      <div className="w-full flex justify-center">
        <p className="text-companion-gold text-3xl capitalize font-sans">
          barbarian
        </p>
      </div>
    </div>
  );
}

export default Card;
