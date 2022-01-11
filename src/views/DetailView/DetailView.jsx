import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getChar } from '../../services/services';
import CharDetail from '../../components/CharDetail/CharDetail';

export default function DetailView() {
  const { id } = useParams();
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getChar(id)
      .then(setCharacter)
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      <Link to="/">Back to Catalog</Link>
      <fieldset>
        {loading ? 'Loading...' : <CharDetail character={character} />}
      </fieldset>
    </>
  );
}
