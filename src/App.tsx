import "./App.css";
import DigitalClock from "./components/DigitalClock/DigitalClock";
import Pagination from "./components/pagination";
import Products from "./components/pagination/ProductsPagination";

function App() {
  return (
    <>
      <main>
        <Products />
        <DigitalClock />
      </main>
    </>
  );
}

export default App;
