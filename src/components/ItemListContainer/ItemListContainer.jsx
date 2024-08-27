/* eslint-disable react/prop-types */
const ItemListContainer = ({ saludo, proximamente }) => {
  return (
    <div>
      <h1>{saludo}</h1>
      <h2>{proximamente}</h2>
    </div>
  );
};

export default ItemListContainer;
