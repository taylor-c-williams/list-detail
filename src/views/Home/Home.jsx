import { useEffect, useState } from 'react';
import { getAllChars } from '../../services/services';
import CharList from '../../components/CharList';

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getAllChars().then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      Avatar Characters
      {loading ? 'Loading...' : <CharList characters={characters} />}
    </>
  );
}
