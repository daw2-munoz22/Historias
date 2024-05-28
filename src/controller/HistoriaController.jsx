const HistoriaController = {
    controladorActualizaHistorias: (dataHistoria) => {
        console.log(`ID: ${dataHistoria.id}`);
        console.log('Información de la historia:', dataHistoria);
        
        if (dataHistoria.id == null) {            
            HistoriaController.controladorNuevaHistòria(dataHistoria);
        } else {            
            HistoriaController.controladorEditarHistòria(dataHistoria);
        }
    },    
    controladorNuevaHistòria: (dataHistoria) => {

    },
    controladorEditarHistòria : (dataHistoria) => {
        console.log('Añadir nueva historia:', dataHistoria);
               
        if(dataHistoria != null){

            const options = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataHistoria),
            };

            fetch(`https://localhost:3000/historias/${dataHistoria.id}`, options)
            .then(data => {
                if (!data.ok) {
                    throw Error(data.status);
                }
                return data.json();
            }).then(update => {
                console.log(update);                      
            }).catch(e => {    
                console.log(e);      
            });  

        }
    },

    controladorBorrarHistoria: (id) => {
        console.log("ID de la historia a borrar:", id);
    },
    controladorObtenerHistorias: async () => {
        //TODO
    }    
};

export default HistoriaController;