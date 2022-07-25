
import "../../App"
import NavBar from "../NavBar/NavBar";
import Cart from "../Cart/Cart";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import CartContextProvider from "../CartContext";

const Home = () => {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:idItem" element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default Home;
