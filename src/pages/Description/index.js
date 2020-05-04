import React, { useState, useEffect } from "react";
import {
  Container,
  Image,
  ContainerBack,
  Back,
  InformationContainer,
  Header,
  Title,
  Label,
  DateLabel,
  Progress,
  StatusProgress,
  Forma,
  PlayButton,
  Icon,
  ContainerButton,
  RankValue,
  StarIcon,
  ContainerRank,
  SeasonsTitle,
} from "./styles";
import imagem from "../../assets/images/Image.png";
import forma from "../../assets/images/Subtract.png";
import { useNavigation } from "@react-navigation/native";
import CategoryList from "../../components/CategoryList";
import { View, Text } from "react-native";

export default function Description() {
  const navigation = useNavigation();
  function navigateToBack() {
    navigation.goBack();
  }
  return (
    <>
      <Image source={imagem}>
        <Container>
          <ContainerBack
            onPress={() => {
              navigateToBack();
            }}
          >
            <Back name={"angle-left"} />
          </ContainerBack>
          <Header>
            <Title>See</Title>
            <Label>Fransice Lourence</Label>
            <DateLabel>2019</DateLabel>
            <Progress>
              <StatusProgress />
            </Progress>
          </Header>
        </Container>
        <PlayButton>
          <ContainerButton
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            colors={["#3aa0fe", "#4ab2fe", "#5ac4fe"]}
          >
            <Icon name={"play"} color={"#ffffff"} size={20} />
          </ContainerButton>
        </PlayButton>
      </Image>

      <InformationContainer>
        <Forma source={forma} />
        <Container
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <View>
            <View style={{ paddingVertical: 15 }}>
              <CategoryList />
            </View>
            <ContainerRank>
              <RankValue>4 532</RankValue>
              <RankValue>4 532</RankValue>
              <StarIcon name={"star"} />
              <StarIcon name={"star"} />
              <StarIcon name={"star"} />
              <StarIcon name={"star"} />
              <StarIcon name={"star"} />
            </ContainerRank>
          </View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#171717",
              }}
            >
              <RankValue>4 532</RankValue>
            </View>
            <SeasonsTitle
              style={{
                transform: [{ rotate: "90deg" }],
                marginBottom: 20,
                color: "white",
              }}
            >
              2 Seas
              <Text style={{ color: "#524E51" }}>ons</Text>
            </SeasonsTitle>
          </View>
        </Container>
      </InformationContainer>
    </>
  );
}
