import { useState, useEffect } from "react";

const api = "https://hp-api.onrender.com/api/characters";

const Harry = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(api)
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        setData(d);
      });
  });
  return (
    <div className="grid grid-cols-3">
      {data.length > 0 ? (
        data.map((item) => {
          return (
            <div className="border">
              <p>{item.id}</p>
              <h3>{item.name}</h3>
              <p>{item.gender}</p>
              <img
                className="w-full h-[90%] "
                src={
                  item.image
                    ? item.image
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRvGdGCYpuCJ7s-SDJE7b9OQH9RoZg0queXdAsP9k0Aw&s"
                }
                alt="image not found"
              />
            </div>
          );
        })
      ) : (
        <h1>Loading....</h1>
      )}
    </div>
  );
};

export default Harry;
