import { useState } from "react";

const Issue = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          /*
            // react setter function acts as aynchronous. it is a synchrounous but acts as asynchronous.
          setCount(count + 1); // so when this line executes count was 0 so it made 0+1 , means count=1.

          setCount(count + 1); // but  b/c of asynchronous acting jis time line 11 execute hua ussi time saath ke saath ye bhi ho gaya to yaha bhi count uss time 0 hi tha isiliye.
*/
          // ⭐⭐ isiliye do setter Function ke baad bhi increament 1 se hi hua yaha. yahi issue hai .
          // isko solve karte hai  , setter function me ekk callback function likte hai usme previous value ki access ho
          // ti hai.

          setCount((prev) => {
            return prev + 1;
          });
          setCount((prev) => {
            return prev + 1;
          });
        }}
      >
        Increament
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decreament
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Issue;
