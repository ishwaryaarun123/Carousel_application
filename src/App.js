
import './App.css';
import Carousel from "./components/Carousel_";
import { countries } from "./components/Data";

function App() {
  return (
    <div className="App">
      <div className="topContent">
      <h1>Ishwarya's Carousel Page </h1>
      <p> These are the beautiful Locations with fantastic scenery</p>
      </div>
      {/* Carousel */}
      <Carousel images={countries} />
       
    </div>

  );
}

export default App;
