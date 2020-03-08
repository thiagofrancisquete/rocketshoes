import React, { useEffect, useState } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../services/api';

import { ProductList } from './styles';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product
      }));

      setProducts(data);
    }
    loadProducts();
  }, []);

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt="tenis" />
          <strong>{product.title}</strong>
          <span>r$ {product.price}</span>

          <button>
            <div>
              <MdAddShoppingCart size={16} color="#fff" />
            </div>

            <span>Adicionar ao carrinho</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
};

export default HomePage;
