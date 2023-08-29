import Image from "next/image";

type Props = { title: string; imagePath?: string; imageAlt?: string };

export const TitleCard = ({ title, imagePath, imageAlt }: Props) => {
  return (
    <div className="w-full py-2 px-6 border border-black bg-black flex gap-4 items-center justify-between rounded">
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
    </div>
  );
};
