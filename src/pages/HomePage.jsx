import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import ViewCount from "../components/ViewCount/ViewCount"


function HomePage() {
  return (
    <>
    <ViewCount initialValue={1}/>
    <ItemListContainer/>
    </>
  )
}

export default HomePage