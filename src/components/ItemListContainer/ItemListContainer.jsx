import React, {useEffect, useState} from "react";
import { Container, ProdContainer, Carga } from "../Styles/StyledComponents";
import customFetch from "../data/customFetch"
import ItemList from "../items/ItemList";
import { useParams } from "react-router-dom";
const { products } = require('../data/Products');


const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const { id } = useParams ();


  useEffect(() => {
    if (id === undefined) {
        customFetch(1000, products)
          .then(result => setProductos(result))
          .catch(err => console.log(err))
        } else {
          customFetch(1000, products.filter(item => item.categoryId === parseInt(id)))
          .then(result => setProductos(result))
          .catch(err => console.log(err))
        }
}, [id]);
  
  return (
    <>
    { 
    ItemList
    ?
    <Container> 
      <ProdContainer>
       <ItemList items={productos} />
      </ProdContainer>
    </Container>
    : <>
            <Carga>
            <p className="pLoading">LOADING</p>
            <div className='cargando'></div>
            </Carga>
         </>
    }
    </>
  );
};

export default ItemListContainer;
