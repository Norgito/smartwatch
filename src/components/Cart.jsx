import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import {
  ImageCart,
  CartContainer,
  H1Cart,
  H2Cart,
  H3Cart,
  CartInfo,
  TextCart,
  BtnRemoveAll,
  BtnCheckout,
  TotalPrice,
  Form,
  Input,
  Btn,
} from "./Styles/Cart-Style";
import {
  collection,
  getFirestore,
  doc,
  updateDoc,
  increment,
  setDoc,
} from "firebase/firestore";
import FormatNumber from "../Util/FormatNumber";
import { notify } from "../Util/Notify";
import { ToastContainer } from "react-toastify";
import { Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const test = useContext(CartContext);

  const [buyer, setBuyer] = useState({
    name: "",
    adress: "",
    phone: "",
    email: "",
  });

  const orderDate = new Date().toLocaleDateString();

  const handleSubmitChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  function orderHandler() {
    const orders = {
      buyer,
      items: test.cartList.map((prod) => ({
        id: prod.id,
        title: prod.product_name,
        price: prod.price,
        quantity: prod.quantity,
      })),
      price: test.totalPrice(),
      date: orderDate,
    };

    saveToFirestore(orders);
  }

  const saveToFirestore = async (orders) => {
    const db = getFirestore();
    const createOrderFirestore = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, orders);
      return newOrderRef;
    };

    createOrderFirestore()
      .then((result) => notify(result.id))
      .catch((e) => console.log(e));

    test.cartList.forEach(async (prod) => {
      const itemRef = doc(db, "products", prod.id);
      await updateDoc(itemRef, {
        stock: increment(-prod.quantity),
      });
    });

    test.clear();
  };

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
              <TextCart>
                Sub: <FormatNumber number={prod.price * prod.quantity} />
              </TextCart>
              <button
                onClick={() => test.removeItem(prod.id)}
                style={{ cursor: "pointer" }}
              >
                {" "}
                <DeleteIcon />
              </button>
            </CartInfo>
          ))}
        <hr />
        {test.cartList.length > 0 ? (
          <>
            <H3Cart>FILL YOUR INFO</H3Cart>
            <Form>
              <Input
                type="text"
                placeholder="Full Name"
                name="name"
                required
                onChange={handleSubmitChange}
              />
              <Input
                type="text"
                placeholder="Email"
                name="email"
                required
                onChange={handleSubmitChange}
              />
              <Input
                type="text"
                placeholder="Phone"
                name="phone"
                required
                onChange={handleSubmitChange}
              />
              <Input
                type="text"
                placeholder="Address"
                name="adress"
                required
                onChange={handleSubmitChange}
              />
            </Form>
            <hr />

            <TotalPrice>FREE SHIPPING!</TotalPrice>
            <TotalPrice>
              TOTAL PRICE: <FormatNumber number={test.totalPrice()} />
            </TotalPrice>

            {buyer.name && buyer.adress && buyer.phone && buyer.email ? (
              <>
                <BtnCheckout>
                  <input
                    onClick={() => {
                      orderHandler();
                    }}
                    type="submit"
                    value="CHECKOUT NOW"
                    style={{
                      background: "none",
                      border: "none",
                      color: "#ee9bff",
                      cursor: "pointer",
                    }}
                  />
                </BtnCheckout>
              </>
            ) : (
              <>
                <BtnCheckout>
                  <input
                    type="submit"
                    value="COMPLETE INFO"
                    disabled
                    style={{ background: "none", border: "none" }}
                  />
                </BtnCheckout>
              </>
            )}
            <hr />
            <BtnRemoveAll
              onClick={() => test.clear()}
              style={{ cursor: "pointer" }}
            >
              CLEAR CART
            </BtnRemoveAll>
          </>
        ) : (
          <>
            <img
              src="https://i.imgur.com/yQKa1Bg.png"
              width="300"
              height="auto"
              alt="empty page"
            />
            <hr />
            <hr />
            <Link to="/" style={{ textDecoration: "none" }}>
              <Btn style={{ cursor: "pointer" }}>← CONTINUE SHOPPING </Btn>
            </Link>
          </>
        )}
      </CartContainer>
      <ToastContainer transition={Zoom} />
    </>
  );
};

export default Cart;
