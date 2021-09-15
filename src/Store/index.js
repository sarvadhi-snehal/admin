import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer/loginReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
  reducer,

  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
export * from "./actions/action";
