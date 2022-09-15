import { useState } from "react";
import { createContext } from "react";

export let CartContext = createContext()

export function CartContextProvider(props) {

    let [Cart, setCart] = useState(0)

    let increasecart = () => { Cart === -1 ? setCart(Cart = 1) : setCart(Cart + 1) }

    let providerValue = { Cart, increasecart }
    console.log(Cart);

    return (
        <CartContext.Provider value={providerValue}>
            {props.children}
        </CartContext.Provider>
    );
}