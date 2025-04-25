import React from 'react';
import './ProductListing.css';

const products = [
  { id: 1, name: 'Fiddle Leaf Fig', price: 25, category: 'Large Plants', thumbnail: 'https://picsum.photos/200/300?random=1' },
  { id: 2, name: 'Snake Plant', price: 15, category: 'Medium Plants', thumbnail: 'https://picsum.photos/200/300?random=2' },
  { id: 3, name: 'Pothos', price: 10, category: 'Small Plants', thumbnail: 'https://picsum.photos/200/300?random=3' },
  { id: 4, name: 'Monstera', price: 30, category: 'Large Plants', thumbnail: 'https://picsum.photos/200/300?random=4' },
  { id: 5, name: 'Succulent', price: 8, category: 'Small Plants', thumbnail: 'https://picsum.photos/200/300?random=5' },
  { id: 6, name: 'Peace Lily', price: 20, category: 'Medium Plants', thumbnail: 'https://picsum.photos/200/300?random=6' },
];

function ProductListing({ cart, setCart }) {
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="product-listing">
      <h1>Our Plants</h1>
      <div className="categories">
        {['Large Plants', 'Medium Plants', 'Small Plants'].map((category) => (
          <div key={category} className="category">
            <h2>{category}</h2>
            <div className="products">
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                  <div key={product.id} className="product">
                    <img src={product.thumbnail} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                    <button
                      onClick={() => addToCart(product)}
                      disabled={cart.some((item) => item.id === product.id)}
                    >
                      {cart.some((item) => item.id === product.id) ? 'Added' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListing;