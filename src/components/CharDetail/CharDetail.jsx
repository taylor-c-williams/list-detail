export default function CharDetail({ character }) {
  console.log(character);
  return (
    <>
      <img src={character.photoUrl} alt={character.name} />
      <p>{character.name}</p>
      <p>Affiliation: {character.affiliation}</p>
      <p>Allies: {character.allies}</p>
      <p>Enemies: {character.enemies}</p>
    </>
  );
}
