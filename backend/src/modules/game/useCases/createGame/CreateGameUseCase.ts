import { inject, injectable } from 'tsyringe';
import { Game } from '@prisma/client';
import { IGamesRepository } from '@/modules/game/repositories/IGamesRepository';
import { CreateGameError } from './CreateGameError';

type IRequest = {
  title: string;
  bannerUrl: string;
};

@injectable()
class CreateGameUseCase {
  constructor(
    @inject('GamesRepository')
    private gamesRepository: IGamesRepository
  ) {}

  async execute(data: IRequest): Promise<Game> {
    const gameTitleAlreadyUsed = await this.gamesRepository.findByTitle(
      data.title
    );

    if (gameTitleAlreadyUsed) {
      throw new CreateGameError.GameTitleAlreadyExists();
    }

    const newGame = await this.gamesRepository.create(data);

    return newGame;
  }
}

export { CreateGameUseCase };
