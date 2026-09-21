import React from "react";

import { useState } from "react";
const TempretureConverter = () => {
  const [farenhite, setFarenhite] = useState();
  return (
    <div>
      <input
        onInput={(e) => {
          setFarenhite((e.target.value * 9) / 5 + 32);
        }}
        type="text"
      />
      <h2>Farenhite:{farenhite}°F</h2>
    </div>
  );
};

export default TempretureConverter;
