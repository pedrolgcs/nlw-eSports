import { inject, injectable } from 'tsyringe';
import { Game } from '@prisma/client';
import { IGamesRepository } from '@/modules/game/repositories/IGamesRepository';
import { UpdateGameByIdError } from './UpdateGameByIdError';

type IRequest = {
  id: string;
  title: string;
  bannerUrl: string;
};

@injectable()
class UpdateGameByIdUseCase {
  constructor(
    @inject('GamesRepository')
    private gamesRepository: IGamesRepository
  ) {}

  async execute(data: IRequest): Promise<Game> {
    const game = await this.gamesRepository.findById(data.id);

    if (!game) {
      throw new UpdateGameByIdError.GameNotExists();
    }

    const gameTitleAlreadyUsed = await this.gamesRepository.findByTitle(
      data.title
    );

    if (gameTitleAlreadyUsed && gameTitleAlreadyUsed.id !== game.id) {
      throw new UpdateGameByIdError.GameTitleAlreadyExists();
    }

    const updatedGame = await this.gamesRepository.save(data);

    return updatedGame;
  }
}

export { UpdateGameByIdUseCase };
