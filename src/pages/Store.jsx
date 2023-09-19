import { useState, useEffect } from "react";
import ListadoJuegos from "../../components/Listado-juegos";




function Store() {

    async function fecthData() {
      const respuesta = await fetch(
        "https://gamesjson-production.up.railway.app/juegos"
      );
      const resultado = await respuesta.json();
      setJuegos(resultado);
    }

    const [juegos, setJuegos] = useState ([])
  useEffect(() => {
  fecthData()
  
  },[])

  return (
    <main className="container">
      <ListadoJuegos juegos={juegos} />
    </main>
  );
}

export default Store;
