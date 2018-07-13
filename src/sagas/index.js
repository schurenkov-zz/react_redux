import "regenerator-runtime/runtime";
import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects';
import * as api from '../api/main-api';
const getUsersState = state => state.mainState.users;

function* fetchUsers() {
   try {
      const users = yield call(api.getUsers);
      yield put({type: "USER_FETCH_SUCCEEDED", users: users});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED"});
   }
}

function* mySaga() {
  yield  [
    takeEvery("GET_USERS", fetchUsers),
  ];
}

export default mySaga;
