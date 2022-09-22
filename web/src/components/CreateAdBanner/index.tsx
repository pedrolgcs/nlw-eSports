import * as React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { MagnifyingGlassPlus } from 'phosphor-react';
import { CreateNewAdModal } from '@/components';

function CreateAdBanner() {
  const [visibleCreateNewAdModal, setVisibleCreateNewAdModal] =
    React.useState(false);

  const toggleVisibleCreateNewAdModal = () => {
    setVisibleCreateNewAdModal(!visibleCreateNewAdModal);
  };

  return (
    <div className="bg-[#2a2634] px-8 py-6 mt-8 self-stretch rounded-lg border-t-4 border-gradient-r-nwl-gradient flex items-center justify-between">
      <div className="flex flex-col">
        <strong className="text-2xl text-white font-black">
          Não encontrou seu duo?
        </strong>
        <span className="text-zinc-400">
          Publique um anúncio para encontrar novos players!
        </span>
      </div>

      <Dialog.Root
        open={visibleCreateNewAdModal}
        onOpenChange={setVisibleCreateNewAdModal}
      >
        <Dialog.Trigger
          onClick={toggleVisibleCreateNewAdModal}
          className="py-3 px-4 bg-violet-500 text-white flex gap-3 rounded-md hover:bg-violet-600 transition duration-300"
        >
          <MagnifyingGlassPlus weight="light" size={24} />
          Publicar anúncio
        </Dialog.Trigger>

        <CreateNewAdModal toggleModal={toggleVisibleCreateNewAdModal} />
      </Dialog.Root>
    </div>
  );
}

export default CreateAdBanner;
