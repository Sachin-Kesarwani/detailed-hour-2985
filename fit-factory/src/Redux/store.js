import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as AdminReducer } from "./AdminRedux/reducer";
import { reducer as CartReducer } from "./CartRedux/reducer";
import { reducer as ProductReducer } from "./ProductsRedux/reducer";
import thunk from "redux-thunk";
let rootreducer = combineReducers({
  AdminReducer,
  CartReducer,
  ProductReducer,
});

let store = legacy_createStore(rootreducer, applyMiddleware(thunk));

export { store };
