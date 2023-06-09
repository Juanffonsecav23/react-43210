import { createContext, useState } from "react";

export const cartContext  = createContext ({cart : []})

export function CartContextProvider ({children}){

    const [cart, setCart] = useState([])

    function addItem(product , count) {
        const newCart = [...cart]; //shalow copy / deep clone
        /* const newCart2 = cart.map(item=>item) */
        newCart.push({...product , count});
        setCart(newCart)
    }

    function countItems() {
        let total = 0;
        cart.forEach((item) => {
            total += item.count
        });
        return total
    }/* funcion para la suma total de productos del carrito */

    function countTotalPrice(){
        let totalPrice = 0;
        cart.forEach((item)=> {
            totalPrice = item.price * item.count
        });
        return totalPrice
    }/* funcion para totalizar el precio de los productos agragados */

    function clearCart(emptyCart) {
        setCart(cart.filter(cart => cart.value !== emptyCart))
    }/* funcion para limpiar todos los productos del carrito */

    function removeItem(idDelete) {
        setCart(cart.filter(item => item.id !== idDelete));
    }/* funcion para eliminar uno o varios items del carrito */

    return(
        <cartContext.Provider value={ { cart , setCart , addItem , countItems, countTotalPrice, removeItem, clearCart } }>
            {children}
        </cartContext.Provider>
    )
}