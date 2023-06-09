/* import Item from "../Item/Item"; */
import { useEffect, useState } from "react";

/* AsyncMock - servicioMock / backend/nube/api */
import mobilePhones from "../../data/mobiles";
import ItemList from "./ItemList";

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mobilePhones);
    }, 2000);
  }); 
}
/* ---------------------------------------------- */

/* HOC */

function withSearch(OriginalComponent) {
    function WrappedComponent() {

        const[searchWord , setSearchWord] = useState("");

    function handleChange(evt) {
        const valor = evt.target.value;
        setSearchWord(valor)
    }

    function filterList(products) {
        if (searchWord === "") {
            return products;
        }else {
            return products.filter(item => {
                let textTitle = item.title.toLowerCase();
                let word = searchWord.toLowerCase();
                return textTitle.includes(word)});
        }
        
    }

        return (
            <>
            <input onChange={handleChange} placeholder="Buscar Productos" ></input>
            <OriginalComponent filterList={filterList}/>
            </>
        )
    }
    return WrappedComponent
}

function ItemListContainerSearch({filterList}) {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    getData().then((respuesta) => {
      console.log("llegaron los datos", respuesta);
      setProducts(respuesta);
    });
  }, []);

  return <ItemList products={filterList(products)} />;
}
const WrappedItemLIstContainer = withSearch(ItemListContainerSearch)
export default WrappedItemLIstContainer  ;