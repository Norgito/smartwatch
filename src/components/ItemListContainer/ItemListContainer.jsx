import React, {useEffect, useState} from "react";
import { Header, Container } from "./StyledComponents";
import ItemCount from "../ItemCount/ItemCount";
import {getFetch} from "../data/Products";
import ItemList from "../items/ItemList";

const ItemListContainer = ({ greeting }) => {

  const [productos, setProductos] = useState([])


   useEffect(() => {
    getFetch
    .then((respuesta) =>{
      return respuesta
    })
    .then((resp) => setProductos(resp))
    .then(err => console.log(err))
   },[])

  const onAdd = (cantidad) => {
    console.log(`SE AGREGADO ${cantidad}`);
  };

  
  return (
    <Container>
      <Header>{greeting}</Header>
      <div className="prodContainer">
      <ItemList productos={productos} />
      </div>
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
      
    </Container>
  );
};

export default ItemListContainer;
