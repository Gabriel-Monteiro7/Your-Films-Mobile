import axios from "axios";
const currentDate = new Date().getFullYear();

import ENV from "../../env.json";
export const api = axios.create({
  //https://locahost:3333  ->> Se for rodar local
  baseURL: `${ENV.MOVIE_DB_API_URL}`,
});
export const getCredits = (id, valueSelected) => {
  return api.get(
    `${valueSelected.option.id}/${id}/credits?api_key=${ENV.MOVIE_DB_API_KEY}`
  );
};
