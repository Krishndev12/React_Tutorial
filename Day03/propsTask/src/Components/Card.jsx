const Card = ({ title, price, inStock, discount }) => {
  return (
    <>
      <div>
        <h1>{title}</h1>
        <p>{price}</p>
        <p>instoke:{inStock ? "In Stock" : "Out of STock"}</p>
        <p>discount:{discount}</p>
      </div>
    </>
  );
};

export default Card;
