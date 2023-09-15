import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../../components/Header'
import Home from '../pages/home';
import Nosotros from '../pages/Nosotros';
import Footer from '../../components/Footer';
import Store from '../pages/Store';
import Blog from '../pages/Blog';
import ProductDetail from '../pages/ProductDetail';
import NewsDetail from '../pages/NewsDetail';
import Cart from '../pages/Cart';
import { CartProvider } from '../contexts/CartContext';



function App() {
 
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Nosotros" element={<Nosotros />} />
            <Route path="/Store" element={<Store />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Purchase/:id" element={<ProductDetail />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App
