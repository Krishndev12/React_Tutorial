const Card = ({ name, price }) => {
  return (
    <div className="h-full">
      <div className="h-full flex items-center justify-center bg-red-500 border-2 border-black border-solid text-sm font-bold flex-col">
        <h1> {name}</h1>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Card;
