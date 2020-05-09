import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { changeCategoryRequest } from "../../store/modules/options/actions";
import { CategoryTitle, Container, ContainerCategory, Line } from "./styles";

export default function CategoryList() {
  const dispatch = useDispatch();
  let { valueSelected } = useSelector((state) => state.options);
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    setCategorias(valueSelected.option.categories);
  }, [valueSelected]);
  function onChangeCategory(category) {
    dispatch(changeCategoryRequest(category.id));
  }
  return (
    <Container>
      <FlatList
        horizontal={true}
        data={categorias}
        renderItem={({ item }) => (
          <ContainerCategory
            onPress={() => {
              onChangeCategory(item);
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
