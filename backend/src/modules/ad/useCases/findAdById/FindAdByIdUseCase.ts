import { inject, injectable } from 'tsyringe';
import { IAdsRepository } from '@/modules/ad/repositories/IAdsRepository';
import { FindAdByIdError } from './FindAdByIdError';
import { Ad } from '@prisma/client';

type IRequest = {
  id: string;
};

@injectable()
class FindAdByIdUseCase {
  constructor(
    @inject('AdsRepository')
    private adsRepository: IAdsRepository
  ) {}

  async execute({ id }: IRequest): Promise<Ad> {
    const ad = await this.adsRepository.findById(id);

    if (!ad) {
      throw new FindAdByIdError.AdNotFound();
    }

    return ad;
  }
}

export { FindAdByIdUseCase };
