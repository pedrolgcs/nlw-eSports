import { inject, injectable } from 'tsyringe';
import { IAdsRepository } from '@/modules/ad/repositories/IAdsRepository';
import { FindDiscordByAdIdError } from './FindDiscordByAdIdError';

type IRequest = {
  id: string;
};

@injectable()
class FindDiscordByAdIdUseCase {
  constructor(
    @inject('AdsRepository')
    private adsRepository: IAdsRepository
  ) {}

  async execute({ id }: IRequest): Promise<string> {
    const ad = await this.adsRepository.findById(id);

    if (!ad) {
      throw new FindDiscordByAdIdError.AdNotFound();
    }

    return ad.discord;
  }
}

export { FindDiscordByAdIdUseCase };
