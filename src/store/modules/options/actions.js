export function changePageRequest(page) {
  return {
    type: "@option/CHANGE_PAGE_REQUEST",
    payload: { page },
  };
}
export function changeCategoryRequest(category) {
  return {
    type: "@option/CHANGE_CATEGORY_REQUEST",
    payload: { category },
  };
}
export function changeLoadRequest(load) {
  return {
    type: "@option/CHANGE_LOAD_REQUEST",
    payload: { load},
  };
}
export function changeOptionRequest(option) {
  return {
    type: "@option/CHANGE_OPTION_REQUEST",
    payload: { option },
  };
}
export function changeOptionSuccess(option) {
  return {
    type: "@option/CHANGE_OPTION_SUCCESS",
    payload: { option },
  };
}
// export function getGenresRequest(valueSelected) {
//   return {
//     type: "@option/GET_GENRES_REQUEST",
//     payload: { valueSelected },
//   };
// }
export function getGenresSuccess(genres) {
  return {
    type: "@option/GET_GENRES_SUCCESS",
    payload: { genres },
  };
}
