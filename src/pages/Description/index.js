import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState, useRef } from "react";
import { View, FlatList, Text } from "react-native";
import forma from "../../assets/images/Subtract.png";
import CategoryList from "../../components/CategoryList";
import { formatDate, height } from "../../util";
import { useDispatch, useSelector } from "react-redux";
import { WebView } from "react-native-webview";

import {
  addFavoriteRequest,
  removeFavoriteRequest,
  setVideoRequest,
} from "../../store/modules/films/actions";
import {
  Back,
  Container,
  ContainerBack,
  ContainerButton,
  ContainerIcon,
  ContainerRank,
  DateLabel,
  DescriptionValue,
  Forma,
  Header,
  Icon,
  Image,
  InformationContainer,
  Label,
  Mask,
  PlayButton,
  Progress,
  RankValue,
  RankValueTotal,
  SeasonsTitle,
  StarIcon,
  StatusProgress,
  Title,
  ListValue,
  ContainerList,
  ContainerItem,
  Line,
  ContainerProducao,
  NameJob,
  NameProducao,
  ImageProducao,
  ContainerFavorite,
} from "./styles";
export default function Description() {
  const dispatch = useDispatch();

  const options = [
    { id: "Sobre", title: "Sobre" },
    { id: "crew", title: "Equipe Técnica" },
    { id: "cast", title: "Elenco" },
  ];
  let { film, favorite } = useSelector((state) => state.films);
  let { valueSelected } = useSelector((state) => state.options);
  const [favoriteValue, setFavoriteValue] = useState(false);
  const [option, setOption] = useState("crew");
  const navigation = useNavigation();
  function navigateToBack() {
    navigation.goBack();
  }
  function changeFavorite() {
    if (favoriteValue === false) {
      dispatch(addFavoriteRequest(film, valueSelected.option.id));
    } else {
      dispatch(removeFavoriteRequest(film, valueSelected.option.id));
    }
  }
  function navigateToVideo() {
    dispatch(setVideoRequest(film.id, valueSelected));
    setTimeout(() => {
      navigation.jumpTo("Video");
    }, 1000);
  }
  useEffect(() => {
    setFavoriteValue(
      favorite.find((value) =>
        value.data.id === film.id && valueSelected.option.id === value.option
          ? true
          : false
      ) !== undefined
        ? true
        : false
    );
  });
  return (
    <>
      <Image source={{ uri: film.backdrop_path }}>
        <Mask>
          <Container>
            <ContainerBack
              onPress={() => {
                navigateToBack();
              }}
            >
              <Back name={"angle-left"} />
            </ContainerBack>
            <Header>
              <Title>{film.title}</Title>

              <DateLabel>
                {formatDate(film?.release_date || new Date())}
              </DateLabel>
              <Progress>
                <StatusProgress />
              </Progress>
            </Header>
          </Container>
          <PlayButton
            onPress={() => {
              navigateToVideo();
            }}
          >
            <ContainerButton
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              colors={["#3aa0fe", "#4ab2fe", "#5ac4fe"]}
            >
              <Icon name={"play"} color={"#ffffff"} size={20} />
            </ContainerButton>
          </PlayButton>
        </Mask>
      </Image>

      <InformationContainer>
        <Forma source={forma} />

        <Container
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            // flex: 1,
            paddingVertical: 15,
          }}
        >
          <View style={{ width: "75%" }}>
            <ContainerList>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={options}
                data={options}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <ContainerItem
                    key={item.id}
                    onPress={() => {
                      setOption(item.id);
                    }}
                  >
                    <ListValue active={item.id === option}>
                      {item.title}
                    </ListValue>
                    <Line active={item.id === option} />
                  </ContainerItem>
                )}
              />
            </ContainerList>
            {option === "Sobre" ? (
              <>
                <ContainerRank>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <RankValue>
                      {((film.vote_average || 0) / 2).toFixed(3)}
                    </RankValue>
                    <RankValueTotal>({film.vote_count})</RankValueTotal>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      // flex: 1,
                    }}
                  >
                    {Array.from({ length: 5 }).map((value, index) => {
                      return (
                        <StarIcon
                          key={index}
                          name={
                            film.vote_average / 2 - index >= 1
                              ? "star"
                              : film.vote_average / 2 - index > 0.5
                              ? "star-half"
                              : "star-border"
                          }
                        />
                      );
                    })}
                  </View>
                </ContainerRank>
                <DescriptionValue>{film.overview}</DescriptionValue>
                <Label>
                  {film?.genres?.map((genre, index) => {
                    return index + 1 === film?.genres.length
                      ? genre.name
                      : genre.name + ", ";
                  })}
                </Label>
              </>
            ) : (
              <FlatList
                showsVerticalScrollIndicator={false}
                data={film.producao[option]}
                keyExtractor={(item, index) => item.id + "" + index}
                renderItem={({ item, index }) => (
                  <ContainerProducao key={item.id + "" + index}>
                    <ImageProducao
                      source={{
                        uri: film.producao.urlOriginal + item.profile_path,
                      }}
                    />
                    <View>
                      <NameProducao>{item.name}</NameProducao>
                      <NameJob>{item.character || item.job}</NameJob>
                    </View>
                  </ContainerProducao>
                )}
              />
            )}
          </View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              width: "20%",
              paddingTop: 10,
              // height: "100%",
              // flex: 1,
            }}
          >
            <View
              style={{
                backgroundColor: "#171717",
                height: "38%",
                borderRadius: 17,
                paddingVertical: "2%",
                paddingHorizontal: "5%",
                width: "75%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <ContainerIcon>
                <StarIcon
                  name="star"
                  style={{
                    marginLeft: 0,
                    marginBottom: "15%",
                    fontSize: 20,
                    marginTop: 5,
                  }}
                />
              </ContainerIcon>
              <ContainerFavorite
                onPress={() => {
                  changeFavorite();
                }}
              >
                <Icon
                  name={favoriteValue ? "bookmark" : "bookmark-o"}
                  color={favoriteValue ? "#FF1744" : "#ffffff"}
                  style={{ fontSize: 20 }}
                />
              </ContainerFavorite>
            </View>
            <SeasonsTitle
              style={{
                transform: [{ rotate: "90deg" }],
                marginBottom: 20,
                color: "#524E51",
                fontFamily: "Lato-Bold",
                fontSize: 12,
              }}
            >
              <Icon name="clock-o" size={12} /> {film.runtime} Min
            </SeasonsTitle>
          </View>
        </Container>
      </InformationContainer>
    </>
  );
}
