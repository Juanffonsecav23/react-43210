import { useState } from "react";
import Button from "../Button/Button";
import "./item.css";
/* import ItemCount from "../ItemCount/ItemCount"; */
/* import WhitCosoleLog from "../HOCs/WhitRenderCount"; */
import { Link } from "react-router-dom";

function CardDescription({ price, category, discount }) {

  const ClassNamePrice = discount > 25 ?  "item-card_price-tag_offer" : "item-card_price-tag"

  return (
    <div className="item-card_detail">
      {discount && <small>Descuento: {discount} % </small>}
      {discount > 25 && <small style={{ color: "green" }}>Ofertón!</small>}
      {discount > 25 && price < 2000 && (
        <small style={{ color: "red" }}>Super Ofertón!</small>
      )}
      <h4 className={ClassNamePrice}>$ {price}</h4>
      <small>{category}</small>
    </div>
  );
}

function Item({ title, img, price, category, color, id, discount , stock }) {
  const [isFavorite, setIsFavorite] = useState(false);
  let classNameFavorite;

  if (isFavorite === false) {
    classNameFavorite = "item-card_favicon";
  } else {
    classNameFavorite = "item-card_favicon favorite";
  }

  /* let classNameFavorite = isFavorite
    ? "item-card_favicon favorite"
    : "item-card_favicon"; */

  function handleClickFav(event) {
    event.preventDefault();
    event.stopPropagation();
    setIsFavorite(!isFavorite);
  }

  const stylesButton = {
    backgroundColor: stock===0 ? "grey" : "inherit"
  };

  return (
    <Link to={`/product/${id}`}>
    <div className="item-card">
      <button onClick={handleClickFav} className={classNameFavorite}>
        ♥
      </button>

      <div className="item-card_header">
        <h2>{title}</h2>
        <small>{category}</small>
      </div>
      <div className="item-card_img">
        <img src={img} alt="imagen"></img>
      </div>

      <CardDescription discount={discount} price={price} color={color} />
      <Button style={stylesButton} color={color}>Ver detalle</Button>
    </div>
    </Link>
  );
}
/* const WrappedComponent = WhitCosoleLog(Item) */
export default Item /* WrappedComponent */ ;