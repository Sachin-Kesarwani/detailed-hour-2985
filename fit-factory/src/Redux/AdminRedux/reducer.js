import * as types from "./actiontype";

let initialstate = {
  products: [],
  users: [],
  admins:[],
  totalProducts: 3483,
  totalUser: 23,
  isLoading: false,
  isError: false,
};

export function reducer(oldState = initialstate,action) {
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
    case types.Error: {
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };
    }
   
    default: {
      return oldState;
    }
  }
}
