import React from "react";
import { useSelector } from "react-redux";
const Email = () => {
  const users = useSelector((store) => {
    return store.User; // yaha ham store.User.data naa kar ke store.User kar rahe hai kyuki store.User ke andar teen chize hai. loading,error,data.
    // to abb ham teeno chi use kar sakte hai store.User.data karne se bas data hi use kar paate hai
  });

  //   yaha use kar rahe hai loading ka.
  if (users.loading) {
    return <h1>Loading...</h1>;
  }

  if (users.error) {
    return <h2>{users.error}</h2>;
  }

  return (
    <div>
      <ul>
        {/* // yaha use kar rahe hai data ka */}
        {users.data.map((item) => {
          return <li>{item.email}</li>;
        })}
      </ul>
    </div>
  );
};

export default Email;
