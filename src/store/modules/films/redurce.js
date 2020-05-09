import produce from "immer";
const INITIAL_STATE = {
  films: [],
  film: {},
  favorite: [],
  video: "",
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    let { payload } = action;
    switch (action.type) {
      case "@films/GET_FILMS_REQUEST":
        break;
      case "@films/GET_FILMS_SEARCH_REQUEST":
        break;
      case "@films/GET_FILMS_SUCCESS":
        draft.films = payload.films;
        break;
      case "@films/GET_DETAIL_REQUEST":
        break;
      case "@films/GET_DETAIL_SUCCESS":
        draft.film = payload.film;
        break;
      case "@films/GET_MORE_FILMS_SUCCESS":
        draft.films.push(...payload.films);
        break;
      case "@films/REMOVE_FAVORITE_REQUEST":
        draft.favorite = draft.favorite.filter((value) => {
          return value.data.id === payload.favorite.id &&
            payload.option === value.option
            ? false
            : true;
        });
        break;
      case "@films/ADD_FAVORITE_REQUEST":
        draft.favorite.push({ data: payload.favorite, option: payload.option });
        break;
      case "@films/SET_VIDEO_REQUEST":
        break;
      case "@films/SET_VIDEO_SUCCESS":
        draft.video = payload.video;
        break;
      default:
    }
  });
}
