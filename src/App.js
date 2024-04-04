import "./App.css";
import { Sorting } from "./components/Sorting/Sorting";
import { Listings } from "./components/Listings/Listings";

const App = () => {
  return (
    <div className='App'>
      <Sorting />
      <Listings />
    </div>
  );
};

export default App;
