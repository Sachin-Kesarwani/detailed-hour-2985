import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import { reducer as AdminReducer } from "./AdminRedux/reducer";
import { reducer as CartReducer } from "./CartRedux/reducer";
import { reducer as ProductReducer } from "./ProductsRedux/reducer";
import { reducer as HomePageReducer } from "./HomePageRedux/reducer";
import thunk from "redux-thunk";

let rootreducer = combineReducers({
  AdminReducer,
  CartReducer,
  ProductReducer,
  HomePageReducer,
});

let composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = legacy_createStore(
  rootreducer,
  composeEnhancer(applyMiddleware(thunk))
);

export { store };
