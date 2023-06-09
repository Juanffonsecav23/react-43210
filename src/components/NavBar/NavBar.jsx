import { Link } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { cartContext } from "../../context/carContext";
/* import Button from "../Button/Button"; */


export default function NavBar() {
  return (
    <nav>
      <ul className="nav-menu">
        <h2>
          <li>
            <Link to="/">miTienda 📱</Link>
          </li>
        </h2>
        <li className="nav-item">
          <Link  className="nav-link" to="/product/1">
            Prueba Products
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/Apple">
            Apple
          </Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/category/Samsung">
            Samsung
          </Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/category/Xiaomi">
            Xiaomi
          </Link>
        </li>
        <CartWidget/>
        
      </ul>
    </nav>
  );
}

function CartWidget() {
  const {countItems } = useContext(cartContext)

  if(countItems() === 0 ){
    return(
      <Link to="/cart">🛒</Link>
    )
  }return(
  <Link to="/cart">
    🛒
    <span>{countItems()}</span> {/* no hacerlo asi es mejor  */}
  </Link>
  )
}/* consumidor del context */