import { Request, Response } from 'express';
import * as Yup from 'yup';
import { container } from 'tsyringe';
import { CreateAdUseCase } from './CreateAdUseCase';

class CreateAdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      yearsPlaying,
      discord,
      weekDays,
      hourStart,
      hourEnd,
      useVoiceChannel,
      gameId,
    } = request.body;

    const createAdUseCase = container.resolve(CreateAdUseCase);

    const ad = await createAdUseCase.execute({
      name,
      yearsPlaying,
      discord,
      weekDays,
      hourEnd,
      hourStart,
      useVoiceChannel,
      gameId,
    });

    return response.status(200).json({ ad });
  }
}

const createAdControllerSchemaValidation = {
  schema: {
    body: {
      yupSchema: Yup.object().shape({
        name: Yup.string().required(),
        yearsPlaying: Yup.number().required(),
        discord: Yup.string().required(),
        weekDays: Yup.array().required(),
        hourStart: Yup.number().required(),
        hourEnd: Yup.number().required(),
        useVoiceChannel: Yup.boolean().required(),
        gameId: Yup.string().required(),
      }),
    },
  },
};

export { CreateAdController, createAdControllerSchemaValidation };
