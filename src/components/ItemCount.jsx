import React, { useState } from "react";
import {
  Btn,
  ContainerButton,
  LabelCount,
  BotonCount,
} from "./Styles/StyledComponents";

const ItemCount = ({ stock = 0, onAdd }) => {
  const [count, setCount] = useState(1);

  const add = () => {
    if (stock > count) {
      const aux = count + 1;
      setCount(aux);
    }
  };

  const sub = () => {
    if (count > 1) {
      const aux = count - 1;
      setCount(aux);
    }
  };

  const AgregarCantidad = () => {
    onAdd(count);
  };

  return (
    <>
      <ContainerButton>
        <BotonCount onClick={sub}>➖</BotonCount>
        <LabelCount> {count} </LabelCount>
        <BotonCount onClick={add}>➕</BotonCount>
      </ContainerButton>
      <Btn onClick={AgregarCantidad} style={{ cursor: "pointer" }}>
        ADD TO CART 🛒
      </Btn>
    </>
  );
};

export default ItemCount;
