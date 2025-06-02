import React from 'react';

const products = [
  { id: 1, name: 'Organic Apple', price: 2.5 },
  { id: 2, name: 'Organic Banana', price: 1.8 },
  { id: 3, name: 'Organic Carrot', price: 1.2 },
];

export default function ProductList() {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((prod) => (
          <li key={prod.id}>
            {prod.name} - ${prod.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}