import { Game } from '@prisma/client';
import { ICreateGameDTO, IUpdateGameDTO } from '@/modules/game/dtos';

interface IGamesRepository {
  find(): Promise<Game[]>;
  findByTitle(title: string): Promise<Game | null>;
  findById(id: string): Promise<Game | null>;
  create(data: ICreateGameDTO): Promise<Game>;
  save(data: IUpdateGameDTO): Promise<Game>;
}

export { IGamesRepository };
