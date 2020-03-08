import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
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
      case 'REMOVE_FROM_CART':
        return produce(state, draft => {
          const productIndex = draft.findIndex(p => p.id === action.id);
          
          // removendo do array
          if(productIndex >= 0) {
            draft.splice(productIndex, 1)
          }
        })
    default:
      return state;
  }
}

// draft(immer) é uma copia do nosso estado, pra fazer a mutabilidade dele indiretamente
