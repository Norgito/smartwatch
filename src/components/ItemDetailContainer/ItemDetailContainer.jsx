import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import customFetch from "../data/customFetch"
import ItemDetail from "../ItemDetail/ItemDetail";
const { products } = require('../data/Products');

const ItemDetailContainer = () => {
   const [dato, setDato] = useState({});
   const { idItem } = useParams();


   useEffect(() => {
       customFetch(1000, products.find(item => item.id === parseInt(idItem)))
           .then(result => setDato(result))
           .catch(err => console.log(err))
   }, [idItem]);
   
   return (
       <ItemDetail prod={dato} />
   );
}

export default ItemDetailContainer;
