import axios from "axios";
const url = "https://api.themoviedb.org/3/";
const apiKey = "c3ea08f379bbc9b580a3ccbd5343e673";
const currentDate = new Date().getFullYear();
page = 0;
query = "";
const categories = {
  movie: [
    { title: "Em cartaz", id: "now_playing" },
    {
      title: "Populares",
      id: "popular",
    },
    {
      title: "Próximas estreias",
      id: "upcoming",
    },
    { title: "Mais bem avaliados", id: "top_rated" },
  ],
  series: [
    { title: "Em exibição hoje", id: "airing_today" },
    {
      title: "Populares",
      id: "popular",
    },
    {
      title: "Na tv",
      id: "on_the_air",
    },

    { title: "Mais bem avaliados", id: "top_rated" },
  ],
};

const options = [
  { title: "Filmes", id: "movie", categories: categories.movie },
  { title: "Séries", id: "tv", categories: categories.series },
];

export const valueSelected = { option: options[0], category: "popular" };

export const setOption = (option) => {
  page = 0;
  valueSelected.option = option;
};
export const setCategory = (category) => {
  page = 0;
  valueSelected.category = category;
};

export const getMovies = () => {
  return axios
    .get(
      `${url}${valueSelected.option.id}/${
        valueSelected.category
      }?page=${++page}&api_key=${apiKey}&language=pt-br`
    )
    .then((valor) => {
      return valor;
    });
};
export const getGenres = () => {
  return axios.get(
    `${url}genre/${valueSelected.option.id}/list?api_key=${apiKey}&language=pt-br`
  );
};
export const searchMovies = (query, load) => {
  if (query === "") {
    page = 0;
    return getMovies();
  }

  if ((query === query || query === "") && load) page++;
  else {
    page = 1;
    query = "";
  }
  query = query;
  return axios.get(
    `${url}search/${valueSelected.option.id}?api_key=${apiKey}&query=${query}&page=${page}&language=pt-b`
  );
};
export const getMoviesUpcoming = () => {
  return get(
    `${url}discover/${
      valueSelected.option.id
    }?api_key=${apiKey}&sort_by=popularity.desc&page=${1}&year=${currentDate}`
  );
};
export const getVideo = (id) => {
  return get(
    `${url}${valueSelected.option.id}/${id}/videos?api_key=${apiKey}`
  );
};
export const getDetail = (id) => {
  return axios.get(
    `${url}${valueSelected.option.id}/${id}?api_key=${apiKey}&language=pt-br`
  );
};
export const getCredits = (id) => {
  return axios.get(
    `${url}${valueSelected.option.id}/${id}/credits?api_key=${apiKey}`
  );
};
export const getRecommendations = (id) => {
  return axios.get(
    `${url}${valueSelected.option.id}/${id}/recommendations?api_key=${apiKey}`
  );
};
