
import { Cards } from "./components/MoreCards";
import FormularioModal from "./components/VentanaModalFormulario";




export default function App() {
  

  return (
    <>
      <h1 className="text-primary text-center text-4xl font-bold py-10">Mis Historias</h1>
      <Cards />
      <div className="fixed right-14 bottom-14">
        <FormularioModal />
      </div>
    </>
  );
}