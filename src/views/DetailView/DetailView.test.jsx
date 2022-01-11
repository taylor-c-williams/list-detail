import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

import DetailView from './DetailView';

const server = setupServer(
  rest.get(
    'https://last-airbender-api.herokuapp.com/api/v1/characters/:id',
    (req, res, ctx) => {
      return res(
        ctx.json({
          _id: '5cf5679a915ecad153ab68c8',
          allies: ['Royal Earthbender Guards'],
          enemies: ['Chin'],
          photoUrl:
            'https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441',
          name: '46th Earth King',
          affiliation: ' Earth Kingdom Earth Kingdom Royal Family',
        })
      );
    }
  )
);

describe('Detail View', () => {
  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  it('renders a single character', async () => {
    const view = render(
      <MemoryRouter initialEntries={['/detail/5cf5679a915ecad153ab68c8']}>
        <DetailView />
      </MemoryRouter>
    );
    await screen.findByText('46th Earth King');
  });
});
