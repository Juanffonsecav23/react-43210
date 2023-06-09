import { useContext } from "react";
import { cartContext } from "../../context/carContext";
import { Link } from "react-router-dom";

function CartView() {
    const {cart , removeItem} = useContext(cartContext)

    if (cart.length === 0) {
        return(<div>
            <h3>El carrito esta vacio </h3>
            <Link to="/">Volver al inicio</Link>
        </div>)
    }
        return (
    <div>
    <h2>Carrito de compras</h2>
    {
        cart.map (item =>
            <ul key={item.id}>
                <li>Producto : {item.title}
                <br/>
                Cantidad :{item.count} </li>
                <button onClick={()=>removeItem(item.id)}>x</button>
                <br/>
                $ {""} {item.count * item.price}
            </ul>)
    }
    </div>)
    }
export default CartView