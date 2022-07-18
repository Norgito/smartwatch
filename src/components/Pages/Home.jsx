
import "../../App"
import NavBar from "../NavBar/NavBar";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const Home = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:idItem" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Home;
