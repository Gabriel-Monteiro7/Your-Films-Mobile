import { combineReducers } from "redux";
import auth from "./auth/redurce";
import user from "./user/redurce";
import films from "./films/redurce";
import options from "./options/redurce";

const reducers = combineReducers({
  // Remova essa linha depois de adicionar seus ducks
  auth,
  user,
  films,
  options,
});

export default reducers;
