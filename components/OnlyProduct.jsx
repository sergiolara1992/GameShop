import { useState } from "react";
import { useCart } from "../src/contexts/CartContext";



/* cart */
const ProductDetails = ({ProductDetail}) => {

  const [cantidad, setCantidad] = useState(0);
  const { addToCart, cart, updateQuantity } = useCart();

  const handleSubmit = e => {
    e.preventDefault();

    if(cantidad < 1) {
      alert("ingresa una cantidad")
      return
    }
      const productToAdd = {
        img: ProductDetail.imagen,
        id: ProductDetail.id,
        name: ProductDetail.nombre,
        price: ProductDetail.precio,
        quantity: cantidad,
      };

        // Verificar si el producto ya está en el carrito
    const existingProduct = cart.find((item) => item.id === ProductDetail.id);

    if (existingProduct) {
      // Si el producto ya está en el carrito, aumenta la cantidad
      updateQuantity(ProductDetail.id, existingProduct.quantity + cantidad);
    } else {

      addToCart(productToAdd);
      alert("Producto agregado al carrito");
    }

  }

   
  return (
    <div className="gridGames container">
      <img
        className="imagen-catalogo"
        src={ProductDetail && ProductDetail.imagen}
      />
      <div>
        <h3 className="titulo-juego">
          {ProductDetail && ProductDetail.nombre}
        </h3>
        <p className="descripcion">
          {ProductDetail && ProductDetail.descripcion}
        </p>
        <p className="precio">${ProductDetail && ProductDetail.precio}</p>



        <form
        onSubmit={handleSubmit} 
        className="form">
          
          <label htmlFor="cantidad">Cantidad</label>

          <select 
          onChange={ e => setCantidad(parseInt(e.target.value))}
          id="cantidad">


            <option value="0">-- Seleccione --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input type="submit" value="Add to cart" />
        </form>
      </div>
    </div>
  );
}

export default ProductDetails
