import { useState, useEffect, useContext, createContext } from "react";

// Creación del contexto
const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [historias, setHistorias] = useState([]);
    const [dataHistoria, setDataHistoria] = useState(); 

    // useEffect para obtener los datos de la API al inicializar el componente
    useEffect(() => {
        const fetchHistorias = async () => {
            try {
                const response = await fetch('http://localhost:3000/historias');
                const data = await response.json();
                setHistorias(data);
            } catch (error) {
                console.error('Error fetching historias:', error);
            }
        };
        
        fetchHistorias();
    }, []); // El array vacío [] asegura que este efecto solo se ejecute una vez al montar el componente

    return (
        <GlobalContext.Provider value={{ historias, setHistorias, dataHistoria, setDataHistoria }}>
            {children}
        </GlobalContext.Provider>
    );    
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}
