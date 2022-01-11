export const getAllChars = async () => {
  try {
    const res = await fetch(
      `https://last-airbender-api.herokuapp.com/api/v1/characters`
    );
    const data = await res.json();
    return {
      characters: data.map((character) => ({
        id: character._id,
        name: character.name,
        photoUrl: character.photoUrl,
        affiliation: character.affiliation,
        allies: character.allies,
        enemies: character.enemies,
      })),
    };
  } catch (error) {
    console.error(error.message);
    return [];
  }
};

export const getChar = async (id) => {
  try {
    const res = await fetch(
      `https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`
    );
    const character = await res.json();
    return character;
  } catch (error) {
    console.error(error.message);
    return {};
  }
};
