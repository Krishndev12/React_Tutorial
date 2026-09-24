import { useEffect } from "react";

const api = "https://hp-api.onrender.com/api/characters";

const Harryp = ({ harry, setHarry }) => {
  useEffect(() => {
    fetch(api)
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        setHarry(d);
      });
  }, []);
  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        {harry.length ? (
          harry.map((item) => {
            return (
              <div className="border">
                <div className="h-[30%]">
                  <p>{item.id}</p>
                  <p>{item.name}</p>
                  <p>{item.gender}</p>
                </div>
                <img
                  className="h-[70%] w-full cover-fit"
                  src={
                    item.image
                      ? item.image
                      : "https://img.magnific.com/free-vector/user-circles-set_78370-4704.jpg?semt=ais_hybrid&w=740&q=80"
                  }
                  alt="image not found"
                />
              </div>
            );
          })
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </>
  );
};

export default Harryp;
