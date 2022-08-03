import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom"
import {ImageCart, CartContainer, H1Cart, H2Cart, CartInfo, TextCart, BtnRemoveAll, BtnProceed, BtnCart, TotalPrice,} from "../Styles/Cart-Style";
import {collection, serverTimestamp, getFirestore, doc, setDoc, updateDoc, increment} from 'firebase/firestore'
import FormatNumber from "../../Util/FormatNumber"
import { notify } from "../../Util/Notify";
import { ToastContainer } from "react-toastify";
import { Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const test = useContext(CartContext);
  const db = getFirestore();
  const createOrder = () => {

  //Order Info Hardcodiado
    let order = {
      buyer: {
        email: 'norge@gmail.com',
        name: 'Norge Santana',
        phone: '12345678'
      },
      date: serverTimestamp(),
      items: test.cartList.map(prod =>({id: prod.id, title: prod.product_name, price: prod.price, quantity: prod.quantity})),
      total: test.totalPrice()
    }

  // Creating an Order on Firestore
    const createOrderFirestore = async () => {
      const newOrderRef = doc(collection(db, "orders"))
      await setDoc(newOrderRef, order)
      return newOrderRef
    }
  
    createOrderFirestore()
     .then(result => notify(result.id))
     .catch (e => console.log(e))

    test.cartList.forEach(async (prod) => {
      const itemRef = doc(db, 'products', prod.id)
      await updateDoc(itemRef,{
        stock: increment(-prod.quantity)
      })
    })

     //Clear Cart Orders
     test.clear()
  }

  return (
    <>
      <CartContainer>
        <H1Cart>SHOPPING CART</H1Cart>
        <hr />
        {test.cartList.length > 0 &&
          test.cartList.map((prod) => (
            <CartInfo>
              <ImageCart src={prod.image} />
              <H2Cart>{prod.product_name}</H2Cart>
              <TextCart>Quantity: {prod.quantity}</TextCart>
              <TextCart>Price: ${prod.price}</TextCart>
              <TextCart>Sub: <FormatNumber number={prod.price * prod.quantity} /></TextCart>
              <button onClick={() => test.removeItem(prod.id)} style={{cursor: "pointer"}}>
                {" "}
                <DeleteIcon />
              </button>
            </CartInfo>
          ))}<hr />
        {
          (test.cartList.length > 0)
        ?
        <>
           <TotalPrice>TOTAL PRICE: <FormatNumber number={test.totalPrice()} /></TotalPrice>
           <BtnProceed onClick={createOrder} style={{cursor: "pointer"}}>CHECKOUT NOW</BtnProceed><hr />
           <BtnRemoveAll onClick={() => test.clear()} style={{cursor: "pointer"}}>CLEAR CART</BtnRemoveAll>
           
        </> 
        :
        <>
           <p>Your Cart is Empty</p><hr /><hr />
           <Link to='/'><BtnCart style={{cursor: "pointer"}}>CONTINUE SHOPPING</BtnCart></Link>
        </> 
        }
      </CartContainer>
      <ToastContainer transition={Zoom} /> 
    </>
  );
};

export default Cart;
