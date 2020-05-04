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
import { width, setFilme} from "../../util";
import CategoryList from "../../components/CategoryList";
import { getMovies } from "../../services/api";
export default function Home() {
  const [films, setFilms] = useState([]);
  const [index, setIndex] = useState(0);
  const [rank, setRank] = useState(films[index]?.vote_average);
  useEffect(() => {
    getMovies().then((filmes) => {
      setFilms(setFilme(filmes.data["results"]));
      setRank(filmes[index]?.vote_average);
    });
  }, []);
  useEffect(() => {
    setRank(films[index]?.vote_average);
  }, [index, rank]);

  return (
    <Container>
      <Header>
        <Title>Categorias</Title>
        <ContainerIcon>
          <Icon name={"search"} />
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
        <Carousel
          data={films}
          renderItem={({ item, index, separators }) => (
            <>
              <Card filme={item} />
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
            <RankValue>{rank}</RankValue>
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
