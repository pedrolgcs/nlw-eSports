import { inject, injectable } from 'tsyringe';
import { Game } from '@prisma/client';
import { IGamesRepository } from '@/modules/game/repositories/IGamesRepository';

@injectable()
class FindGamesUseCase {
  constructor(
    @inject('GamesRepository')
    private gamesRepository: IGamesRepository
  ) {}

  async execute(): Promise<Game[]> {
    const games = await this.gamesRepository.find();

    return games;
  }
}

export { FindGamesUseCase };
