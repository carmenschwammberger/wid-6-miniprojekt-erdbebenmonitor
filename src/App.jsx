import { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Map } from "./Map";

import "./App.css";
import "leaflet/dist/leaflet.css";

function App() {
  const [earthquake, setEarthquake] = useState({});
  console.log(earthquake);

  return (
    <div className="app">
      <Header />
      <Sidebar earthquake={earthquake} />
      <div className="mainArea">
        <Map setEarthquake={setEarthquake} />
      </div>
    </div>
  );
}

export default App;
