import { Request, Response } from 'express';
import * as Yup from 'yup';
import { container } from 'tsyringe';
import { FindAdsByGameIdUseCase } from './FindAdByGameIdUseCase';

class FindAdsByGameIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: gameId } = request.params;

    const findAdsByGameIdUseCase = container.resolve(FindAdsByGameIdUseCase);

    const ads = await findAdsByGameIdUseCase.execute({ gameId });

    return response.status(200).json(ads);
  }
}

const findAdsByGameIdControllerSchemaValidation = {
  schema: {
    params: {
      yupSchema: Yup.object().shape({
        id: Yup.string().required(),
      }),
    },
  },
};

export { FindAdsByGameIdController, findAdsByGameIdControllerSchemaValidation };
