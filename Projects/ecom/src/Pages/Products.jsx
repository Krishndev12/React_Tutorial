import { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import Card from "../Components/Card";

const api = "https://dummyjson.com/products";

const Products = () => {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch(api);
      const apiData = await res.json();
      setProd(apiData.products);
    }

    getData();
  }, []);

  if (prod.length == 0) {
    return (
      <div className="flex h-screen w-[100%] justify-center items-center">
        <Loader />
      </div>
    );
  }
  return (
    <div className="grid grid-cols-4 py-2">
      {prod.map((item) => {
        return <Card info={item} />;
      })}
    </div>
  );
};

export default Products;
