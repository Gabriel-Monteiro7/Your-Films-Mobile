import produce from "immer";
import { options } from "../../../util";

const INITIAL_STATE = {
  valueSelected: { option: options[0], category: "popular" },
  page: 1,
  query: "",
  genres: [],
  load: true,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    let { payload } = action;
    switch (action.type) {
      case "@option/CHANGE_PAGE_REQUEST":
        draft.page = payload.page;
        break;
      case "@option/CHANGE_CATEGORY_REQUEST":
        draft.valueSelected.category = payload.category;
        break;
      case "@option/CHANGE_LOAD_REQUEST":
        draft.load = payload.load;
        break;
      case "@option/CHANGE_OPTION_REQUEST":
        break;
      case "@option/CHANGE_OPTION_SUCCESS":
        draft.valueSelected.option = payload.option;
        break;
      // case "@option/GET_GENRES_REQUEST":
      //   break;
      case "@option/GET_GENRES_SUCCESS":
        // console.log(payload.genres);
        
        draft.genres = payload.genres;
        break;
      default:
    }
  });
}
