import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../services/api';

import * as CartActions from '../../redux/modules/cart/actions';

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
    dispatch(CartActions.addToCart(product));
    console.log('from homepage: ', product);
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

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    return (amount[product.id] = product.amount);
  }, {})
});

// converte actions do reducer em propriedades do componente
// const mapDispatchToProps = dispatch =>
//   bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, null)(HomePage);
