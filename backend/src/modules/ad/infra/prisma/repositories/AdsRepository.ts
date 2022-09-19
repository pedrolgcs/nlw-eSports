import { ICreateAdDTO } from '@/modules/ad/dtos';
import { IAdsRepository } from '@/modules/ad/repositories/IAdsRepository';
import { prisma } from '@/shared/infra/database/prismaClient';
import { Ad } from '@prisma/client';

class AdsRepository implements IAdsRepository {
  public async create(data: ICreateAdDTO): Promise<Ad> {
    const newAd = await prisma.ad.create({ data: data });

    return newAd;
  }

  public async find(): Promise<Ad[]> {
    const ads = await prisma.ad.findMany();

    return ads;
  }

  public async findById(id: string): Promise<Ad | null> {
    const ad = await prisma.ad.findUnique({
      where: {
        id: id,
      },
    });

    return ad;
  }

  public async findByGameId(gameId: string): Promise<Ad[]> {
    const ads = await prisma.ad.findMany({
      where: {
        gameId: gameId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return ads;
  }
}

export { AdsRepository };
