import * as zod from 'zod';

export const newAdSchema = zod.object({
  game: zod.object({
    label: zod.string(),
    value: zod.string(),
  }),
  name: zod.string(),
  yearsPlaying: zod.string(),
  discord: zod.string(),
  weekDays: zod.string().array(),
  hourStart: zod.string(),
  hourEnd: zod.string(),
  useVoiceChannel: zod.boolean(),
});

export type NewAdSchema = zod.infer<typeof newAdSchema>;