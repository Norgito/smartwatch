import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const CartWidget = () => {
  const test = useContext(CartContext);

  return (
    <Badge badgeContent={test.totalProducts()} color="secondary">
      <ShoppingCartIcon color="white" />
    </Badge>
  );
};
export default CartWidget;
