import { takeLatest, call, put, all, delay } from "redux-saga/effects";
import ENV from "../../../../env.json";
import { getMovies } from "../../../service/api";
// import history from "../../../service/history";

import {
  getFilmsSuccess,
  getMoreFilmsSuccess,
  getDetailSucess,
  setVideoSuccess,
} from "./actions";
import { changePageRequest, changeLoadRequest } from "../options/actions";

import { api } from "../../../service/api";
import { setFilme, setFilmeDetail, setVideo } from "../../../util";

export function* getFilms({ payload }) {
  try {
    const { valueSelected, page, genres, more } = payload;
    let { data } = yield call(
      api.get,
      `${valueSelected.option.id}/${valueSelected.category}?page=${page}&api_key=${ENV.MOVIE_DB_API_KEY}&language=pt-br`
    );
    data = setFilme(data["results"], genres);
    if (more === true) yield put(getMoreFilmsSuccess(data));
    else {
      yield put(changeLoadRequest(true));
      yield put(getFilmsSuccess(data));
      yield delay(1000);
    }
    if (data.length === 0) yield put(changeLoadRequest(null));
    else yield put(changeLoadRequest(false));
  } catch (erro) {
    console.log(erro);
  }
}
export function* getFilmsSearch({ payload }) {
  try {
    const { valueSelected, page, genres, more, query } = payload;
    let { data } = yield call(
      api.get,
      `search/${valueSelected.option.id}?api_key=${ENV.MOVIE_DB_API_KEY}&query=${query}&page=${page}&language=pt-br`
    );
    data = setFilme(data["results"], genres);

    if (more === true) {
      yield put(getMoreFilmsSuccess(data));
    } else {
      yield put(changeLoadRequest(true));
      yield put(getFilmsSuccess(data));
      yield delay(1000);
    }
    if (data.length === 0) yield put(changeLoadRequest(null));
    else yield put(changeLoadRequest(false));
  } catch (erro) {
    console.log(erro);
  }
}
export function* getFilmDetail({ payload }) {
  try {
    const { valueSelected, id } = payload;
    let { data } = yield call(
      api.get,
      `${valueSelected.option.id}/${id}?api_key=${ENV.MOVIE_DB_API_KEY}&language=pt-br`
    );
    data = yield setFilmeDetail(data, valueSelected);
    yield put(getDetailSucess(data));
  } catch (erro) {
    console.log(erro);
  }
}
export function* setVideoRequest({ payload }) {
  try {
    const { id, valueSelected } = payload;
    let { data } = yield call(
      api.get,
      `${valueSelected.option.id}/${id}/videos?api_key=${ENV.MOVIE_DB_API_KEY}`
    );
    let key = data["results"][0]?.key;
    data =
      key === undefined
        ? null
        : `https://www.youtube.com/embed/${key}?autoplay=1`;
    yield put(setVideoSuccess(data));
  } catch (erro) {
    console.log(erro);
  }
}
export default all([
  takeLatest("@films/GET_FILMS_REQUEST", getFilms),
  takeLatest("@films/GET_FILMS_SEARCH_REQUEST", getFilmsSearch),
  takeLatest("@films/GET_DETAIL_REQUEST", getFilmDetail),
  takeLatest("@films/SET_VIDEO_REQUEST", setVideoRequest),
]);
