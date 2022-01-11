import { useEffect, useState } from 'react';
import { getAllChars } from '../../services/services';
import CharList from '../../components/CharList/CharList';
import styles from './Home.css';

export default function Home() {
  const [characters, setCharacters] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getAllChars()
      .then((res) => {
        setCharacters(res.characters);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className={styles.section}>
      <h1>Avatar Characters</h1>
      {loading ? 'Loading...' : <CharList characters={characters} />}
    </main>
  );
}
