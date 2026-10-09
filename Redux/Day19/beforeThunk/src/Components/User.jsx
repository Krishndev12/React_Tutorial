import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addName } from "../Utils/UserSlice";
const api = "https://dummyjson.com/users";
const User = () => {
  //   const [user, setUser] = useState([]);

  const user = useSelector((store) => {
    return store.User;
    // console.log(store);
  });
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(api)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data.users);
        // setUser(data.users);
        dispatch(addName(data.users));
      });
  }, []);
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

export default User;
