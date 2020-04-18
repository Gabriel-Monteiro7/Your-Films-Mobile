import React from "react";
import { FlatList, View } from "react-native";
import { Container, Title, Header, Icon, ContainerIcon } from "./styles";
import Card from "../../components/Card";
import Carousel from "react-native-snap-carousel";
import { width } from "../../util";

export default function Home() {
  return (
    <Container>
      <Header>
        <Title>Categorias</Title>
        <ContainerIcon>
          <Icon name={"search"} />
        </ContainerIcon>
      </Header>
      <View style={{ flex: 1, justifyContent: "flex-start" }}>
        <Carousel
          // ref={(c) => {
          //   this.carousel = c;
          // }}
          data={[1, 2]}
          renderItem={({ item, index, separators }) => <Card />}
          sliderWidth={500}
          itemWidth={300}
          containerCustomStyle={{ marginLeft: -70 }}
/>
      </View>
    </Container>
  );
}
