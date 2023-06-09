import Item from "../Item/Item";
import Flex from "../Flex/Flex";
import { useState } from "react";
import Loader from "../Loader/Loader";

function FilterList({ children, items }) {
  const [searchword, setSearchword] = useState("");

  function filterList() {
    if (searchword === "") {
      return items;
    } else {
      return items.filter((item) => {
        let textTitle = item.title.toLowerCase();
        let word = searchword.toLowerCase();
        return textTitle.includes(word);
      });
    }
  }

  function handleSearch(evt) {
    setSearchword(evt.target.value);
  }

  return children(handleSearch, filterList());
}

function ItemList({ products }) {
  /* early return / retorno anticipado */
  if(products.length === 0 ) return <Loader/>
  return (
    <>
      <FilterList items={products}>
        {(handleSearch, filterList) => (
          <>
            <input onChange={handleSearch} />
            <Flex title="Mi catálogo">
              {filterList.map((itemInArray) => (
                <Item key={itemInArray.id} {...itemInArray} />
              ))}
            </Flex>
          </>
        )}
      </FilterList>
    </>
  );
}

export default ItemList;