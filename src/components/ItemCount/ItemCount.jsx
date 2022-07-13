import React, { useState } from "react";
import "./Styled-ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

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

      <button className="Agregar" onClick={AgregarCantidad}>
        ADD TO CART
      </button>
    </>
  );
};

export default ItemCount;
