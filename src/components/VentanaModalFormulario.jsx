import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
import { Calendar, Pencil, Plus, Image } from "lucide-react";


export default function FormularioModal(){
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
        <Button  onPress={onOpen} className="bg-success h-20 rounded-full shadow-large">
            <Plus className="w-12 h-12 text-black font-bold"/>
        </Button>
      
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Editar Historia "Historia sin título"</ModalHeader>
              <ModalBody>

              <Input
                  endContent={
                    <Pencil className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Título"
                  placeholder="Título de la historia"
                  variant="bordered"
                />

                <Input
                  autoFocus
                  endContent={
                    <Calendar className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Fecha"
                  placeholder="Ejemplo Marzo de 2024"
                  variant="bordered"
                />
                
                <Input
                  label="Experiencia"
                  placeholder="Describe tu experiencia"
                />
                
                <Input
                  label="Comentarios"
                  placeholder="Escribe Comentarios"
                />

                <Input
                  endContent={
                    <Image className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Imagen"
                  placeholder="Editar Imagen"
                  variant="bordered"
                />
                
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="success" onPress={onClose}>
                  Editar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}