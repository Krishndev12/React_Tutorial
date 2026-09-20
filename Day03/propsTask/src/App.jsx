import Card from "./Components/Card";
import User from "./Components/User";

const App = () => {
  return (
    <>
      {/* <Card title={"Beauty"} price={2000} inStock={true} discount={"10%"} />
      <Card title={"Beauty"} price={2000} inStock={true} discount={"10%"} />
      <Card title={"Beauty"} price={2000} inStock={true} discount={"10%"} /> */}

      <User name={"Krishna"} id={10} gender={"male"} isPresent={true} />
      <User name={"Krishna"} id={10} gender={"male"} isPresent={true} />
      <User name={"Krishna"} id={10} gender={"male"} isPresent={false} />
      <User name={"Krishna"} id={10} gender={"male"} isPresent={true} />
    </>
  );
};

export default App;
