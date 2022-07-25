import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

   // const addToCart = (prod) => {setCartList([...cartList, prod])}

   const addItem = (prod, quantity) => {
    if (isInCart(prod.id)) {
        setCartList(cartList.map(p => {
            return p.id === prod.id ? { ...p, quantity: p.quantity + quantity } : p
        }));
    } else {
        setCartList([...cartList, { ...prod, quantity}]);
    }
   }

    const clear = () => setCartList([]);
    const isInCart = (id) => cartList.find(p => p.id === id) ? true : false;
    const removeItem = (id) => setCartList(cartList.filter(p => p.id !== id));


    return (
        <CartContext.Provider value ={{
            cartList,
            addItem,
            removeItem,
            clear,
            isInCart,
            }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider