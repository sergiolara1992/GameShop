import { Link, } from "react-router-dom";

export default function Post({ post }) {


  return (
    <div className="post">
      <img className="imagen-post" src={post.imagen} alt="Imagen noticias" />
      <div className="contenido">
        <h3 className="titulo-post">{post.nombre}</h3>
        <p className="descripcion-post">{post.descripcion}</p>

        <Link className="enlace-blog" to={`/news/${post.id}`}>
          Read
        </Link>
      </div>
    
    </div>
  );
}


