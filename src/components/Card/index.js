import React, { useState } from "react";
import { View, Text } from "react-native";
// import GradientButton from "react-native-gradient-buttons";

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
import { useNavigation } from "@react-navigation/native";
import { formatDate } from "../../util";
export default function Card({ filme }) {
  const navigation = useNavigation();
  function navigateToDescription() {
    navigation.navigate("Description",filme);
  }
  const [favorite, setFavorite] = useState(false);
  return (
    <Container>
      <Image source={{ uri: filme.poster_path }}>
        <Mask
          onPress={() => {
            navigateToDescription();
          }}
        >
          <Header>
            <Title>{filme.title}</Title>
            <ContainerIcon
              onPress={() => {
                setFavorite(!favorite);
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
            <PlayButton>
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
              <ProgressTitle>{formatDate(filme.release_date)}</ProgressTitle>
            </ContainerProgress>
          </Footer>
        </Mask>
      </Image>
    </Container>
  );
}
