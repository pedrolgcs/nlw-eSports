import * as React from 'react';
import { MagnifyingGlassPlus } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';
import { GameCard, CreateNewAdModal } from '@/components';
import { useGamesQuery } from '@/hooks/queries';

function Home() {
  const [visibleCreateNewAdModal, setVisibleCreateNewAdModal] =
    React.useState(false);

  const toggleVisibleCreateNewAdModal = () => {
    setVisibleCreateNewAdModal(!visibleCreateNewAdModal);
  };

  const { data: games } = useGamesQuery();

  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20 px-10">
      <img src="images/logo.svg" alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu
        <span className="bg-nwl-gradient bg-clip-text text-transparent px-2">
          duo
        </span>
        está aqui
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games?.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </div>

      <div className="bg-[#2a2634] px-8 py-6 mt-8 self-stretch rounded-lg border-t-4 border-gradient-r-nwl-gradient flex items-center justify-between">
        <div className="flex flex-col">
          <strong className="text-2xl text-white font-black">
            Não encontrou seu duo?
          </strong>
          <span className="text-zinc-400">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>

        <button
          onClick={toggleVisibleCreateNewAdModal}
          className="py-3 px-4 bg-violet-500 text-white flex gap-3 rounded-md hover:bg-violet-600 transition duration-300"
        >
          <MagnifyingGlassPlus weight="light" size={24} />
          Publicar anúncio
        </button>
      </div>

      <Dialog.Root
        open={visibleCreateNewAdModal}
        onOpenChange={toggleVisibleCreateNewAdModal}
      >
        <CreateNewAdModal toggleModal={toggleVisibleCreateNewAdModal} />
      </Dialog.Root>
    </div>
  );
}

export default Home;
