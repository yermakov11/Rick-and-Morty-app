// Characters.tsx
import { useState, useEffect } from 'react';
import Header from "../components/Header";
import Search from "../components/Search";
import './stylePages/CharactersStyle.scss';
import { getDataCharacter, Character } from "../data/apiCharacters";

export default function Characters() {
  const [dataCharacters, setDataCharacters] = useState<Character[] | null>(null);
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacter = async () => {
      const data = await getDataCharacter();
      setDataCharacters(data);
      setFilteredCharacters(data || []);
    };

    fetchCharacter();
  }, []);

  const handleSearch = (filteredData: Character[]) => {
    setFilteredCharacters(filteredData);
  };

  return (
    <main>
      <Header />
      <h1>Characters</h1>
      <Search characters={dataCharacters || []} onSearch={handleSearch} />
      <div className="main-character">
        {filteredCharacters.map((character) => (
          <div className="list-character" key={character.id}>
            <img src={`https://image.tmdb.org/t/p/w200${character.profile_path}`} alt={character.name}/>
            <h2>{character.name}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
