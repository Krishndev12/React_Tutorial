import { useDispatch, useSelector } from "react-redux";
import { BUY_CAKE, RESTOCK_CAKE } from "../Utils/redux/Store";
import { useState } from "react";
const Cake = () => {
  const [q, setQ] = useState(0);
  const dispatch = useDispatch(); // ekk function return karta hai useDispatch.
  const val = useSelector((store) => {
    // console.log(store);
    return store.numOfCakes;
  }); // useSelector me ekk callback function pass karte hai.
  return (
    <div>
      <h1>Num of cakes :{val}</h1>
      <input
        onChange={(e) => {
          setQ(e.target.value);
        }}
        type="number"
      />
      <button
        onClick={() => {
          dispatch(BUY_CAKE(q));
        }}
      >
        buy cake
      </button>
      <button
        onClick={() => {
          dispatch(RESTOCK_CAKE());
        }}
      >
        restock
      </button>
    </div>
  );
};

export default Cake;
