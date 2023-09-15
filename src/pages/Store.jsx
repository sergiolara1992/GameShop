import { useState, useEffect } from "react";
import ListadoJuegos from "../../components/Listado-juegos";




function Store() {

    async function fecthData() {
      const respuesta = await fetch("http://localhost:3000/juegos");
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
