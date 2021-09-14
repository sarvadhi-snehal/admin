import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer/loginReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
const initialState = {
  token: null,
  isAuthenticated: false,
  loading: true,
  user: null,
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
export * from "./actions/action";
