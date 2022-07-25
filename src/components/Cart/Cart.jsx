import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  ImageCart,
  CartContainer,
  H1Cart,
  H2Cart,
  CartInfo,
  TextCart,
  BtnRemoveAll,
} from "../Styles/Cart-Style";

const Cart = () => {
  const test = useContext(CartContext);

  return (
    <>
      <CartContainer>
        <H1Cart>SHOOPING CART</H1Cart>
        <hr />
        {test.cartList.length > 0 &&
          test.cartList.map((prod) => (
            <CartInfo>
              <ImageCart src={prod.image} />
              <H2Cart>{prod.product_name}</H2Cart>
              <TextCart>Price: ${prod.price}</TextCart>
              <TextCart>Quantity: {prod.quantity}</TextCart>
              <button onClick={() => test.removeItem(prod.id)} style={{cursor: "pointer"}}>
                {" "}
                <DeleteIcon />
              </button>
            </CartInfo>
          ))}
        <hr />
        <BtnRemoveAll onClick={() => test.clear()} style={{cursor: "pointer"}}>CLEAR CART</BtnRemoveAll>
      </CartContainer>
    </>
  );
};

export default Cart;
