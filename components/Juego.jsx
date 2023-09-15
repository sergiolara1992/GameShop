import { Link, useParams } from "react-router-dom";




export default function Juego({ juego }) {

  const params = useParams()
  console.log(params);



  return (
    <div className="juego">
      <img
        className="imagen-catalogo"
        src={juego.imagen}
        alt="Imagen juego"
      />
      <div className="contenido">
        <h3 className="titulo-juego">{juego.nombre}</h3>
        <p className="descripcion">{juego.descripcion}</p>
        <p className="precio">${juego.precio}</p>

        <Link className="enlace" to={`/purchase/${juego.id}`}>
          Purchase
        </Link>
      </div>
      
    </div>
  );
}
