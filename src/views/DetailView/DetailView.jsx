import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getChar } from '../../services/services';
import CharDetail from '../../components/CharDetail/CharDetail';
import styles from './DetailView.css';

export default function DetailView() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getChar(id)
      .then(setCharacter)
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <section className={styles.main}>
      <Link to="/">Back to Catalog</Link>
      <fieldset className={styles.cardfield}>
        {loading ? 'Loading...' : <CharDetail character={character} />}
      </fieldset>
    </section>
  );
}
