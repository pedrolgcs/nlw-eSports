import { inject, injectable } from 'tsyringe';
import { IAdsRepository } from '@/modules/ad/repositories/IAdsRepository';
import { Ad } from '@prisma/client';

@injectable()
class FindAdsUseCase {
  constructor(
    @inject('AdsRepository')
    private adsRepository: IAdsRepository
  ) {}

  async execute(): Promise<Ad[]> {
    const ads = await this.adsRepository.find();

    return ads;
  }
}

export { FindAdsUseCase };
