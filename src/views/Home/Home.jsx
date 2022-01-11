import { useEffect, useState } from 'react';
import { getAllChars } from '../../services/services';
import CharList from '../../components/CharList/CharList';

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getAllChars()
      .then((res) => {
        setCharacters(res.characters);
      })
      .finally(() => setLoading(false));
  }, []);
  console.log(characters);

  return (
    <main>
      Avatar Characters
      {loading ? 'Loading...' : <CharList characters={characters} />}
    </main>
  );
}
