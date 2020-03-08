import React, { useEffect, useState } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../services/api';

import { connect } from 'react-redux';

import { ProductList } from './styles';

const HomePage = ({ dispatch }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await api.get('products');
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadProducts();
  }, []);

  function handleAddProduct(product) {
    dispatch({
      type: 'ADD_TO_CART',
      product
    })
  }

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt="tenis" />
          <strong>{product.title}</strong>
          <span>r$ {product.price}</span>

          <button onClick={() => handleAddProduct(product)}>
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

export default connect()(HomePage);
