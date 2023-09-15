import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="footer">
      <div className="container contenido">
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/Nosotros">We are GameShop</Link>
          <Link to="/Store">Store</Link>
          <Link to="/blog">News</Link>
        </nav>

        <p className="copyright">
          Todos los derechos reservados {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
