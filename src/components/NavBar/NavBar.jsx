import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  const [category, setCategory] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((res) => setCategory(res));
  }, []);

  return (
    <nav>
      <h2 className="text-3xl font-bold underline">
        <Link to={"/"}>MiTienda</Link>
      </h2>
      {category?.map((cat) => (
        <Link key={cat} to={`/category/${cat}`}>
          {cat}
        </Link>
      ))}
      <CartWidget />
    </nav>
  );
};

export default NavBar;
