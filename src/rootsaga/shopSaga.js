import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { REQ_API, reciveApi } from "../action/shop";
import { fetchData } from "../services/shop";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData(action) {
  try {
    //do api call here
    const data = yield call(fetchData);
    // console.log(JSON.stringify(data));
    yield put(reciveApi(data));
  } catch (e) {
    console.log(e);
  }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* mySaga() {
  console.log("insaga");
  yield takeLatest(REQ_API, getApiData);
}
