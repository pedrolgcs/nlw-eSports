import { Request, Response } from 'express';
import * as Yup from 'yup';
import { container } from 'tsyringe';
import { CreateGameUseCase } from './CreateGameUseCase';

class CreateGameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, bannerUrl } = request.body;

    const createGameUseCase = container.resolve(CreateGameUseCase);

    const game = await createGameUseCase.execute({ title, bannerUrl });

    return response.status(201).json({ ...game });
  }
}

const createGameControllerSchemaValidation = {
  schema: {
    body: {
      yupSchema: Yup.object().shape({
        title: Yup.string().required(),
        bannerUrl: Yup.string().required(),
      }),
    },
  },
};

export { CreateGameController, createGameControllerSchemaValidation };
