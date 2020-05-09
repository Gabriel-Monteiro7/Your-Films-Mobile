import { Dimensions, PixelRatio } from "react-native";
export const height = Math.round(Dimensions.get("window").height);
export const width = Math.round(Dimensions.get("window").width);
export const fontScale = PixelRatio.get();
import { format, compareAsc } from "date-fns";
import ENV from "../../env.json";
import { getVideo, getCredits } from "../service/api";
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
    { title: "Favoritos", id: "favorite" },
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
    { title: "Favoritos", id: "favorite" },
  ],
};
export const options = [
  { title: "Filmes", id: "movie", categories: categories.movie },
  { title: "Séries", id: "tv", categories: categories.series },
];
export const hp = (value) => {
  return Math.round((height * value) / 100);
};
export const wp = (value) => {
  return Math.round((width * value) / 100);
};
export const { format: formatPrice } = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export const formatDate = (date) => {
  return date === undefined ? "" : format(new Date(date), "MMM dd', 'yyyy");
};

export const setNameGenres = (film, genres) => {
  film.genre_ids = film.genre_ids.map((genre, index) => {
    return (
      genres.find((value) => (value.id === genre ? true : false)) || {
        name: "",
      }
    );
  });
  film.backdrop_path =
    film.backdrop_path === null
      ? null
      : `${ENV.MOVIE_DB_API_URL_ORIGINAL + film.backdrop_path}`;
  film.poster_path =
    film.poster_path === null
      ? null
      : ENV.MOVIE_DB_API_URL_ORIGINAL + film.poster_path;
  film.title_original = film.title;
  film.title =
    film.title.length > 16 ? film.title.slice(0, 16) + "..." : film.title;
  return film;
};
export const setFilme = (filmes, genres) => {
  filmes.map((filme) => {
    filme.title = filme.title || filme.name;
    filme = setNameGenres(filme, genres);
  });
  return filmes;
};
export const setFilmeDetail = async (filme, valueSelected) => {
  filme.title = filme.title || filme.name;
  filme.backdrop_path =
    filme.backdrop_path === null
      ? null
      : ENV.MOVIE_DB_API_URL_ORIGINAL + filme.backdrop_path;
  filme.poster_path =
    filme.poster_path === null
      ? null
      : ENV.MOVIE_DB_API_URL_ORIGINAL + filme.poster_path;
  await getCredits(filme.id, valueSelected).then((producao) => {
    filme.producao = setProducao(producao.data);
  });
  return filme;
};
export const setProducao = (producao) => {
  let newProducao = {
    crew: producao.crew,
    cast: producao.cast,
    urlOriginal: ENV.MOVIE_DB_API_URL_ORIGINAL,
  };
  return newProducao;
};
