import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Btn,
  Carga,
  PLoading,
  ItemPrice,
  ItemTitle,
  ItemStock,
  ItemDescrip,
  ItemCardHeader,
  ItemBackground,
  ImgBox,
  Cargando,
  ItemProdContainer,
} from "./Styles/StyledComponents";
import ItemCount from "./ItemCount";
import { CartContext } from "../Context/CartContext";

const ItemDetail = ({ prod }) => {
  const [itemCount, setItemCount] = useState(0);
  const test = useContext(CartContext);

  const onAdd = (quantity) => {
    setItemCount(quantity);
    test.addItem(prod, quantity);
  };

  return (
    <>
      {prod && prod.image ? (
        <ItemProdContainer>
          <ItemBackground>
            <ImgBox src={prod.image} alt={prod.product_name} />
            <ItemCardHeader>
              <ItemTitle>{prod.product_name}</ItemTitle>
              <ItemDescrip>{prod.description}</ItemDescrip>
              <ItemPrice>$ {prod.price}</ItemPrice>
              <ItemStock>Available: {prod.stock} Units</ItemStock>
              {itemCount === 0 ? (
                <ItemCount
                  stock={prod.stock}
                  initial={itemCount}
                  onAdd={onAdd}
                />
              ) : (
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Btn style={{ cursor: "pointer" }}>← CONTINUE SHOPPING </Btn>
                </Link>
              )}

              {itemCount === 0 ? (
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Btn style={{ cursor: "pointer" }}>← BACK HOME </Btn>
                </Link>
              ) : (
                <Link to="/cart" style={{ textDecoration: "none" }}>
                  <Btn style={{ cursor: "pointer" }}>GO TO CART → </Btn>
                </Link>
              )}
            </ItemCardHeader>
          </ItemBackground>
        </ItemProdContainer>
      ) : (
        <>
          <Carga>
            <PLoading>LOADING</PLoading>
            <Cargando></Cargando>
          </Carga>
        </>
      )}
    </>
  );
};

export default ItemDetail;
