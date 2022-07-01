import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

const CartWidget = () => {
    return (
      <Badge badgeContent={6} color="secondary">
        <ShoppingCartIcon color="white" />
      </Badge>
    );
  }
export default CartWidget;