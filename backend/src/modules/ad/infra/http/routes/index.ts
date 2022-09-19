import { Router } from 'express';
import { expressYupMiddleware } from 'express-yup-middleware';

// controllers
import {
  CreateAdController,
  createAdControllerSchemaValidation,
} from '@/modules/ad/useCases/createAd/CreateAdController';
import {
  FindAdByIdController,
  findAdByIdControllerSchemaValidation,
} from '@/modules/ad/useCases/findAdById/FindAdByIdController';
import { FindAdsController } from '@/modules/ad/useCases/findAds/FindAdsController';
import {
  FindDiscordByAdIdController,
  findDiscordByAdIdControllerSchemaValidation,
} from '@/modules/ad/useCases/findDiscordByAdId/FindDiscordByAdIdController';

// inicialize
const createAdController = new CreateAdController();
const findAdByIdController = new FindAdByIdController();
const findDiscordByAdIdController = new FindDiscordByAdIdController();
const findAdsController = new FindAdsController();
const adsRouter = Router();

adsRouter.post(
  '/',
  expressYupMiddleware({
    schemaValidator: createAdControllerSchemaValidation,
  }),
  createAdController.handle
);

adsRouter.get('/', findAdsController.handle);

adsRouter.get(
  '/:id',
  expressYupMiddleware({
    schemaValidator: findAdByIdControllerSchemaValidation,
  }),
  findAdByIdController.handle
);

adsRouter.get(
  '/:id/discord',
  expressYupMiddleware({
    schemaValidator: findDiscordByAdIdControllerSchemaValidation,
  }),
  findDiscordByAdIdController.handle
);

export { adsRouter };
