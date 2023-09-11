import { CharacterSubclass } from "@/types/CharacterSubclass";
import { CharacterClassPageSection } from "./CharacterClassPageSection";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Stat = ({
  name,
  value,
  setter,
}: {
  name: string;
  value: number;
  setter: (newValue: number) => void;
}) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div>{name}</div>
      <div className="flex gap-1">
        <RemoveIcon
          className="cursor-pointer"
          onClick={() => setter(value - 1)}
        />
        {value}
        <AddIcon className="cursor-pointer" onClick={() => setter(value + 1)} />
      </div>
    </div>
  );
};

type Props = {
  currentLevel: number;
  incrementLevel: () => void;
  decrementLevel: () => void;
  selectedSubclass: CharacterSubclass;
  incrementSubclass: () => void;
  decrementSubclass: () => void;
  stats: {
    [key: string]: { value: number; setter: (newValue: number) => void };
  };
};

export const CharacterClassControls = ({
  currentLevel,
  incrementLevel,
  decrementLevel,
  selectedSubclass,
  incrementSubclass,
  decrementSubclass,
  stats,
}: Props) => {
  return (
    <CharacterClassPageSection className="h-full flex justify-center text-2xl sm:text-3xl">
      <div className="flex">
        <div className="flex flex-col gap-4 items-center sm:flex-row sm:justify-center">
          <h4>Subclass</h4>
          <div className="flex gap-4">
            <button onClick={decrementSubclass}>{`<`}</button>
            <span className="text-companion-gold capitalize">
              {selectedSubclass.name}
            </span>
            <button onClick={incrementSubclass}>{`>`}</button>
          </div>
        </div>
      </div>
    </CharacterClassPageSection>
  );
};
