import CounterTwo from "./Components/CounterTwo";
import CounterOne from "./Components/CounterOne";
import withCounter from "./Components/withCounter";

const App = () => {
  const EnhancedCounterOne = withCounter(CounterOne);
  const EnhancedCounterTwo = withCounter(CounterTwo);
  return (
    <div>
      {/* <CounterOne />
      <CounterTwo /> */}

      <EnhancedCounterOne />
      <EnhancedCounterTwo />
    </div>
  );
};

export default App;
