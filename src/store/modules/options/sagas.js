import { takeLatest, call, put, all, delay } from "redux-saga/effects";
import { api } from "../../../service/api";
import ENV from "../../../../env.json";

import {
  changeOptionSuccess,
  getGenresSuccess,
  changePageRequest,
  changeCategoryRequest,
} from "./actions";
import { options } from "../../../util";
export function* changeOptionRequest({ payload }) {
  try {
    const { option } = payload;
    let optionValue = options.find((value) => {
      return value.id === option;
    });
    const { data } = yield call(
      api.get,
      `genre/${option}/list?api_key=${ENV.MOVIE_DB_API_KEY}&language=pt-br`
    );
    yield put(getGenresSuccess(data["genres"]));
    yield put(changePageRequest(1));
    yield put(changeCategoryRequest("popular"));
    yield put(changeOptionSuccess(optionValue));
  } catch (erro) {
    console.log(erro);
  }
}
// export function* getGenresRequest({ payload }) {
//   try {
//     const { valueSelected } = payload;
//   } catch (erro) {
//     console.log(erro);

//     // toast.error("Erro na requisição");
//   }
// }
export default all([
  takeLatest("@option/CHANGE_OPTION_REQUEST", changeOptionRequest),
]);
