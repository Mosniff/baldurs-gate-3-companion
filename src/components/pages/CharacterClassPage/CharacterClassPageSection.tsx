type Props = { children: React.ReactNode; className?: string };

export const CharacterClassPageSection = ({ children, className }: Props) => {
  return (
    <div
      className={`bg-black p-4 text-white font-sans rounded ${className || ""}`}
    >
      {children}
    </div>
  );
};
