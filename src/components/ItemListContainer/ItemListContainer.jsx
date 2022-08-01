import React, {useEffect, useState} from "react";
import { Container, ProdContainer, Carga } from "../Styles/StyledComponents";
import ItemList from "../items/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"; 


const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const { id } = useParams ();


  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'products');
    if (id) {
      const queryFilter = query(queryCollection, where('category', '==', id))
      getDocs(queryFilter)
        .then(res => setProductos(res.docs.map(product => ({id: product.id, ...product.data()}))))
    } else {
      getDocs(queryCollection)
        .then(res => setProductos(res.docs.map(product => ({id: product.id, ...product.data()}))))
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