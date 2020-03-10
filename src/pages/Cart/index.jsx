import React from 'react';
import { connect } from 'react-redux';
import { Container, ProductTable, Total } from './styles';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from 'react-icons/md';

import * as CartActions from '../../redux/modules/cart/actions';
import { bindActionCreators } from 'redux';

const CartPage = ({ cart, removeFromCart }) => {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormated}</span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button">
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>r$ 258,80</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() =>
                    removeFromCart(product.id)
                  }
                >
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>Total</span>
          <strong>r$ 129,90</strong>
        </Total>
      </footer>
    </Container>
  );
};

// pega infos do state e mapeia no componente via props
const mapStateToProps = state => ({
  cart: state.cart
});

// pega as actions e passa pra propriedades
const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
