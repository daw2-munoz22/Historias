const HistoriaController = {       
    controladorActualizaHistorias: (dataHistoria) => {
        console.log(`ID: ${dataHistoria.id}`);
        console.log('Información de la historia:', dataHistoria);

        if (dataHistoria.id == null) {
            HistoriaController.controladorNuevaHistòria(dataHistoria);
            console.log('hola')
        } else {
            HistoriaController.controladorEditarHistòria(dataHistoria);
            console.log('adios')
        }
    },
    
    controladorNuevaHistòria: async (dataHistoria) => {
        // https://json-server-edgar.vercel.app/historias
        try {            
            const response = await fetch('https://json-server-edgar.vercel.app/historias', {
            /*const response = await fetch('http://localhost:3000/historias', {*/
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'User-Agent': 'Thunder Client (https://www.thunderclient.com)'
                },
                
                body: JSON.stringify(dataHistoria)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const nuevaHistoria = await response.json(); 
            console.log('Historia creada exitosamente:', nuevaHistoria);
        } catch (error) {
            console.error('Error en la creación de la historia:', error);
        }
    },

    controladorEditarHistòria: async (dataHistoria) => {
        console.log('Actualizar historia:', dataHistoria);

        if (dataHistoria != null) {
            try {
                /*const response = await fetch(`http://localhost:3000/historias/${dataHistoria.id}`, {*/
                const response = await fetch(`https://json-server-edgar.vercel.app/historias/${dataHistoria.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataHistoria),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const historiaActualizada = await response.json();
                //setHistorias(prevHistorias => prevHistorias.map(h => h.id === dataHistoria.id ? historiaActualizada : h));

                console.log('Historia actualizada exitosamente:', historiaActualizada);
            } catch (error) {
                console.error('Error en la actualización de la historia:', error);
            }
        } else {
            console.error('dataHistoria es null o undefined');
        }
    },

    controladorBorrarHistoria: async (id) => {
        console.log("ID de la historia a borrar:", id);

        try {
            /*const response = await fetch(`http://localhost:3000/historias/${id}`, {*/
            const response = await fetch(`https://json-server-edgar.vercel.app/historias/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }            
            console.log(`Historia con ID ${id} borrada exitosamente`);
        } catch (error) {
            console.error('Error al borrar la historia:', error);
        }
    }, 
};

export default HistoriaController;
