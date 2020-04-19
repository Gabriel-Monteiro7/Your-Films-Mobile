import React from "react";
import { FlatList, View } from "react-native";
import { Container, Title, Header, Icon, ContainerIcon } from "./styles";
import Card from "../../components/Card";
import Carousel from "react-native-snap-carousel";
import { width } from "../../util";
import CategoryList from "../../components/CategoryList";
export default function Home() {
  return (
    <Container>
      <Header>
        <Title>Categorias</Title>
        <ContainerIcon>
          <Icon name={"search"} />
        </ContainerIcon>
      </Header>
      <CategoryList />
      <View style={{ flex: 1, justifyContent: "flex-start" }}>
        <Carousel
          // ref={(c) => {
          //   this.carousel = c;
          // }}
          data={[1, 2]}
          renderItem={({ item, index, separators }) => <Card />}
          sliderWidth={500}
          itemWidth={280}
          containerCustomStyle={{ marginLeft: -80 }}
        />
      </View>
    </Container>
  );
}
