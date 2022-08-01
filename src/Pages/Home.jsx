
import "../App"
import NavBar from "../components/NavBar/NavBar";
import Cart from "../components/Cart/Cart";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import CartContextProvider from "../Context/CartContext";

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
