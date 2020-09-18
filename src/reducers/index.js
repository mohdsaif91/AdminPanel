import { combineReducers } from "redux";

import shop from "./shop";
import reducer from "./reducer";
import login from "./login";

export default combineReducers({
  reducer,
  shop,
  login,
});
