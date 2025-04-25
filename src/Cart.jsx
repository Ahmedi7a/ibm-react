import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css'; // Import the CSS file for styling

function Cart({ cart, setCart }) {
  const navigate = useNavigate();

  const increment = (product) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      )
    );
  };

  const decrement = (product) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id && (item.quantity || 1) > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const deleteItem = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  };

  const totalCost = cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((product, index) => (
            <div key={index} className="cart-item">
              <img src={product.thumbnail} alt={product.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <p>Quantity: {product.quantity || 1}</p>
                <div className="cart-item-actions">
                  <button onClick={() => increment(product)}>+</button>
                  <button onClick={() => decrement(product)}>-</button>
                  <button onClick={() => deleteItem(product)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
          <h2>Total: ${totalCost}</h2>
          <button onClick={() => alert('Coming Soon')}>Checkout</button>
          <button onClick={() => navigate('/products')}>Continue Shopping</button>
        </div>
      )}
    </div>
  );
}

export default Cart;