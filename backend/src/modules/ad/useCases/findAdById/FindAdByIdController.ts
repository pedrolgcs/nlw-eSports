import { Request, Response } from 'express';
import * as Yup from 'yup';
import { container } from 'tsyringe';
import { FindAdByIdUseCase } from './FindAdByIdUseCase';

class FindAdByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findAdByGameIDUseCase = container.resolve(FindAdByIdUseCase);

    const ad = await findAdByGameIDUseCase.execute({ id });

    return response.status(200).json({ ...ad });
  }
}

const findAdByIdControllerSchemaValidation = {
  schema: {
    params: {
      yupSchema: Yup.object().shape({
        id: Yup.string().required(),
      }),
    },
  },
};

export { FindAdByIdController, findAdByIdControllerSchemaValidation };
