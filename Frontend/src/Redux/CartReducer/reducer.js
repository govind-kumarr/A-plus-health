const initialState = {
  cart: [],
  isLoading: false,
  isErro: false,
};

const reducer = (state = initialState, action) => {
  console.log("reducer get called", action);
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      payload["qty"] = 1;
      return { ...state, cart: [...state.cart, payload] };
    case "REMOVE_FROM_CART":
      let newCart = state.cart.filter((product) => product.id !== payload);
      return { ...state, cart: newCart };
    case "INCREASE_QTY":
      let increased = state.cart.map((product) => {
        if (product.id === payload) product["qty"]++;
        return product;
      });
      return { ...state, cart: increased };
    case "DECREASE_QTY":
      let decreased = state.cart.map((product) => {
        if (product.id === payload && product["qty"] > 1) product["qty"]--;
        return product;
      });
      return { ...state, cart: decreased };
    default:
      return state;
  }
};

export default reducer;
