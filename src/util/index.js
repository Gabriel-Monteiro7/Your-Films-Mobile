import { Dimensions, PixelRatio } from "react-native";
export const height = Math.round(Dimensions.get("window").height);
export const width = Math.round(Dimensions.get("window").width);
export const fontScale = PixelRatio.get();
import { format } from "date-fns";
import pt from "date-fns/locale/pt";
import { getGenres } from "../services/api";
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
  return format(new Date(date), "MMMM dd', 'yyyy");
};

const urlOriginal = "https://image.tmdb.org/t/p/original";
genres = [];
getGenres().then((value) => {
  genres = value.data["genres"];
});
export const setNameGenres = (value) => {
  value.genre_ids = value.genre_ids.map((genre, index) => {
    if (index < 3) {
      return genres.find((value) => value.id === genre) || { name: "" };
    } else if (index === 3) {
      return { name: "..." };
    }
    return { name: "" };
  });
  value.backdrop_path =
    value.backdrop_path === null
      ? null
      : `${urlOriginal + value.backdrop_path}`;
  value.poster_path =
    value.poster_path === null ? null : urlOriginal + value.poster_path;
  value.title_original = value.title;
  value.title =
    value.title.length > 16 ? value.title.slice(0, 16) + "..." : value.title;

  return value;
};
export const setFilme = (filmes) => {
  filmes.map((filme) => {
    filme.title = filme.title || filme.name;
    filme = setNameGenres(filme);
  });
  return filmes;
};
export const setFilmeHeader = (filmeHeader) => {
  filmeHeader = filmeHeader.filter((value) => {
    return value.backdrop_path !== null && value.genre_ids.length > 0;
  })[0];

  filmeHeader.title = filmeHeader.title || filmeHeader.name;
  serviceApi.getVideo(filmeHeader.id).subscribe((video) => {
    let key = video["results"].find((value) => value.key !== undefined)?.key;
    let title = filmeHeader.title;
    filmeHeader.video =
      key === ""
        ? null
        : sanitizer.bypassSecurityTrustResourceUrl(
            `https://www.youtube.com/embed/${key}?autoplay=1`
          );
    filmeHeader = setNameGenres(filmeHeader);
    filmeHeader.title = title;
  });
  return filmeHeader;
};
export const setFilmeDetail = (filme) => {
  filme.title = filme.title || filme.name;
  serviceApi.getVideo(filme.id).subscribe((video) => {
    let key = video["results"][0]?.key;
    filme.video =
      key === undefined
        ? null
        : sanitizer.bypassSecurityTrustResourceUrl(
            `https://www.youtube.com/embed/${key}?autoplay=1`
          );
    filme.backdrop_path =
      filme.backdrop_path === null
        ? null
        : `
        ${urlOriginal + filme.backdrop_path}`;
    filme.poster_path =
      filme.poster_path === null ? null : urlOriginal + filme.poster_path;
  });
  return filme;
};
export const setProducao = (producao) => {
  let newProducao = {
    crew: producao.crew,
    cast: producao.cast,
    urlOriginal: urlOriginal,
  };
  return newProducao;
};
