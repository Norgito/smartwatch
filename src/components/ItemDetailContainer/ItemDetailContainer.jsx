import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
   const [data, setData] = useState({});
   const { idItem } = useParams();


   useEffect(() => {
       //Pedido de Firestore
       const querydb = getFirestore();
       //Ejecutar Doc
       const queryDoc = doc(querydb, 'products', idItem);
       //Lanzar la promesa y capturar
       getDoc(queryDoc)
        .then(res => setData({ id: res.id, ...res.data() }))
   }, [idItem]);
   
   return (
       <ItemDetail prod={data} />
   );
}

export default ItemDetailContainer;