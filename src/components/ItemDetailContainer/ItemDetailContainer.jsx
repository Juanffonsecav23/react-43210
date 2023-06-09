/* AsyncMock - servicioMock / backend/nube/api */

import { useContext, useEffect, useState } from "react";
import mobilePhones from "../../data/mobiles";
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";
import { useParams } from "react-router-dom";
import { cartContext } from "../../context/carContext";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

function getItemData(idURL) {
    return new Promise((resolve) => {
        setTimeout(() => {
          const requestedItem = mobilePhones.find((item)=> item.id === Number(idURL))
            resolve(requestedItem);
          }, 1000);
    })
}

function ItemDetailContainer() {

    /* estado */
    const [product , setProduct]= useState(null);
    const [countInCart , setCountInCart] = useState(0)
    const {cart , addItem ,countTotalPrice, removeItem, clearCart} = useContext(cartContext);/* 2. Se usa o se consume el context */
    console.log(cart , "context");
    const {id} = useParams();

    /* efecto */
    useEffect(()=>{
        getItemData(id).then((respuesta)=>{
            setProduct(respuesta)
        });
    },[id]);

    /* event handler */
    /* function onCount(operacion){
      console.log("Contando ... ", operacion);
    } */

    function onAddToCart (count){
      addItem(product , count)
      setCountInCart(count)
      console.log(`Agregaste ${count} - ${product.title} al carrito` ) /* sweet alert /toastify */
    }
    /* ui */

    if (product) {

  return (
    <div className="card-detail_main">
    <div className="card-detail_img">
      <img src={product.img} alt={product.title} />
    </div>
    <div className="card-detail_detail">
      <h1>{product.title}</h1>
      <h2 className="priceTag">$ {product.price}</h2>
      <small>{product.detail}</small>
      {/* condicionales / rendering condicional */}
      {
        countInCart === 0 ?       
        <ItemCount onAddToCart={onAddToCart} stock={5} />
        : 
        <Link to="/cart"> Ir al carrito</Link>
      }
      <Button onClick={()=> removeItem(product.id)}>Eliminar</Button>{/* eliminar un producto del carrito de compras  */}
      <Button onClick={()=> alert(countTotalPrice(product.price))}>total</Button>
      <Button onClick={()=> clearCart()}>limpiar</Button>
    </div>
  </div>
  )
}
return <Loader/>
}

export default ItemDetailContainer