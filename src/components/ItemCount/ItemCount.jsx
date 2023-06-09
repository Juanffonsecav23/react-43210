import Flex from "../Flex/Flex";
import { useState } from "react";
import "./itemcount.css";
import Button from "../Button/Button";

function ItemCount(props ) {
  const [count, setCount] = useState(0);

  function handleAdd() {
    if (count < props.stock) setCount(count + 1);
  }

  function handleSubstract() {
    if (count > 1) setCount(count - 1);
  }

  let isDisabledSubstract = count === 1;
  /* let isDisabledAdd = ??? */

  return (
    <div className="itemcount_container">
      <small>Agregá la cantidad deseada al carrito</small>
      <div className="itemcount_control">
        <Flex>
          <button
            disabled={isDisabledSubstract}
            className="btn"
            onClick={handleSubstract}
          >
            -
          </button>
          <span className="itemcount_count">{count}</span>
          <button className="btn" onClick={handleAdd}>
            +
          </button>
        </Flex>
      </div>

      <div className="itemcount_btns">
        <Button  onClick={()=>{props.onAddToCart(count)}} className="btn">Agregar al carrito</Button>
      </div>
    </div>
  );
}

export default ItemCount;