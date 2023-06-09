/* import Item from "../Item/Item"; */
import { useEffect, useState } from "react";

/* AsyncMock - servicioMock / backend/nube/api */
import mobilePhones from "../../data/mobiles";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mobilePhones);
    }, 1000);
  }); 
}
/* ---------------------------------------------- */

function ItemListContainer() {
  let [products, setProducts] = useState([]);
  const {categoryid} = useParams();



  useEffect(() => {
    getData().then((respuesta) => {
      if (categoryid) {
        const filterProducts = respuesta.filter(
          (item) => item.category === categoryid
        );
        setProducts(filterProducts);
      } else {
        setProducts(respuesta);
      }
      
    });
  }, [categoryid]);

  return <ItemList products={products} />;
}

export default ItemListContainer;