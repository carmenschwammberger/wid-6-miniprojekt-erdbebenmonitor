import { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Map } from "./Map";
import "@fontsource/roboto/500.css";

import "./App.css";
import "leaflet/dist/leaflet.css";

function App() {
  const [earthquake, setEarthquake] = useState({});
  console.log(earthquake);
  const [size, setSize] = useState(1);

  return (
    <div className="app">
      <Header />
      <Sidebar earthquake={earthquake} size={size} setSize={setSize} />
      <div className="mainArea">
        <Map setEarthquake={setEarthquake} size={size} />
      </div>
    </div>
  );
}

export default App;
