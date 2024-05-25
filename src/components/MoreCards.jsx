
import { useGlobalContext } from '../contexts/globalContext'
import { HistoryCard } from './HistoryCard'


export function Cards(){
  const {historias} = useGlobalContext();

    return(
    <div className="mx-auto max-w-[1100px] gap-5 grid grid-cols-12">
        {
          historias.map((historia, index) => (
            <HistoryCard
              key={index}
              titulo={historia.titulo}
              fecha={historia.fecha}
              experiencia={historia.experiencia}
              comentario={historia.comentario}
              imagen={historia.imagen}
            />
          )
        )
      }
    </div>
  )
}