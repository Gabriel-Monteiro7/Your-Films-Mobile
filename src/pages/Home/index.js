import Lottie from "lottie-react-native";

import React, { useEffect, useRef, useState } from "react";
import { View, TextInput, Text } from "react-native";
import Carousel from "react-native-snap-carousel";
import { useDispatch, useSelector } from "react-redux";
import loadLottieNotFound from "../../assets/images/load1.json";
import loadLottie from "../../assets/images/load.json";
import Card from "../../components/Card";
import CategoryList from "../../components/CategoryList";
import {
  getFilmsRequest,
  getFilmsSearchRequest,
  getFilmsSuccess,
} from "../../store/modules/films/actions";
import {
  changeOptionRequest,
  changePageRequest,
} from "../../store/modules/options/actions";
import {
  Container,
  ContainerIcon,
  ContainerRank,
  Header,
  Icon,
  IconRank,
  Progress,
  RankProgress,
  RankTitle,
  RankValue,
  StatusProgress,
  Title,
  Input,
} from "./styles";
export default function Home({ navigation }) {
  let carousel = useRef(null);
  const dispatch = useDispatch();
  let { films, favorite } = useSelector((state) => state.films);
  let { valueSelected, page, genres, load } = useSelector(
    (state) => state.options
  );
  const [index, setIndex] = useState(0);
  const [query, setQuery] = useState("");
  const [rank, setRank] = useState(0);
  useEffect(() => {
    dispatch(changeOptionRequest(valueSelected.option.id));
  }, []);
  useEffect(() => {
    if (genres.length > 0) {
      setRank(films[index]?.vote_average || 0);
      if (
        index === films.length - 1 &&
        films.length > 1 &&
        valueSelected.category !== "favorite"
      ) {
        if (query !== "") {
          dispatch(
            getFilmsSearchRequest(valueSelected, page + 1, genres, true, query)
          );
        } else {
          dispatch(getFilmsRequest(valueSelected, page + 1, genres, true));
        }
        dispatch(changePageRequest(page + 1));
      }
    }
  }, [films, index]);
  useEffect(() => {
    if (query !== "") {
      dispatch(getFilmsSearchRequest(valueSelected, 1, genres, false, query));
    } else if (query === "" && genres.length > 0) {
      dispatch(changeOptionRequest(valueSelected.option.id));
    }

    setTimeout(() => {
      if (films.length > 0)
        () => {
          carousel.snapToItem(0);
        };
    }, 1000);
  }, [query]);
  useEffect(() => {
    setQuery("");
    if (genres.length > 0) {
      if (valueSelected.category === "favorite") {
        dispatch(
          getFilmsSuccess(
            favorite
              .filter((value) =>
                valueSelected.option.id === value.option ? true : false
              )
              .map((value) => {
                return value.data;
              })
          )
        );
      } else dispatch(getFilmsRequest(valueSelected, 1, genres));
      setIndex(0);
    }
  }, [genres, valueSelected]);

  return (
    <Container>
      <ContainerIcon>
        <Icon
          name={"menu"}
          style={{ marginBottom: 30, marginTop: 10 }}
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      </ContainerIcon>

      <Header>
        <Title>Categorias</Title>
        <ContainerIcon
          style={{
            borderBottomWidth: 2,
            borderBottomColor: "#dadada6b",
            borderRadius: 1,
            position: "relative",
          }}
        >
          <Input
            // autoFocus={true}
            value={query}
            placeholderTextColor={"#dadada8f"}
            onChangeText={(e) => {
              setQuery(e);
            }}
          />
          {query === "" && (
            <Icon
              style={{
                position: "absolute",
                right: 0,
                transform: [{ rotate: "90deg" }],
                color: "#dadada2e",
                fontSize: 20,
                bottom: 0,
              }}
              name={"search"}
            />
          )}
        </ContainerIcon>
      </Header>
      <View style={{ paddingTop: 30, paddingBottom: 20 }}>
        <CategoryList />
      </View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        {(load === null && films.length !== 0) || load === false ? (
          <>
            <Carousel
              ref={(c) => {
                carousel = c;
              }}
              autoplayInterval={500}
              lockScrollTimeoutDuration={500}
              data={films}
              renderItem={({ item, index, separators }) => (
                <>
                  <Card
                    film={item}
                    navigation={navigation}
                    key={index}
                    favorite={
                      favorite.find((value) =>
                        value.data.id === item.id &&
                        valueSelected.option.id === value.option
                          ? true
                          : false
                      ) !== undefined
                        ? true
                        : false
                    }
                  />
                </>
              )}
              onSnapToItem={(index) => setIndex(index)}
              sliderWidth={500}
              itemWidth={280}
              containerCustomStyle={{ marginLeft: -60 }}
            />
            {valueSelected.category !== "favorite" &&
            films.length - 1 === index &&
            films.length > 1 &&
            load !== null ? (
              <Lottie
                style={{
                  flex: 1,
                  height: 80,
                  position: "absolute",
                  right: -14,
                  top: 100,
                }}
                resizeMode="cover"
                autoPlay
                source={loadLottie}
                loop
              />
            ) : (
              <></>
            )}
          </>
        ) : (
          <Lottie
            style={{
              height: 250,
            }}
            resizeMode="cover"
            autoPlay
            source={
              load === null && query !== "" ? loadLottieNotFound : loadLottie
            }
            loop
          />
        )}
        <ContainerRank>
          <RankTitle>Your Rank</RankTitle>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <RankValue>{(rank / 2).toFixed(3)}</RankValue>
            <IconRank name={"my-location"} />
          </View>
          <RankProgress>
            {Array.from({ length: 10 }, (v, k) => k).map((value, index) => {
              return (
                <Progress key={index}>
                  <StatusProgress
                    progress={
                      rank - index >= 1
                        ? 100
                        : rank - index > 0
                        ? (rank - index) * 100
                        : 0
                    }
                  />
                </Progress>
              );
            })}
          </RankProgress>
        </ContainerRank>
      </View>
    </Container>
  );
}
