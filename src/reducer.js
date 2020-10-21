// This is the store
export const initialState = {
  basket: [],
  user: null,
  search: ''
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

// state is anything inside the data layer
// actions used for manipulating the state, i.e. add to basket
const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_USER':
      if (!action.user) {
        return initialState;
      } else {
        return {
          ...state,
          user: action.user
        }
      }
    case 'SET_INPUT':
      return {
        ...state,
        search: action.item
      }
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item]
      };
    case 'REMOVE_FROM_BASKET':
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if(index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cannot remove product (id: ${action.id})`
        );
      }
      return {...state, basket: newBasket};
    default:
      return state;
  }
}

export default reducer;
