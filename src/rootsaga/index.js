import { fork, spawn } from "redux-saga/effects";

import shopSaga from "./shopSaga";
// import LoginSaga from "./LoginSaga";

export default function* rootSaga() {
  yield spawn(shopSaga);
  // yield fork(LoginSaga);
}
