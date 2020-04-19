import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native";
import {
  Container,
  Title,
  Header,
  Icon,
  ContainerIcon,
  StatusProgress,
  Progress,
  ContainerRank,
  RankProgress,
  RankTitle,
  IconRank,
  RankValue,
} from "./styles";
import Card from "../../components/Card";
import Carousel from "react-native-snap-carousel";
import { width } from "../../util";
import CategoryList from "../../components/CategoryList";
export default function Home() {
  const [films, setFilms] = useState([
    { title: "See", rank: 4.75 },
    { title: "Frontier", rank: 3.11 },
  ]);
  const [index, setIndex] = useState(0);
  const [rank, setRank] = useState(films[index].rank);
  const [rankValue, setRankValue] = useState({
    entire: parseInt(rank),
    broken: Math.round((rank - parseInt(rank)) * 1000),
  });

  useEffect(() => {
    setRank(films[index].rank);
    setRankValue({
      entire: parseInt(rank),
      broken: Math.round((rank - parseInt(rank)) * 1000),
    });
  }, [index, rank]);
  return (
    <Container>
      <Header>
        <Title>Categorias</Title>
        <ContainerIcon>
          <Icon name={"search"} />
        </ContainerIcon>
      </Header>
      <CategoryList />
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Carousel
          data={films}
          renderItem={({ item, index, separators }) => (
            <>
              <Card />
            </>
          )}
          onSnapToItem={(index) => setIndex(index)}
          sliderWidth={500}
          itemWidth={280}
          containerCustomStyle={{ marginLeft: -60 }}
        />
        <ContainerRank>
          <RankTitle>Your Rank</RankTitle>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <RankValue>
              {rankValue.entire}{" "}
              {rankValue.broken === 0 ? "" : rankValue.broken}
            </RankValue>
            <IconRank name={"my-location"} />
          </View>
          <RankProgress>
            {Array.from({ length: 10 }, (v, k) => k).map((value, index) => {
              return (
                <Progress key={index}>
                  <StatusProgress
                    progress={
                      rank * 2 - index >= 1
                        ? 100
                        : rank * 2 - index > 0
                        ? (rank * 2 - index) * 100
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
