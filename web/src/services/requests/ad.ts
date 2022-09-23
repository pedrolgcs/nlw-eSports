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

type CreateNewAdParams = {
  name: string;
  yearsPlaying: number;
  discord: string;
  weekDays: number[];
  hourStart: number;
  hourEnd: number;
  useVoiceChannel: boolean;
  gameId: string;
};

export async function createNewAd(params: CreateNewAdParams) {
  const { data: ad } = await api.post<IAd>('/ads', params);

  const normalizedAd = new Ad(ad);

  return normalizedAd;
}
