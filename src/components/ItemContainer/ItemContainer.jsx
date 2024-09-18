import { Link } from "react-router-dom";

const ItemContainer = ({ product }) => {
  /*return (
    <div key={item.id}>
      <h1>
        {item.id} - {item.title}
      </h1>
      <h6>{item.category}</h6>
      <img src={item.image} alt=""></img>
      <p>{item.description}</p>
      <Link to={`/product/${item.id}`}>Ver Detalle</Link>
    </div>
  );*/
  return (
    <Link key={product.id} to={`/product/${product.id}`} className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          alt={product.title}
          src={product.image}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
    </Link>
  );
};

export default ItemContainer;
