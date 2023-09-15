import React, { useEffect, useState } from "react";
import { useCart } from "../contexts/CartContext";
import ProductDetails from "../../components/OnlyProduct";



const Cart = () => {
  const [ total , setTotal ] = useState(0)
  const { cart, removeFromCart, updateQuantity } = useCart(); // Obtén el estado del carrito desde el contexto del carrito

  useEffect(() => {
  const calculoTotal = cart.reduce(
    (total, ProductDetail) =>
      total + (ProductDetail.quantity * ProductDetail.price),
    0
  );
     setTotal(calculoTotal)
   
  }, [cart])

    const handleRemoveFromCart = (productId) => {
      removeFromCart(productId);
    };

     const handleQuantityChange = (productId, newQuantity) => {
       updateQuantity(productId, newQuantity);
     };

  
  

  return (
    <div className="container">
      <h1 className="heading">Cart</h1>

      <div className="cart">
        <div>
          <h1>Articulos</h1>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <div className="container card-container">
                  <div >
                    <img className="juego-card" src={item.img} alt="" />
                  </div>{" "}
                  <div>
                    <h3>{item.name}</h3>
                    <p>Cantidad:</p>

                    <select
                      value={item.quantity}
                      onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                    >
                      <option value="0">-- Seleccione --</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>

                    <p>Precio: ${item.price}</p>
                    <p>
                      Subtotal: $ <span>{item.quantity * item.price}</span>
                    </p>
                  </div>
                  <button
                    className="btn_eliminar"
                    type="button"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    X
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="resume">
          <h3>Resumen del pedido</h3>
          <p className="full">Total a pagar: ${total}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
