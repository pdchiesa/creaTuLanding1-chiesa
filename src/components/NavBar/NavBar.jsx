import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <h2>Nombre Tienda</h2>
      <ul>
        <li>Categoria 1</li>
        <li>Categoria 2</li>
        <li>Categoria 3</li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
