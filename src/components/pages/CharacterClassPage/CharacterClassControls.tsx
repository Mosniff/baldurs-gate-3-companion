import { CharacterSubclass } from "@/types/CharacterSubclass";
import { CharacterClassPageSection } from "./CharacterClassPageSection";

type Props = {
  currentLevel: number;
  incrementLevel: () => void;
  decrementLevel: () => void;
  selectedSubclass: CharacterSubclass;
  incrementSubclass: () => void;
  decrementSubclass: () => void;
};

export const CharacterClassControls = ({
  currentLevel,
  incrementLevel,
  decrementLevel,
  selectedSubclass,
  incrementSubclass,
  decrementSubclass,
}: Props) => {
  return (
    <CharacterClassPageSection>
      <div className="flex gap-12 text-3xl justify-center">
        <div className="flex gap-4">
          <span>Level</span>
          <button onClick={decrementLevel}>{`<`}</button>
          <span className="text-companion-gold px-4">{currentLevel}</span>
          <button onClick={incrementLevel}>{`>`}</button>
        </div>
        <div className="flex gap-4">
          <span>Subclass</span>
          <button onClick={decrementSubclass}>{`<`}</button>
          <span className="text-companion-gold capitalize">
            {selectedSubclass.name}
          </span>
          <button onClick={incrementSubclass}>{`>`}</button>
        </div>
      </div>
    </CharacterClassPageSection>
  );
};
