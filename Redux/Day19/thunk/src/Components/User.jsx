import React from "react";
import { useSelector } from "react-redux";
const User = () => {
  const users = useSelector((store) => {
    return store.User.data; // kyuki redux store me User ke andar data hai uske andar hai api ka data.
  });
  return (
    <div>
      <ul>
        {users.map((item) => {
          return <li>{item.firstName}</li>;
        })}
      </ul>
    </div>
  );
};

export default User;
