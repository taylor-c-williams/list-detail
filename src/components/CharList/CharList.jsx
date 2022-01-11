import { Link } from 'react-router-dom';

export default function CharList({ characters }) {
  return (
    <>
      <ul aria-label="characters">
        {characters.map((character) => (
          <li key={character.id}>
            <Link to={`/detail/${character.id}`}>
              <fieldset>
                <img src={character.img} alt={character.name} />
                <p>{character.name}</p>
                <p>{character.affiliation}</p>
                <p>{character.allies}</p>
                <p>{character.enemies}</p>
              </fieldset>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
