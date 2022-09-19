import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindGamesUseCase } from './FindGamesUseCase';

class FindGamesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findGamesUseCase = container.resolve(FindGamesUseCase);

    const games = await findGamesUseCase.execute();

    return response.status(200).json(games);
  }
}

export { FindGamesController };
