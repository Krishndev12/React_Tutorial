import Left from "./Components/Left";
import Right from "./Components/Right";

const App = () => {
  return (
    <div>
      <div className="flex justify-between">
        <Left />
        <Right />
      </div>
    </div>
  );
};

export default App;
