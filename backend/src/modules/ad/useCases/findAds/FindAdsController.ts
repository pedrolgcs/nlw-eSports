import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { exclude } from '@/shared/utils/transform';
import { FindAdsUseCase } from './FindAdsUseCase';

class FindAdsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findAdsUseCase = container.resolve(FindAdsUseCase);

    const ads = await findAdsUseCase.execute();

    const adsWithoutDiscord = ads.map((ad) => exclude(ad, ['discord']));

    return response.status(200).json(adsWithoutDiscord);
  }
}

export { FindAdsController };
