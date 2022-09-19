import { inject, injectable } from 'tsyringe';
import { IAdsRepository } from '@/modules/ad/repositories/IAdsRepository';
import { Ad } from '@prisma/client';

type IRequest = {
  name: string;
  yearsPlaying: number;
  discord: string;
  weekDays: number[];
  hourStart: number;
  hourEnd: number;
  useVoiceChannel: boolean;
  gameId: string;
};

@injectable()
class CreateAdUseCase {
  constructor(
    @inject('AdsRepository')
    private adsRepository: IAdsRepository
  ) {}

  async execute(data: IRequest): Promise<Ad> {
    const newAd = await this.adsRepository.create(data);

    return newAd;
  }
}

export { CreateAdUseCase };
