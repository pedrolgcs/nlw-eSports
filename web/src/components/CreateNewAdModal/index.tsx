import * as React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { zodResolver } from '@hookform/resolvers/zod';
import { GameController } from 'phosphor-react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import toast from 'react-hot-toast';
import { TextField, Select, Checkbox } from '@/components';
import { useGamesQuery } from '@/hooks/queries';
import { useMutationCreateNewAd } from '@/hooks/mutations/useAdMutations';
import { convertH2M } from '@/utils/date';
import { newAdSchema, NewAdSchema } from './schemaValidation';

type CreateNewAdModalProps = {
  toggleModal: () => void;
};

function CreateNewAdModal({ toggleModal }: CreateNewAdModalProps) {
  const { mutateAsync: createNewAd } = useMutationCreateNewAd();

  const { register, handleSubmit, control } = useForm<NewAdSchema>({
    resolver: zodResolver(newAdSchema),
    defaultValues: {
      name: '',
      discord: '',
      hourStart: '00:00',
      hourEnd: '00:00',
      weekDays: [],
      useVoiceChannel: false,
      yearsPlaying: '0',
      game: undefined,
    },
  });

  const { data: games } = useGamesQuery();

  const selectGameOptions = React.useMemo(() => {
    return games?.map((game) => ({
      label: game.title,
      value: game.id,
    }));
  }, [games]);

  const handleCreateNewAd: SubmitHandler<NewAdSchema> = (data) => {
    const parsedData = {
      name: data.name,
      yearsPlaying: Number(data.yearsPlaying),
      discord: data.discord,
      weekDays: data.weekDays.map((day) => Number(day)),
      hourStart: convertH2M(data.hourStart),
      hourEnd: convertH2M(data.hourEnd),
      useVoiceChannel: data.useVoiceChannel,
      gameId: data.game.value,
    };

    toast.promise(createNewAd(parsedData), {
      loading: 'Salvando...',
      success: () => {
        toggleModal();
        return <b>Anúncio cadastro com sucesso!</b>;
      },
      error: <b>Erro ao cadastrar anúncio!</b>,
    });
  };

  return (
    <Dialog.Portal>
      <Dialog.Trigger />
      <Dialog.Overlay className="fixed inset-0 bg-black/60" />
      <Dialog.Content className="fixed w-[480px] bg-[#2A2634] py-8 px-10 text-white rounded-md top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] shadow-lg shadow-black/25">
        <Dialog.Title className="font-black text-3xl">
          Publique um anúncio
        </Dialog.Title>

        <form
          onSubmit={handleSubmit(handleCreateNewAd)}
          autoComplete="off"
          className="mt-8 flex flex-col gap-4"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="game" className="font-semibold">
              Qual o game?
            </label>

            <Controller
              name="game"
              control={control}
              render={({ field }) => (
                <Select
                  options={selectGameOptions}
                  placeholder="Selecione o game que deseja jogar"
                  {...field}
                />
              )}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold">
              Seu nome (ou nickname)
            </label>
            <TextField
              type="text"
              placeholder="Como te chamam dentro do game?"
              {...register('name')}
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className=" flex flex-col gap-2">
              <label htmlFor="yearsPlaying" className="font-semibold">
                Joga a quantos anos?
              </label>
              <TextField
                id="yearsPlaying"
                type="number"
                placeholder="Tudo bem ser ZERO"
                {...register('yearsPlaying')}
              />
            </div>

            <div className=" flex flex-col gap-2">
              <label htmlFor="discord" className="font-semibold">
                Qual o seu discord?
              </label>
              <TextField
                id="discord"
                type="text"
                placeholder="Usuario#0000"
                {...register('discord')}
              />
            </div>
          </div>

          <div className="flex gap-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="weekDays" className="font-semibold">
                Quando costuma jogar?
              </label>

              <Controller
                name="weekDays"
                control={control}
                render={({ field }) => (
                  <ToggleGroup.Root
                    type="multiple"
                    className="flex gap-2"
                    value={field.value}
                    onValueChange={field.onChange}
                    defaultValue={[]}
                  >
                    <ToggleGroup.Item
                      value="0"
                      title="Domingo"
                      className={`w-8 h-8 rounded ${
                        field.value?.includes('0')
                          ? 'bg-violet-500'
                          : 'bg-zinc-900'
                      }`}
                    >
                      D
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value="1"
                      title="Segunda"
                      className={`w-8 h-8 rounded ${
                        field.value?.includes('1')
                          ? 'bg-violet-500'
                          : 'bg-zinc-900'
                      }`}
                    >
                      S
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value="2"
                      title="Terça"
                      className={`w-8 h-8 rounded ${
                        field.value?.includes('2')
                          ? 'bg-violet-500'
                          : 'bg-zinc-900'
                      }`}
                    >
                      T
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value="3"
                      title="Quarta"
                      className={`w-8 h-8 rounded ${
                        field.value?.includes('3')
                          ? 'bg-violet-500'
                          : 'bg-zinc-900'
                      }`}
                    >
                      Q
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value="4"
                      title="Quinta"
                      className={`w-8 h-8 rounded ${
                        field.value?.includes('4')
                          ? 'bg-violet-500'
                          : 'bg-zinc-900'
                      }`}
                    >
                      Q
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value="5"
                      title="Sexta"
                      className={`w-8 h-8 rounded ${
                        field.value?.includes('5')
                          ? 'bg-violet-500'
                          : 'bg-zinc-900'
                      }`}
                    >
                      S
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value="6"
                      title="Sábado"
                      className={`w-8 h-8 rounded ${
                        field.value?.includes('6')
                          ? 'bg-violet-500'
                          : 'bg-zinc-900'
                      }`}
                    >
                      S
                    </ToggleGroup.Item>
                  </ToggleGroup.Root>
                )}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="hourStart" className="font-semibold">
              Qual horário do dia?
            </label>
            <div className="grid grid-cols-2 gap-2">
              <TextField
                id="hourStart"
                type="time"
                placeholder="De"
                {...register('hourStart')}
              />
              <TextField
                id="hourEnd"
                type="time"
                placeholder="Até"
                {...register('hourEnd')}
              />
            </div>
          </div>

          <div className="flex gap-2 text-sm items-center">
            <Controller
              name="useVoiceChannel"
              control={control}
              render={({ field }) => (
                <Checkbox
                  {...field}
                  defaultValue={0}
                  onCheckedChange={field.onChange}
                  value={Number(field.value)}
                />
              )}
            />
            Costumo me conectar ao chat de voz
          </div>

          <footer className="mt-4 flex justify-end gap-4">
            <Dialog.Close
              type="button"
              className="h-12 bg-zinc-500 px-5 rounded-md font-semibold hover:bg-zinc-600 transition"
            >
              Cancelar
            </Dialog.Close>
            <button
              type="submit"
              className="h-12 bg-violet-500 px-5 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600 transition"
            >
              <GameController size={24} /> Encontrar duo
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}

export default CreateNewAdModal;
