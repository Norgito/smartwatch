import "../App";
import NavBar from "../components/NavBar";
import Cart from "../components/Cart";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";
import CartContextProvider from "../Context/CartContext";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:idCategory" element={<ItemListContainer />} />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default Home;
