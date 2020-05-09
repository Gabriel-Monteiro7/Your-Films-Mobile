export function getFilmsRequest(valueSelected, page, genres, more) {
  return {
    type: "@films/GET_FILMS_REQUEST",
    payload: { valueSelected, page, genres, more },
  };
}
export function getDetailRequest(valueSelected, id) {
  return {
    type: "@films/GET_DETAIL_REQUEST",
    payload: { valueSelected, id },
  };
}
export function getDetailSucess(film) {
  return {
    type: "@films/GET_DETAIL_SUCCESS",
    payload: { film },
  };
}
export function getFilmsSearchRequest(
  valueSelected,
  page,
  genres,
  more,
  query
) {
  return {
    type: "@films/GET_FILMS_SEARCH_REQUEST",
    payload: { valueSelected, page, genres, more, query },
  };
}
export function getFilmsSuccess(films) {
  return {
    type: "@films/GET_FILMS_SUCCESS",
    payload: { films },
  };
}
export function getMoreFilmsSuccess(films) {
  return {
    type: "@films/GET_MORE_FILMS_SUCCESS",
    payload: { films },
  };
}
export function addFavoriteRequest(favorite, option) {
  return {
    type: "@films/ADD_FAVORITE_REQUEST",
    payload: { favorite, option },
  };
}
export function removeFavoriteRequest(favorite, option) {
  return {
    type: "@films/REMOVE_FAVORITE_REQUEST",
    payload: { favorite, option },
  };
}
export function setVideoRequest(id, valueSelected) {
  return {
    type: "@films/SET_VIDEO_REQUEST",
    payload: { id, valueSelected },
  };
}
export function setVideoSuccess(video) {
  return {
    type: "@films/SET_VIDEO_SUCCESS",
    payload: { video },
  };
}
