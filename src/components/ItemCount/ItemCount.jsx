import React, { useState } from "react";
import { Btn } from '../StyledComponents';
import "./Styled-ItemCount.css";

const ItemCount = ({ stock = 0, onAdd }) => {
  const [count, setCount] = useState(1);

  const add = () => {
    if (stock > count) {
      const aux = count + 1
      setCount(aux);
    }
  };

  const sub = () => {
    if (count > 1) {
      const aux = count - 1
      setCount(aux);
    }
  };

  const AgregarCantidad = () => {
    onAdd(count);
  };

  return (
    <>
      <div className="containerButton">
        <button className="Boton1" onClick={sub}>
          ➖
        </button>
        <label> {count} </label>
        <button className="Boton1" onClick={add}>
          ➕
        </button>
      </div>
      <Btn onClick={AgregarCantidad} style={{cursor: "pointer"}}>ADD TO CART</Btn>
    </>
  );
};

export default ItemCount;
