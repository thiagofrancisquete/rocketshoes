import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD':
      return produce(state, draft => {
        // verifica se o id produto no carrinho tem o id recebido na action
        const productIndex = draft.findIndex(p => p.id === action.product.id);

        // acrescenta +1 se o item ja estiver no carrinho ao inves de criar um novo card
        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          // cria um novo produto no carrinho (novo card)
          draft.push({ ...action.product, amount: 1 });
        }
      });
    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        // removendo do array
        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT': {
      if (action.amount <= 0) return state;

      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0)
          draft[productIndex].amount = Number(action.amount);
      });
    }

    default:
      return state;
  }
}

// draft(immer) é uma copia do nosso estado, pra fazer a mutabilidade dele indiretamente
