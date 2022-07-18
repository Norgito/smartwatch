import React, {useEffect, useState} from "react";
import { Header, Container, ProdContainer } from "../StyledComponents";
import customFetch from "../data/customFetch"
import ItemList from "../items/ItemList";
import { useParams } from "react-router-dom";
const { products } = require('../data/Products');


const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const { id } = useParams ();


  useEffect(() => {
    if (id === undefined) {
        customFetch(2000, products)
          .then(result => setProductos(result))
          .catch(err => console.log(err))
        } else {
          customFetch(2000, products.filter(item => item.categoryId === parseInt(id)))
          .then(result => setProductos(result))
          .catch(err => console.log(err))
        }
}, [id]);
  
  return (
    <Container>
      <Header>NEW ARRIVALS!</Header>
      <ProdContainer>
       <ItemList items={productos} />
      </ProdContainer>
    </Container>
  );
};

export default ItemListContainer;
