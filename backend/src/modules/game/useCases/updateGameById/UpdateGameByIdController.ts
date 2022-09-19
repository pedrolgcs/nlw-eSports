import { Request, Response } from 'express';
import * as Yup from 'yup';
import { container } from 'tsyringe';
import { UpdateGameByIdUseCase } from './UpdateGameByIdUseCase';

class UpdateGameByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, bannerUrl } = request.body;
    const { id } = request.params;

    const updateGameByIdUseCase = container.resolve(UpdateGameByIdUseCase);

    const game = await updateGameByIdUseCase.execute({ id, title, bannerUrl });

    return response.status(200).json({ ...game });
  }
}

const updateGameByIdControllerSchemaValidation = {
  schema: {
    params: {
      yupSchema: Yup.object().shape({
        id: Yup.string().required(),
      }),
    },
    body: {
      yupSchema: Yup.object().shape({
        title: Yup.string().required(),
        bannerUrl: Yup.string().required(),
      }),
    },
  },
};

export { UpdateGameByIdController, updateGameByIdControllerSchemaValidation };
