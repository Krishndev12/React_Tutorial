import { useState } from "react";

const Sidebar = () => {
  const [enter, setEnter] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setEnter(true);
        // console.log("enter");
      }}
      onMouseLeave={() => {
        setEnter(false);
        // console.log("out");
      }}
      style={{
        width: enter ? "200px" : "20px",
        backgroundColor: "red",
        height: "100vh",
      }}
    >
      <p>sidebar</p>
    </div>
  );
};

export default Sidebar;
