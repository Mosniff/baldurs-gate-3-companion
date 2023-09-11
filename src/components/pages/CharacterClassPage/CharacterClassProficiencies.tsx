import { CharacterClassPageSection } from "./CharacterClassPageSection";

type ProficiencyListProps = { name: string; proficiencies: string[] };

export const ProficiencyList = ({
  name,
  proficiencies,
}: ProficiencyListProps) => {
  return (
    <div className="flex-grow">
      <h3 className="capitalize">{name}</h3>
      <ul className="text-lg list-disc px-8 py-4">
        {proficiencies.map((proficiency) => (
          <li key={proficiency} className="capitalize">
            {proficiency}
          </li>
        ))}
      </ul>
    </div>
  );
};

type Props = {
  weaponProficiencies: string[];
  armourProficiencies: string[];
  savingThrowProficiencies: string[];
};

export const CharacterClassProficiencies = ({
  weaponProficiencies,
  armourProficiencies,
  savingThrowProficiencies,
}: Props) => {
  return (
    <CharacterClassPageSection className="h-full">
      <div className="flex flex-col gap-4 text-2xl justify-center">
        <h2>Proficiencies</h2>
        <div className="flex flex-col sm:flex-row justify-between text-xl">
          <ProficiencyList name="weapons" proficiencies={weaponProficiencies} />
          <ProficiencyList name="armour" proficiencies={armourProficiencies} />
          <ProficiencyList
            name="saving throws"
            proficiencies={savingThrowProficiencies}
          />
        </div>
      </div>
    </CharacterClassPageSection>
  );
};
