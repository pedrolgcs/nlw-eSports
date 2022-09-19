import { ICreateGameDTO, IUpdateGameDTO } from '@/modules/game/dtos';
import { IGamesRepository } from '@/modules/game/repositories/IGamesRepository';
import { prisma } from '@/shared/infra/database/prismaClient';
import { Game } from '@prisma/client';

class GamesRepository implements IGamesRepository {
  public async find(): Promise<Game[]> {
    const games = await prisma.game.findMany({
      include: {
        _count: {
          select: {
            ads: true,
          },
        },
      },
    });

    return games;
  }

  public async findById(id: string): Promise<Game | null> {
    const game = await prisma.game.findUnique({
      where: {
        id,
      },
    });

    return game;
  }

  public async findByTitle(title: string): Promise<Game | null> {
    const game = await prisma.game.findFirst({
      where: {
        title: {
          equals: title,
          mode: 'insensitive',
        },
      },
    });

    return game;
  }

  public async create(data: ICreateGameDTO): Promise<Game> {
    const newGame = await prisma.game.create({ data: data });

    return newGame;
  }

  public async save(data: IUpdateGameDTO): Promise<Game> {
    const updateGame = await prisma.game.update({
      where: {
        id: data.id,
      },
      data: {
        title: data.title,
        bannerUrl: data.bannerUrl,
      },
    });

    return updateGame;
  }
}

export { GamesRepository };
