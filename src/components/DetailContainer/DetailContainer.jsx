import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemContainer from "../ItemContainer/ItemContainer";

const DetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(id);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setProduct(res));
  }, []);

  return (
    <div key={product.id}>
      <h1>
        {product.id} - {product.title}
      </h1>
      <h6>{product.category}</h6>
      <img src={product.image} alt=""></img>
      <p>{product.description}</p>
    </div>
  );
};

export default DetailContainer;
