import React, { useState } from "react";
import { FlatList } from "react-native";

import { Container, CategoryTitle, Line, ContainerCategory } from "./styles";

export default function CategoryList() {
  const [selected, setSelected] = useState("0");
  return (
    <Container>
      <FlatList
        horizontal={true}
        data={[
          { id: "0", title: "All" },
          { id: "1", title: "About" },
          { id: "2", title: "Ação" },
        ]}
        renderItem={({ item }) => (
          <ContainerCategory
            onTouchEnd={() => {
              setSelected(item.id);
            }}
          >
            <CategoryTitle active={item.id === selected}>
              {item.title}
            </CategoryTitle>
            <Line active={item.id === selected} />
          </ContainerCategory>
        )}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
}
