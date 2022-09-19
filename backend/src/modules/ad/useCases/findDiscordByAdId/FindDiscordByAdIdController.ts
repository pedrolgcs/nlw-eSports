import { Request, Response } from 'express';
import * as Yup from 'yup';
import { container } from 'tsyringe';
import { FindDiscordByAdIdUseCase } from './FindDiscordByAdIdUseCase';

class FindDiscordByAdIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findDiscordByAdIdUseCase = container.resolve(
      FindDiscordByAdIdUseCase
    );

    const discord = await findDiscordByAdIdUseCase.execute({ id });

    return response.status(200).json({ discord });
  }
}

const findDiscordByAdIdControllerSchemaValidation = {
  schema: {
    params: {
      yupSchema: Yup.object().shape({
        id: Yup.string().required(),
      }),
    },
  },
};

export {
  FindDiscordByAdIdController,
  findDiscordByAdIdControllerSchemaValidation,
};
