/*
import { useState, useEffect } from "react";

const MountAndUpdate = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("mounted");
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increament
      </button>
    </div>
  );
};

export default MountAndUpdate;

// yaha component render hua to uske baad useEffect chala to console me mounted print hua.
*/

/*
// ⭐⭐⭐⭐⭐⭐⭐⭐⭐

import { useState, useEffect } from "react";

const MountAndUpdate = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("mounted");
    setInterval(() => {
      console.log("Ad");
    }, 10000);
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increament
      </button>
    </div>
  );
};

export default MountAndUpdate;

// yaha component unmount ho jata hai uske baad bhi ye useEffect ka kaam chalte rahta hai matlab console me ad dikhte rahta hai.

// to ye chiz sahi nahi hai. kyuki jab tak component mounted hai tab tak to chalo useEFfect chalana hai par jab component hi unmount ho jaye tab to band kar dena hai usko.

*/

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

// wo component unmount hone ke baad useEffect ko bhi rok dena hai .

// uske liye useEffect ekk clean-up function return karta hai.
// ye clean function hamko help karta hai ki kab component unmount hua uske baad kaise useEffcet ko rokna hai.

import { useState, useEffect } from "react";

const MountAndUpdate = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // console.log("mounted");
    let id = setInterval(() => {
      console.log("Ad");
    }, 1000);

    // jab hide button click karte hai to component unmount ho jata hai yahi clean-up function se ham pata kar paate hai ki kab component unmount hua.

    // abb jab ham pata kar liye ki component unmount ho gaya hai to hamko useEffect ke andar ka kaam rokna hai. jaise setTimeout,setInterval,api call,
    return () => {
      // console.log("unmounted");
      clearInterval(id);
    };
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increament
      </button>
    </div>
  );
};

export default MountAndUpdate;

// yaha ye hua ki jab component unmount hua to useEffcet ka clean-up function chala and ad dikhna band ho gaya.
