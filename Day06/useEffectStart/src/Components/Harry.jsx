/*
import React from "react";

const api = "https://hp-api.onrender.com/api/characters";

const Harry = () => {
  let d = [];
  fetch(api)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      d = data;
    });
  return (
    <div>
      {d.map((item) => {
        return item;
      })}
    </div>
  );
};

export default Harry;

// iss code ka pura execution samjhate hai.
sabse pahle d = []
abb fetch ekk aynchrounous kaam hai to ye thoda time lega tab tak line 15 wait nahi karega naa. wo to chal jayega and empty array par map chal jayega. isiliye data nahi dikhega.Harry


fetch asynchronous hai to iska code web api me jaygega feer ye callback queue mw jayega. feer call stack me tab tab to line 15 chal chuka hoga empty array ke saath.

feer thodi der baad fetch chala hoga data aaya hoga d me set set bhi hua hoga par uske pahle line 15 chal chuki thi.

and react ko to pata bhi nahi laga jab value change hui d ki matb usme array gayi. kyuki normal variable yaha use hua hai. isiliye component re-render  nahi hua.

*/

// import { useEffect } from "react";
// import { useState } from "react";

// import { useState } from "react";

// // ⭐⭐⭐⭐⭐

// yaha infinite loop me fass gaye kyuki.

// line 53 d = [] empty array.
// isilye line 54 console.log(d) // []

// fetch aynchronous hai to ham retrun line par pahuch gaye, wha loop kiye to empty array me loop kiye feer se empty array hi aata hai.

// abb fetch ka kaam hua hoga data aaya to line 63 se setD(data) abb line 56 me d = [437 items]

// to yaha state change hua component re-render hua.
// same process feer return, feer fetch to feer setD(data) wto feer line  59 me d = [437] .

// abb ye chalte rahta hai kyu hamesha se fetch resolve hoke setD(data) baar baar 437 items daalta hai. abb hamesha state change hota hai to baar baar re-render and ye infinite loop.

/*
const api = "https://hp-api.onrender.com/api/characters";
const Harry = () => {
  let [d, setD] = useState([]);
  console.log(d);
  fetch(api)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setD(data);
    });
  return (
    <div>
      <h1>Hello</h1> 
      {d.map((item) => {
        return <h1>OK</h1>;
      })}
    </div>
  );
};

export default Harry;

*/

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
/*
import { useState } from "react";
const api = "https://hp-api.onrender.com/api/characters";

const Harry = () => {
  let [d, setD] = useState([]);
  console.log(d);

  fetch(api)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setD(data);
    });

  return (
    <div>
      <h1>Hello</h1>
      {d.map((item) => {
        return <p key={item.id}>{item.name}</p>;
      })}
    </div>
  );
};

export default Harry;
*/

/*
// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
// now we solve that things by useEffect hook.

const api = "https://hp-api.onrender.com/api/characters";

const Harry = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch(api)
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        setData(d);
      });
  }, []);
  return (
    <div>
      {data.map((item) => {
        return <h1>{item.name}</h1>;
      })}
    </div>
  );
};

export default Harry;
*/

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
// 3 cases of useEffect

/*
// ⭐⭐⭐⭐
// 1. without dependency array
// yaha jab bhi state change hoga to useEffect chalega kyuki Dependency array nahi hai.

import { useEffect } from "react";
import { useState } from "react";
const Harry = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Hello");
  });
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default Harry;

*/

/*
// ⭐⭐⭐⭐
// 2. with empty dependency array
// yaha bas initial render par chalta hai pahli baar bas. useEffect to ekk baar chalta hai hai. uske baad usko controll kar sate hai.

import { useEffect } from "react";
import { useState } from "react";
const Harry = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Hi");
  }, []);
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

export default Harry;
*/

// ⭐⭐⭐⭐
// 3. dependency array with state.
// [count], jab count state change hota hai tabhi bas useEffect chalta hai yaaha. text state change hoga feer bhi use effect nahi chalega.

// matlab jab wo state dependency array ke andar hai and agar change hua hai to useEffect chalega otherwise no.

// multiple states rakh sakte hai dependency array ke andar.
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Harry = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("hi");
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <h1>{text}</h1>
      <input
        onInput={(e) => {
          setText(e.target.value);
        }}
        type="text"
        placeholder="type here "
      />
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

export default Harry;
