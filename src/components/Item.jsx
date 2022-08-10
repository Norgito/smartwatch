import React from "react";
import {
  Card,
  CardImg,
  Image,
  Btn,
  Price,
  H2Style,
} from "./Styles/StyledComponents";
import { Link } from "react-router-dom";

const Item = ({ prod, id }) => {
  return (
    <div key={prod.id}>
      <Card>
        <Link to={`/item/${id}`} style={{ textDecoration: "none" }}>
          <CardImg>
            <Image src={prod.image} alt={prod.product_name} />
          </CardImg>
          <H2Style>{prod.product_name}</H2Style>

          <Price>${prod.price}</Price>

          <Btn style={{ cursor: "pointer" }}>MORE DETAILS...</Btn>
        </Link>
      </Card>
    </div>
  );
};

export default Item;
