import * as Dialog from '@radix-ui/react-dialog';
import { GameController } from 'phosphor-react';
import { Input } from '@/components';

type CreateNewAdModalProps = {
  toggleModal: () => void;
};

function CreateNewAdModal({ toggleModal }: CreateNewAdModalProps) {
  const handleCreateNewAd = () => {
    toggleModal();
  };

  return (
    <Dialog.Portal>
      <Dialog.Trigger />
      <Dialog.Overlay className="fixed inset-0 bg-black/60" />
      <Dialog.Content className="fixed w-[480px] bg-[#2A2634] py-8 px-10 text-white rounded-md top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] shadow-lg shadow-black/25">
        <Dialog.Title className="font-black text-3xl">
          Publique um anúncio
        </Dialog.Title>

        <form onSubmit={handleCreateNewAd} className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="game" className="font-semibold">
              Qual o game?
            </label>

            <Input
              id="game"
              type="text"
              placeholder="Selecione o game que deseja jogar"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold">
              Seu nome (ou nickname)
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Como te chamam dentro do game?"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className=" flex flex-col gap-2">
              <label htmlFor="yearsPlaying" className="font-semibold">
                Joga a quantos anos?
              </label>
              <Input
                id="yearsPlaying"
                type="number"
                placeholder="Tudo bem ser ZERO"
              />
            </div>

            <div className=" flex flex-col gap-2">
              <label htmlFor="discord" className="font-semibold">
                Qual o seu discord?
              </label>
              <Input id="discord" type="text" placeholder="Usuario#0000" />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="weekDays" className="font-semibold">
                Quando costuma jogar?
              </label>

              <div className="grid grid-cols-4 gap-2">
                <button
                  type="button"
                  title="Domingo"
                  className="w-8 h-8 rounded bg-zinc-900 "
                >
                  D
                </button>
                <button
                  type="button"
                  title="Segunda"
                  className="w-8 h-8 rounded bg-zinc-900 "
                >
                  S
                </button>
                <button
                  type="button"
                  title="Terça"
                  className="w-8 h-8 rounded bg-zinc-900 "
                >
                  T
                </button>
                <button
                  type="button"
                  title="Quarta"
                  className="w-8 h-8 rounded bg-zinc-900 "
                >
                  Q
                </button>
                <button
                  type="button"
                  title="Quinta"
                  className="w-8 h-8 rounded bg-zinc-900 "
                >
                  Q
                </button>
                <button
                  type="button"
                  title="Sexta"
                  className="w-8 h-8 rounded bg-zinc-900 "
                >
                  S
                </button>
                <button
                  type="button"
                  title="Sábado"
                  className="w-8 h-8 rounded bg-zinc-900 "
                >
                  S
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="hourStart" className="font-semibold">
                Qual horário do dia?
              </label>
              <div className="grid grid-cols-2 gap-2">
                <Input id="hourStart" type="time" placeholder="De" />
                <Input id="hourEnd" type="time" placeholder="Até" />
              </div>
            </div>
          </div>

          <div className="flex gap-2 text-sm">
            <Input type="checkbox" />
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
