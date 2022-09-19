import { Game, IGame } from '@/entities/Game';
import { api } from '@/services/api';

export async function getGames() {
  const { data: games } = await api.get<IGame[]>('/games');

  const normalizedGames = games.map((game) => new Game(game));

  return normalizedGames;
}
