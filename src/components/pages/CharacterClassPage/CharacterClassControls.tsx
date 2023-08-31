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
    <CharacterClassPageSection className="h-full flex items-center justify-center">
      <div className="flex gap-12 text-3xl justify-between w-full px-6">
        <div className="flex gap-8">
          <div className="flex gap-4 items-center">
            <span>Level</span>
            <button onClick={decrementLevel}>{`<`}</button>
            <span className="text-companion-gold px-4">{currentLevel}</span>
            <button onClick={incrementLevel}>{`>`}</button>
          </div>
          <div className="flex gap-4 items-center">
            <span>Subclass</span>
            <button onClick={decrementSubclass}>{`<`}</button>
            <span className="text-companion-gold capitalize">
              {selectedSubclass.name}
            </span>
            <button onClick={incrementSubclass}>{`>`}</button>
          </div>
        </div>
        <div className="flex gap-6 text-base">
          {Object.keys(stats).map((stat) => (
            <Stat
              name={stat}
              value={stats[stat].value}
              setter={stats[stat].setter}
            />
          ))}
        </div>
      </div>
    </CharacterClassPageSection>
  );
};
