import React from "react";
import { useSelector } from "react-redux";

const Email = () => {
  const user = useSelector((store) => {
    return store.User;
  });
  return (
    <div>
      <ul>
        {user.map((item) => {
          return <li key={item.id}>{item.firstName}</li>;
        })}
      </ul>
    </div>
  );
};

export default Email;
