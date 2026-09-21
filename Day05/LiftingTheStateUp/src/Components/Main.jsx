const Main = ({ theme }) => {
  return (
    <div
      style={{
        border: "2px solid black",
        height: "100vh",
        backgroundColor: theme ? "white" : "black",
      }}
    >
      Main
    </div>
  );
};

export default Main;
