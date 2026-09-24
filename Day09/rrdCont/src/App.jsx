import { Routes, Route, Link } from "react-router-dom";

import A from "./Components/A";
import B from "./Components/B";
import C from "./Components/C";
import Error from "./Components/Error";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/a"
          element={
            <>
              <Navbar />
              <A />
            </>
          }
        />
        <Route
          path="/b"
          element={
            <>
              <Navbar />
              <B />
            </>
          }
        />
        <Route
          path="/c"
          element={
            <>
              <Navbar />
              <C />
            </>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
