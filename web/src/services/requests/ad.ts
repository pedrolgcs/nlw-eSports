import { Ad, IAd } from '@/entities/Ad';
import { api } from '@/services/api';

type GetAdByIdParams = {
  id: string;
};

export async function getAdById({ id }: GetAdByIdParams) {
  const { data: ads } = await api.get<IAd[]>(`/ads/${id}`);

  const normalizedAds = ads.map((ad) => new Ad(ad));

  return normalizedAds;
}
