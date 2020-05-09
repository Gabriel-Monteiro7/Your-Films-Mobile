import { StackActions, DrawerActions } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Container,
  Image,
  Title,
  Icon,
  Header,
  ContainerIcon,
  Footer,
  PlayButton,
  ContainerButton,
  ContainerProgress,
  Progress,
  ProgressTitle,
  StatusProgress,
  Mask,
} from "./styles";
import { formatDate } from "../../util";
import {
  getDetailRequest,
  addFavoriteRequest,
  removeFavoriteRequest,
  setVideoRequest,
} from "../../store/modules/films/actions";

import { useDispatch, useSelector } from "react-redux";

export default function Card({ film, navigation, favorite }) {
  const dispatch = useDispatch();
  let { valueSelected } = useSelector((state) => state.options);
  function navigateToDescription() {
    dispatch(getDetailRequest(valueSelected, film.id));
    setTimeout(() => {
      navigation.jumpTo("Description");
    }, 1000);
  }
  function navigateToVideo() {
    dispatch(setVideoRequest(film.id, valueSelected));
    setTimeout(() => {
      navigation.jumpTo("Video");
    }, 1000);
  }

  function changeFavorite() {
    if (favorite === false)
      dispatch(addFavoriteRequest(film, valueSelected.option.id));
    else dispatch(removeFavoriteRequest(film, valueSelected.option.id));
  }
  return (
    <Container>
      <Image source={{ uri: film?.poster_path }}>
        <Mask
          onPress={() => {
            navigateToDescription();
          }}
        >
          <Header>
            <Title>{film.title}</Title>
            <ContainerIcon
              onPress={() => {
                changeFavorite();
              }}
            >
              <Icon
                name={favorite ? "bookmark" : "bookmark-o"}
                color={favorite ? "#FF1744" : "#ffffff"}
                size={22}
              />
            </ContainerIcon>
          </Header>
          <Footer>
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
            <ContainerProgress>
              <Progress>
                <StatusProgress />
              </Progress>
              <ProgressTitle>
                {formatDate(
                  film?.release_date || film?.first_air_date || undefined
                )}
              </ProgressTitle>
            </ContainerProgress>
          </Footer>
        </Mask>
      </Image>
    </Container>
  );
}
