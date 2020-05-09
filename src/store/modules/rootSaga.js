import { all } from "redux-saga/effects";
import auth from "./auth/sagas";
import user from "./user/sagas";
import films from "./films/sagas";
import options from "./options/sagas";
export default function* rootSaga() {
  return yield all([auth, user, films,options]);
}
