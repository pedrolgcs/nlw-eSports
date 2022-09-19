import { inject, injectable } from 'tsyringe';
import { IAdsRepository } from '@/modules/ad/repositories/IAdsRepository';
import { IGamesRepository } from '@/modules/game/repositories/IGamesRepository';
import { Ad } from '@prisma/client';
import { FindAdsByGameIdError } from './FindAdsByGameIdError';

type IRequest = {
  gameId: string;
};

@injectable()
class FindAdsByGameIdUseCase {
  constructor(
    @inject('AdsRepository')
    private adsRepository: IAdsRepository,
    @inject('GamesRepository')
    private gamesRepository: IGamesRepository
  ) {}

  async execute(data: IRequest): Promise<Ad[]> {
    const game = this.gamesRepository.findById(data.gameId);

    if (!game) {
      throw new FindAdsByGameIdError.GameNotFound();
    }

    const ads = await this.adsRepository.findByGameId(data.gameId);

    return ads;
  }
}

export { FindAdsByGameIdUseCase };
