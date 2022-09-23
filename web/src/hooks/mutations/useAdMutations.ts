import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createNewAd } from '@/services/requests/ad';

export const useMutationCreateNewAd = () => {
  const queryClient = useQueryClient();

  return useMutation(createNewAd, {
    onSuccess: () => {
      queryClient.refetchQueries(['games']);
    },
  });
};
