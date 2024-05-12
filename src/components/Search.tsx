import React, { useState } from "react";
import "./styleComponents/SearchStyle.scss";

interface Character {
  id: number;
  name: string;
  gender: number;
}

interface CharacterProps {
  characters: Character[];
  onSearch: (filteredData: Character[]) => void;
}

export default function Search({ characters, onSearch }: CharacterProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    const filteredData = characters.filter((character) => {
      const searchTermLower = event.target.value.toLowerCase();
      const nameMatch = character.name.toLowerCase().includes(searchTermLower);
      const genderMatch = character.gender === 1 ? "male" : character.gender === 2 ? "female" : "";
      return nameMatch || genderMatch.includes(searchTermLower);
    });
    onSearch(filteredData);
  };

  return (
    <div className="block-search">
      <input type="text"placeholder="Search..." value={searchTerm} onChange={handleSearchChange}/>
    </div>
  );
}
