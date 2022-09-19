import { container } from 'tsyringe';

// games
import { IGamesRepository } from '@/modules/game/repositories/IGamesRepository';
import { GamesRepository } from '@/modules/game/infra/prisma/repositories/GamesRepository';

// ad
import { IAdsRepository } from '@/modules/ad/repositories/IAdsRepository';
import { AdsRepository } from '@/modules/ad/infra/prisma/repositories/AdsRepository';

container.registerSingleton<IGamesRepository>(
  'GamesRepository',
  GamesRepository
);

container.registerSingleton<IAdsRepository>('AdsRepository', AdsRepository);
