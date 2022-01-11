import { render } from '@testing-library/react';
import CharDetail from './CharDetail';

const character = {
  _id: '5cf5679a915ecad153ab68c8',
  allies: ['Royal Earthbender Guards'],
  enemies: ['Chin'],
  photoUrl:
    'https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441',
  name: '46th Earth King',
  affiliation: ' Earth Kingdom Earth Kingdom Royal Family',
};

describe('Character Detail', () => {
  it('renders a single character & details', async () => {
    const container = render(<CharDetail character={character} />);
    expect(container).toMatchSnapshot();
  });
});
