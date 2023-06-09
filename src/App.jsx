import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from "./pages/homePage";
import { CartContextProvider } from "./context/carContext";
import CartView from "./components/CartView/CartView";
/* import { createContext, useState } from "react"; */

/* createContext(valueDefault) 
export const cartContext = createContext({cart : []})  1. Primer paso es crear el context 

function CartContextProvider (props){  3. Tercer paso es crear el provider  
  const [cart , setCart] = useState([{cart : [{id:1 , title:"Prueba"}]}])
  const CartProvider = cartContext.Provider; 

  function addItem() {
    
  }

  return(
    
    <cartContext.Provider value={{cart: cart , addItem: addItem}}>
      {props.children}
    </cartContext.Provider>
  );
} */


/* Rendering condicional:
  { codicion} ? <h1>Hola</h1> : <h2>Chau</h2> 
  { codicion} && <h1>Esto</h1>
  if(codicion) return <h1>Esto<h1>.... return <h2>Otra cosa</h2>
*/
function App() {
  return (
    <CartContextProvider >
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>  
        <Route path="/product/:id" element={<ItemDetailContainer />}/>  
        <Route path="/category/:categoryid" element={<HomePage/>}/>  
        <Route path="/cart" element={<CartView/>}/>  
        <Route path="*" element={<h4>Error 404: Page not found</h4>}/>  
      </Routes>
      {/* <footer>Hola soy el FOOTER</footer> */}
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;