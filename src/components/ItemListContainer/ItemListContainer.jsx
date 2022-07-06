import React from "react";
import { Header, Container } from "./StyledComponents";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({ greeting }) => {
  const onAdd = (cantidad) => {
    console.log(`SE AGREGADO ${cantidad}`);
  };

  return (
    <Container>
      <Header>{greeting}</Header>
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </Container>
  );
};

export default ItemListContainer;
