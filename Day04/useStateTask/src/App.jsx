import Chat from "./Components/Chat";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

const App = () => {
  return (
    <div>
      <div style={{ backgroundColor: "yellow", height: "50px" }}>
        <Navbar />
      </div>
      <div
        id="main-div"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default App;
