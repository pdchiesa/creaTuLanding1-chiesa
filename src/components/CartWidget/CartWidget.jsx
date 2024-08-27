import cart from "./assets/cart.svg";

const CartWidget = () => {
  return (
    <div>
      <img src={cart} alt="Carrito" />
      <span>0</span>
    </div>
  );
};

export default CartWidget;
