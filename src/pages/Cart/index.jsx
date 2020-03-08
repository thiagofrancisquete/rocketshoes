import React from 'react';
import { Container, ProductTable, Total } from './styles';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from 'react-icons/md';

const CartPage = () => {
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
          <tr>
            <td>
              <img
                src="https://t-static.dafiti.com.br/QPqjAj3BuTa2BF7e-a8Roez8kkQ=/fit-in/430x623/static.dafiti.com.br/p/adidas-t%c3%aanis-casual-adidas-nmd-branco-4742-5883725-2-zoom.jpg"
                alt="tenis"
              />
            </td>
            <td>
              <strong>Tenis muito massa</strong>
              <span>r$ 129,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>r$ 258,80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
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

export default CartPage;
