export type ICreateAdDTO = {
  name: string;
  yearsPlaying: number;
  discord: string;
  weekDays: number[];
  hourStart: number;
  hourEnd: number;
  useVoiceChannel: boolean;
  gameId: string;
};
