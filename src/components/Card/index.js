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
} from "./styles";
import Imagem from "../../assets/images/Image.png";
import { useNavigation } from "@react-navigation/native";

export default function Card() {
  const navigation = useNavigation();
  function navigateToDescription() {
    navigation.navigate("Description");
  }
  const [favorite, setFavorite] = useState(false);
  return (
    <Container>
      <View></View>
      <Image
        source={Imagem}
        onTouchEnd={() => {
          navigateToDescription();
        }}
      >
        <Header>
          <Title>See</Title>
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
            <ProgressTitle>1 season 4 series</ProgressTitle>
          </ContainerProgress>
        </Footer>
      </Image>
    </Container>
  );
}
