import React, { useEffect, useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Textarea  } from "@nextui-org/react";
import { Calendar, Pencil, Plus, Image } from "lucide-react";
import { useGlobalContext } from '../contexts/globalContext';
import HistoriaController from '../controller/HistoriaController';

export default function FormularioModal() {
    const { dataHistoria, setDataHistoria } = useGlobalContext()

    function controladorFormHistoria(e) {
        const { name, value } = e.target;
        setDataHistoria(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }
    
    return (
        <ModalContent>
            {(onClose) => (
                <>
                    <ModalHeader className="flex flex-col gap-1">{dataHistoria ? `Editar Historia "${dataHistoria.titulo}"` : 'Nueva historia ejemplo'}</ModalHeader>
                    <ModalBody>
                        <Input
                            className='mb-3'
                            label="Fecha"
                            placeholder="Selecciona una fecha"
                            endContent={<Calendar className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                            name="fecha"
                            value={dataHistoria ? dataHistoria.fecha : ''}
                            onChange={controladorFormHistoria}
                        />
                        <Input
                            className='mb-3'
                            label="Título"
                            placeholder="Introduce el título"
                            endContent={<Pencil className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                            name="titulo"
                            value={dataHistoria ? dataHistoria.titulo : ''}
                            onChange={controladorFormHistoria}
                        />
                        <Textarea
                            className='mb-3'
                            label="Experiencia"
                            placeholder="Introduce la experiencia"
                            minRows={5}
                            name="experiencia"
                            value={dataHistoria ? dataHistoria.experiencia : ''}
                            onChange={controladorFormHistoria}
                        />
                        <Textarea
                            className='mb-3'
                            label="Comentario"
                            placeholder="Introduce un comentario"
                            minRows={5}
                            name="comentario"
                            value={dataHistoria ? dataHistoria.comentario : ''}
                            onChange={controladorFormHistoria}
                        />
                        <Input
                            className='mb-3'
                            label="Imagen"
                            placeholder="URL imagen"
                            endContent={<Image className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                            name="imagen"
                            value={dataHistoria ? dataHistoria.imagen : ''}
                            onChange={controladorFormHistoria}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="flat" onPress={onClose}>
                            Cerrar
                        </Button>
                        <Button color={dataHistoria ? "success" : 'primary'} onPress={() => {HistoriaController.controladorActualizaHistorias(dataHistoria); onClose();}}>
                            {dataHistoria ? 'Actualizar' : 'Crear historia'}
                        </Button>
                    </ModalFooter>
                </>
            )}
        </ModalContent>
    )
}
