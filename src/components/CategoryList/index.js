import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";

import { Container, CategoryTitle, Line, ContainerCategory } from "./styles";
import { valueSelected } from "../../services/api";

export default function CategoryList() {
  const [categorias, setCategorias] = useState([]);

  const [selected, setSelected] = useState("0");
  useEffect(() => {
    setCategorias(valueSelected.option.categories);
  }, []);
  return (
    <Container>
      <FlatList
        horizontal={true}
        data={categorias}
        renderItem={({ item }) => (
          <ContainerCategory
            onTouchEnd={() => {
              setSelected(item.id);
            }}
          >
            <CategoryTitle active={item.id === valueSelected.category}>
              {item.title}
            </CategoryTitle>
            <Line active={item.id === valueSelected.category} />
          </ContainerCategory>
        )}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
}
