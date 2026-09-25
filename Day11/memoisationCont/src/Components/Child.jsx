/*
// yaha jab bhi input me ham number likhte hai to to nth prime number aa raha hai 5 digit ke baad response slow ho jata hai and 7 ke baad to aata hai bhi nahi hai answer.

// chalo ye to expected hai badi calculation hai to response bhi slow aati hai badi input ke liye.

// par main dikkat ye hai ki agar  yaha koi qur state hai text ki uski input me onChange event hai isme jo type karte hai live dikh rahi hai h1 me.

// agar number ki input me ekk badi number likha hua hai wo calulate to ho raha hai, abb jab text ki input me type kar rahe hai to wo bhi time le raha hai UI me dikhne me.



import { useState } from "react";
import { memo } from "react";

const Child = () => {
  const [n, setN] = useState(1);
  console.log("child rendered");

  function nthPrime(n) {
    if (n < 1) return null;

    // Estimate an upper limit for the nth prime
    let limit;

    if (n < 6) {
      limit = 15;
    } else {
      limit = Math.ceil(n * (Math.log(n) + Math.log(Math.log(n)))) + 10;
    }

    const isPrime = new Array(limit).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i < limit; i++) {
      if (isPrime[i]) {
        for (let j = i * i; j < limit; j += i) {
          isPrime[j] = false;
        }
      }
    }

    let count = 0;

    for (let i = 2; i < limit; i++) {
      if (isPrime[i]) {
        count++;

        if (count === n) {
          return i;
        }
      }
    }
  }

  let ans = nthPrime(n);
  return (
    <div>
      <h1>
        {n}th prime is {ans}
      </h1>
      <input
        onChange={(e) => {
          setN(Number(e.target.value));
        }}
        type="number"
      />
    </div>
  );
};

// export default Child;

export default memo(Child);
*/

// ⭐⭐⭐⭐⭐⭐⭐⭐
// yaha hai dikkat wala code, jab bhi text state change ho rahi hai tab component re-render ho raha hai. to line no 55 chal raha hai jab bhi text state change ho raha hai, matlab number input ki value bhi change nahi ho rahi hai feer bhi ye calculation kar raha hai baar baar. jabki ye unneccessary hai.

// jab number input ki value change ho tab cahle kyuki tab updated calculation chahiye. lekin sirf text state cahnge ho component re-render ho tab iske wajah se nahi hona chahiye calculation. app ko slow kar deta hai ye.

/*
import { useState } from "react";
import { memo } from "react";

const Child = () => {
  const [n, setN] = useState(1);
  console.log("child rendered");
  const [text, setText] = useState("");

  function nthPrime(n) {
    if (n < 1) return null;

    // Estimate an upper limit for the nth prime
    let limit;

    if (n < 6) {
      limit = 15;
    } else {
      limit = Math.ceil(n * (Math.log(n) + Math.log(Math.log(n)))) + 10;
    }

    const isPrime = new Array(limit).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i < limit; i++) {
      if (isPrime[i]) {
        for (let j = i * i; j < limit; j += i) {
          isPrime[j] = false;
        }
      }
    }

    let count = 0;

    for (let i = 2; i < limit; i++) {
      if (isPrime[i]) {
        count++;

        if (count === n) {
          return i;
        }
      }
    }
  }

  let ans = nthPrime(n);
  return (
    <div>
      <h1>
        {n}th prime is {ans}
      </h1>
      <input
        onChange={(e) => {
          setN(Number(e.target.value));
        }}
        type="number"
      />

      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
        placeholder="text input"
      />
      <h1>{text}</h1>
    </div>
  );
};

// export default Child;

export default memo(Child);
*/

/*
// ⭐⭐⭐⭐⭐⭐⭐⭐
// now comes useMemo() hook

import { useMemo } from "react";
import { useState } from "react";
import { memo } from "react";

const Child = () => {
  const [n, setN] = useState(1);
  console.log("child rendered");
  const [text, setText] = useState("");

  function nthPrime(n) {
    if (n < 1) return null;

    // Estimate an upper limit for the nth prime
    let limit;

    if (n < 6) {
      limit = 15;
    } else {
      limit = Math.ceil(n * (Math.log(n) + Math.log(Math.log(n)))) + 10;
    }

    const isPrime = new Array(limit).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i < limit; i++) {
      if (isPrime[i]) {
        for (let j = i * i; j < limit; j += i) {
          isPrime[j] = false;
        }
      }
    }

    let count = 0;

    for (let i = 2; i < limit; i++) {
      if (isPrime[i]) {
        count++;

        if (count === n) {
          return i;
        }
      }
    }
  }

  // abb ye tabhi calculate hoga again jab number input ki value change hogi only.
  // jo bhi ye return kiya wo ans me save ho jaat hai.
  let ans = useMemo(() => {
    return nthPrime(n);
  }, [n]);

  return (
    <div>
      <h1>
        {n}th prime is {ans}
      </h1>
      <input
        onChange={(e) => {
          setN(Number(e.target.value));
        }}
        type="number"
      />

      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
        placeholder="text input"
      />
      <h1>{text}</h1>
    </div>
  );
};

// export default Child;

export default memo(Child);
*/

// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// ⭐⭐⭐⭐⭐⭐⭐⭐
// ⭐⭐⭐⭐⭐⭐⭐⭐
// jitni baar bhi function call hota hai to ekk new GEC banta hai. to yaha jab bhi state change hota hai component re-render hota hai and ye function nthPrime bhi to utni baar ban rahi hogi memory me.

// ekk function ko baar baar initialize and declare hone se bachana during re-render.

import { useMemo } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { memo } from "react";

const Child = () => {
  const [n, setN] = useState(1);
  console.log("child rendered");
  const [text, setText] = useState("");

  // ye hai useCallback hook, ham function ko hi memoize kar dete hai and dependency aaray bhi hoti hai second argument.
  const nthPrime = useCallback(function (n) {
    if (n < 1) return null;

    // Estimate an upper limit for the nth prime
    let limit;

    if (n < 6) {
      limit = 15;
    } else {
      limit = Math.ceil(n * (Math.log(n) + Math.log(Math.log(n)))) + 10;
    }

    const isPrime = new Array(limit).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i < limit; i++) {
      if (isPrime[i]) {
        for (let j = i * i; j < limit; j += i) {
          isPrime[j] = false;
        }
      }
    }

    let count = 0;

    for (let i = 2; i < limit; i++) {
      if (isPrime[i]) {
        count++;

        if (count === n) {
          return i;
        }
      }
    }
  }, []);

  // abb ye tabhi calculate hoga again jab number input ki value change hogi only.
  let ans = useMemo(() => {
    return nthPrime(n);
  }, [n]);

  return (
    <div>
      <h1>
        {n}th prime is {ans}
      </h1>
      <input
        onChange={(e) => {
          setN(Number(e.target.value));
        }}
        type="number"
      />

      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
        placeholder="text input"
      />
      <h1>{text}</h1>
    </div>
  );
};

// export default Child;

export default memo(Child);
