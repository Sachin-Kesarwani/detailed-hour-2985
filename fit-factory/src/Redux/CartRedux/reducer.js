import {
  AddInCart,
  AddInWishList,
  Loading,
  Error,
  DelfromWishlist,
  GetwishlistData,
} from "./actiontype";

let inistate = {
  cart: [],
  wishlist: [],
  isLoading: false,
  isError: false,
};

export function reducer(state = inistate, action) {
  console.log(action);
  switch (action.type) {
    case Loading: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case AddInCart: {
      return {
        ...state,
        isLoading: false,
        cart: [...state.cart, action.payload],
      };
    }
    case Error: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case AddInWishList: {
      return {
        ...state,
      
        isLoading: false,
      };
    }
    case DelfromWishlist: {
      return {
        ...state,
        wishlist: state.wishlist?.map((e) => e.Position !== action.payload),
      };
    }
case(GetwishlistData):{
  return {
    ...state,wishlist:action.payload
  }
}
    default: {
      return state;
    }
  }
}
