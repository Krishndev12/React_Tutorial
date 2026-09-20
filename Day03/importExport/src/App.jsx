//// defalt export
// function App() {
//   return (
//     <>
//       <div>App</div>
//     </>
//   );
// }

import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";

// export default App

// //// named export
export function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

// export function MyFunction() {
//   return (
//     <>
//       <div>Myfunctions</div>
//     </>
//   );
// }
