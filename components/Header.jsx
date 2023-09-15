
import { Link } from 'react-router-dom';
import Logo from '../public/img/logo.png'
import { BsCart4 } from "react-icons/bs"



const Header = () => {
  return (
    <header className="header">
      <div className="container barra">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/Nosotros">We are GameShop</Link>
          <Link to="/Store">Store</Link>
          <Link to="/blog">News</Link>
        </nav>

        <div>
          <Link to="/Cart">
            <BsCart4 className="icono" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header
