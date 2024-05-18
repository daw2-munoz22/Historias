
import { HistoryCard } from './HistoryCard'


export function Cards(){
  const historias = [
    {
          titulo:"VIAJE A NEPAL",
          fecha:"Agosto de 2024",
          comentario:"Una aventura alucinante! 17 días de viaje mochilero por un paraiso. Recorrimos todo el norte de Nepai caminando...",
          imagen:"https://blog.localadventures.mx/wp-content/uploads/2023/04/hermosas-montanas-ratchaprapha-dam-parque-nacional-khao-sok-provincia-surat-thani-tailandia-scaled.jpg"
        },
        {
          titulo:"VIAJE A NEPAL",
          fecha:"Agosto de 2024",
          comentario:"Una aventura alucinante! 17 días de viaje mochilero por un paraiso. Recorrimos todo el norte de Nepai caminando...",
          imagen:"https://blog.localadventures.mx/wp-content/uploads/2023/04/hermosas-montanas-ratchaprapha-dam-parque-nacional-khao-sok-provincia-surat-thani-tailandia-scaled.jpg"
        },
        {
          titulo:"VIAJE A NEPAL",
          fecha:"Agosto de 2024",
          comentario:"Una aventura alucinante! 17 días de viaje mochilero por un paraiso. Recorrimos todo el norte de Nepai caminando...",
          imagen:"https://blog.localadventures.mx/wp-content/uploads/2023/04/hermosas-montanas-ratchaprapha-dam-parque-nacional-khao-sok-provincia-surat-thani-tailandia-scaled.jpg"
        },
        {
          titulo:"VIAJE A NEPAL",
          fecha:"Agosto de 2024",
          comentario:"Una aventura alucinante! 17 días de viaje mochilero por un paraiso. Recorrimos todo el norte de Nepai caminando...",
          imagen:"https://blog.localadventures.mx/wp-content/uploads/2023/04/hermosas-montanas-ratchaprapha-dam-parque-nacional-khao-sok-provincia-surat-thani-tailandia-scaled.jpg"
        },
        {
          titulo:"VIAJE A NEPAL",
          fecha:"Agosto de 2024",
          comentario:"Una aventura alucinante! 17 días de viaje mochilero por un paraiso. Recorrimos todo el norte de Nepai caminando...",
          imagen:"https://blog.localadventures.mx/wp-content/uploads/2023/04/hermosas-montanas-ratchaprapha-dam-parque-nacional-khao-sok-provincia-surat-thani-tailandia-scaled.jpg"
        }
      ]

    return(
    <div className="mx-auto max-w-[1100px] gap-5 grid grid-cols-12">
        {
          historias.slice(0, 5).map((historia, index) => (
            <HistoryCard
              key={index}
              titulo={historia.titulo}
              fecha={historia.fecha}
              comentario={historia.comentario}
              imagen={historia.imagen}
            />
          )
        )
      }
    </div>
  )
}