import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom"
import {
  ImageCart,
  CartContainer,
  H1Cart,
  H2Cart,
  CartInfo,
  TextCart,
  BtnRemoveAll,
  BtnProceed,
  BtnCart,
  TotalPrice,
} from "../Styles/Cart-Style";

import FormatNumber from "../Util/FormatNumber"

const Cart = () => {
  const test = useContext(CartContext);

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
          ))}
        <hr />
        {
          (test.cartList.length > 0)
        ? 
        <>
        <TotalPrice>TOTAL PRICE: <FormatNumber number={test.totalPrice()} /></TotalPrice>
        <BtnProceed>CHECKOUT NOW</BtnProceed>
        <hr />
        <BtnRemoveAll onClick={() => test.clear()} style={{cursor: "pointer"}}>CLEAR CART</BtnRemoveAll>
        
        </>
        
        :<>
        <p>Your Cart is Empty</p>
        <hr />
        <hr />
         <Link to='/'><BtnCart style={{cursor: "pointer"}}>CONTINUE SHOPPING</BtnCart></Link>
         </> 
        }
      </CartContainer>
    </>
  );
};

export default Cart;
