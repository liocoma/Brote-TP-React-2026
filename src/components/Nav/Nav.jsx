import { Link } from "react-router-dom";
import "./Nav.css";
import { useCart } from "../../context/CartContext";

export const Nav = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();
  return (
    <nav aria-label="Navegación principal">
      <ul className="nav-list">
        <li><Link to="/">Tienda</Link></li>
        <li><Link to="/cart">Mi carrito{totalItems > 0 && <span className="incart">{totalItems}</span>}</Link></li>
      </ul>
    </nav>
  );
};
