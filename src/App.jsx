import { Button, Modal, useDisclosure } from '@nextui-org/react'
import { Plus } from 'lucide-react';
import { Cards } from "./components/MoreCards";
import FormularioModal from "./components/VentanaModalFormulario";
import { useGlobalContext } from "./contexts/globalContext";



export default function App() {
  

  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const { setDataHistoria } = useGlobalContext()

  function controladorEditarHistoria() {
    setDataHistoria(0)
    onOpen()
  }

  return (
    <>
      <h1 className="text-black text-center text-4xl font-bold py-10">Mis Historias</h1>
      <Cards />
      <div className="fixed right-14 bottom-14">
        <Button color='success' className="h-20 rounded-full shadow-large" onClick={controladorEditarHistoria}>
          <Plus className="w-12 h-12 text-black font-bold"/>
        </Button>
        <Modal
            isOpen={isOpen} 
            onOpenChange={onOpenChange}
            placement="top-center"
        >
          <FormularioModal />
        </Modal>
      </div>
    </>
  )
}