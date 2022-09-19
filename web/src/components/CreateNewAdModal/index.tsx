import * as Dialog from '@radix-ui/react-dialog';

type CreateNewAdModalProps = {
  toggleModal: () => void;
};

function CreateNewAdModal({ toggleModal }: CreateNewAdModalProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed w-screen h-screen inset-0 bg-[#121214] bg-opacity-40" />
      <Dialog.Content className="bg-[#2A2634] rounded-md py-8 px-10 fixed z-50 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ">
        <Dialog.Title>Publique um anúncio</Dialog.Title>
        <div>
          <p>conteúdo do modal</p>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}

export default CreateNewAdModal;
