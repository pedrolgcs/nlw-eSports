import { Router } from 'express';
import { expressYupMiddleware } from 'express-yup-middleware';

// controllers
import { FindGamesController } from '@/modules/game/useCases/findGames/FindGamesController';
import {
  CreateGameController,
  createGameControllerSchemaValidation,
} from '@/modules/game/useCases/createGame/CreateGameController';
import {
  FindAdsByGameIdController,
  findAdsByGameIdControllerSchemaValidation,
} from '@/modules/game/useCases/findAdsByGameId/FindAdsByGameIdController';
import {
  UpdateGameByIdController,
  updateGameByIdControllerSchemaValidation,
} from '@/modules/game/useCases/updateGameById/UpdateGameByIdController';

// inicialize
const createGameController = new CreateGameController();
const findGamesController = new FindGamesController();
const findAdsByGameIdController = new FindAdsByGameIdController();
const updateGameByIdController = new UpdateGameByIdController();
const gamesRouter = Router();

gamesRouter.get('/', findGamesController.handle);

gamesRouter.post(
  '/',
  expressYupMiddleware({
    schemaValidator: createGameControllerSchemaValidation,
  }),
  createGameController.handle
);

gamesRouter.put(
  '/:id',
  expressYupMiddleware({
    schemaValidator: updateGameByIdControllerSchemaValidation,
  }),
  updateGameByIdController.handle
);

gamesRouter.get(
  '/:id/ads',
  expressYupMiddleware({
    schemaValidator: findAdsByGameIdControllerSchemaValidation,
  }),
  findAdsByGameIdController.handle
);

export { gamesRouter };
