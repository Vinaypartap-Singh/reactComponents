import "./App.css";
import DigitalClock from "./components/DigitalClock/DigitalClock";
import CountdownTimer from "./components/Stopwatch/CountdownTimer";
import Timer from "./components/Stopwatch/Timer";
import Products from "./components/pagination/ProductsPagination";

function App() {
  return (
    <>
      <main>
        <h1>Modules Projects</h1>
        <Products />
        <DigitalClock />
        <Timer />
      </main>
    </>
  );
}

export default App;
