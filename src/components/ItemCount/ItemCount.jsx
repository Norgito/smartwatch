import React, { useState } from "react";
import "./Styled-ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const add = () => {
    if (stock > count) {
      setCount(count + 1);
    }
  };

  const sub = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const AgregarCantidad = () => {
    onAdd(count);
  };

  return (
    <>
      <div className="containerButton">
        <button className="Boton1" onClick={add}>
          ➖
        </button>
        <label> {count} </label>
        <button className="Boton1" onClick={sub}>
          ➕
        </button>
      </div>

      <button className="Agregar" onClick={AgregarCantidad}>
        AGREGAR AL CARRITO
      </button>
    </>
  );
};

export default ItemCount;
