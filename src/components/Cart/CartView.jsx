import { useCart } from "../../context/CartContext";
import "./Cart.css";
import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";
import { Link } from "react-router-dom";

export const CartView = () => {
  const { cart } = useCart();

  return (
    <section className="cart-container">
      <h1>Tu selección verde</h1>

      {cart.length ? (
        <>
          <CartList />
          <CartSummary />
        </>
      ) : (
        <>
          <p className="empty-cart">Todavía no sumaste ninguna planta 🌱</p>
          <Link className="btn primary bg-primary" to={"/"}>
            Explorar plantas
          </Link>
        </>
      )}
    </section>
  );
};
