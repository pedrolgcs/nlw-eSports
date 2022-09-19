import { Ad } from '@prisma/client';
import { ICreateAdDTO } from '@/modules/ad/dtos';

export interface IAdsRepository {
  create(data: ICreateAdDTO): Promise<Ad>;
  find(): Promise<Ad[]>;
  findById(id: string): Promise<Ad | null>;
  findByGameId(gameId: string): Promise<Ad[]>;
}
