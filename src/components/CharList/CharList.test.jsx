import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CharList from './CharList';

const characters = [
  {
    _id: '5cf5679a915ecad153ab68c8',
    allies: ['Royal Earthbender Guards'],
    enemies: ['Chin'],
    photoUrl:
      'https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441',
    name: '46th Earth King',
    affiliation: ' Earth Kingdom Earth Kingdom Royal Family',
  },
  {
    _id: '5cf5679a915ecad153ab68ca',
    allies: ['Gyatso'],
    enemies: ['Ozai'],
    photoUrl:
      'https://vignette.wikia.nocookie.net/avatar/images/2/21/Into_The_Inferno_Aang.png/revision/latest?cb=20131009060746',
    name: 'Aang (games)',
    affiliation: ' Air Nomads Team Avatar',
  },
];
describe('Characters', () => {
  it('renders all characters', async () => {
    const container = render(
      <MemoryRouter initialEntries={['/']}>
        <CharList characters={characters} />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
