import * as types from "./actiontype";

let initialstate = {
  products: [],
  users: [],
  admins: [],
  totalProducts: 3483,
  totalUser: 23,
  isLoading: false,
  isError: false,
};

export function reducer(oldState = initialstate, action) {
  switch (action.type) {
    case types.Loading: {
      return {
        ...oldState,
        isLoading: true,
      };
    }
    case types.GetProducts: {
      return {
        ...oldState,
        isLoading: false,
        products: action.payload,
      };
    }
    case types.GetUsers: {
      return {
        ...oldState,
        isLoading: false,
        users: action.payload,
      };
    }
    case types.GetAdmins: {
      return {
        ...oldState,
        isLoading: false,
        admins: action.payload,
      };
    }
    case types.DelelteProduct: {
      return {
        ...oldState,
        products: oldState.products?.map((i) => i.id !== action.payload),
      };
    }
    case types.EditProduct: {
      return {
        ...oldState,
        products: oldState.products?.map((i) =>
          i.id === action.payload.id ? action.payload.obj : i
        ),
      };
    }
    case types.AddProduct: {
      return {
        ...oldState,
        isLoading: false,
        products: [action.payload, ...oldState.products],
      };
    }
    case types.Error: {
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };
    }
    case types.TotalProductsadd: {
      return {
        ...oldState,
        totalProducts: oldState.totalProducts + 1,
      };
    }
    case types.TotalProductsless: {
      return {
        ...oldState,
        totalProducts: oldState.totalProducts - 1,
      };
    }
    case types.TotalUsers: {
      return {
        ...oldState,
        totalUser: oldState.totalUser + 1,
      };
    }

    default: {
      return oldState;
    }
  }
}
