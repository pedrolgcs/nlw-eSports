import { useQuery } from '@tanstack/react-query';
import { getGames } from '@/services/requests/game';

export function useGamesQuery() {
  return useQuery(['games'], getGames, {
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
}
