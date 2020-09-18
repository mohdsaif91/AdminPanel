import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootsaga";

import reducers from "./reducers";

//create saga middleware
const sagamiddleWare = createSagaMiddleware();

//mount it on store
export default createStore(reducers, applyMiddleware(sagamiddleWare));

//then run saga

sagamiddleWare.run(rootSaga);
