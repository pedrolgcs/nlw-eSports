import { Router } from 'express';

// ads
import { adsRouter } from '@/modules/ad/infra/http/routes';

// games
import { gamesRouter } from '@/modules/game/infra/http/routes';

const routes = Router();

routes.get('/', (_, response) => {
  return response.json({ message: 'Health check' });
});

routes.use('/ads', adsRouter);

routes.use('/games', gamesRouter);

export { routes };
