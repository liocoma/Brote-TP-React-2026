import { useCart } from "../../context/CartContext";

export const CartSummary = () => {
  const { getCartTotal, checkout } = useCart();

  const total = getCartTotal();

  return (
    <>
      <p>TOTAL DE TU SELECCIÓN ${total} </p>
      <button className="btn bg-success primary" onClick={checkout}>
        CONFIRMAR PEDIDO
      </button>
    </>
  );
};
