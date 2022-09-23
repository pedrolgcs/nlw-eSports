import { convertM2HM } from '@/utils/date';

export type IAd = {
  id: string;
  name: string;
  yearsPlaying: number;
  weekDays: number[];
  hourStart: number;
  hourEnd: number;
  useVoiceChannel: boolean;
  gameId: string;
  createdAt: string;
};

class Ad {
  readonly id: string;
  readonly name: string;
  readonly yearsPlaying: number;
  readonly weekDays: number[];
  readonly hourStart: number;
  readonly hourEnd: number;
  readonly useVoiceChannel: boolean;
  readonly gameId: string;
  readonly createdAt: Date;

  constructor({
    id,
    name,
    yearsPlaying,
    weekDays,
    hourStart,
    hourEnd,
    useVoiceChannel,
    createdAt,
    gameId,
  }: IAd) {
    this.id = id;
    this.name = name;
    this.yearsPlaying = yearsPlaying;
    this.weekDays = weekDays;
    this.hourStart = hourStart;
    this.hourEnd = hourEnd;
    this.useVoiceChannel = useVoiceChannel;
    this.gameId = gameId;
    this.createdAt = new Date(createdAt);
  }

  get formattedHourStart() {
    return convertM2HM(this.hourStart);
  }

  get formattedHourEnd() {
    return convertM2HM(this.hourEnd);
  }
}

export { Ad };
