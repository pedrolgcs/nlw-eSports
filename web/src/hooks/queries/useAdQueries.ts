import { useQuery } from '@tanstack/react-query';
import { getAdById } from '@/services/requests/ad';

export function useGetAdByIdQuery(id: string) {
  return useQuery(['ad', id], () => getAdById({ id }), {
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
}
