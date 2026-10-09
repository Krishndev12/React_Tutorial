import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "./Utils/UserSlice";
import User from "./Components/User";
import Email from "./Components/Email";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers()); // getUsers ekk function hi hai at the to call karni padegi yaha.
  }, []);
  return (
    <div>
      <User />
      <Email />
    </div>
  );
};

export default App;
