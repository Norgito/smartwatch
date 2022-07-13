import { useEffect, useState } from "react";
import customFetch from "../data/customFetch"
import ItemDetail from "../ItemDetail/ItemDetail";
const { products } = require('../data/Products');

const ItemDetailContainer = () => {
   const [dato, setDato] = useState({});


   useEffect(() => {
       customFetch(1000, products[0])
           .then(result => setDato(result))
           .catch(err => console.log(err))
   }, []);
   
   return (
       <ItemDetail prod={dato} />
   );
}

export default ItemDetailContainer;
