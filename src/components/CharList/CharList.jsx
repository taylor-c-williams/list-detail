import { Link } from 'react-router-dom';

export default function CharList({ characters }) {
  return (
    <>
      <ul aria-label="characters">
        {characters.map((character) => (
          <li key={character.name}>
            <Link to={`/detail/${character.id}`}>
              <fieldset>
                <img src={character.photoUrl} alt={character.name} />
                <p>{character.name}</p>
              </fieldset>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
