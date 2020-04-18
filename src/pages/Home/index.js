import React from "react";

import { Container, Title, Header, Icon, ContainerIcon } from "./styles";
import Card from "../../components/Card";
export default function Home() {
  return (
    <Container>
      <Header>
        <Title>Categorias</Title>
        <ContainerIcon>
          <Icon name={"search"} />
        </ContainerIcon>
      </Header>
      <Card />
    </Container>
  );
}
