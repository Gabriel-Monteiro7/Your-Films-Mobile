import React from "react";

import { Container, Title, Header, Icon, ContainerIcon } from "./styles";

export default function Home() {
  return (
    <Container>
      <Header>
        <Title>Categorias</Title>
        <ContainerIcon>
          <Icon name={"search"} />
        </ContainerIcon>
      </Header>
    </Container>
  );
}
