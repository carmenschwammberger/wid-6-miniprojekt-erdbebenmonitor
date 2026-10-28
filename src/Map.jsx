import {
  MapContainer,
  TileLayer,
  GeoJSON,
  CircleMarker,
  Popup,
} from "react-leaflet";

import data from "./assets/4.5_week.geojson.json";
import plateBoundaries from "./assets/plate_boundaries.geojson.json";

export const Map = ({ setEarthquake }) => {
  const earthquakes = data.features;

  return (
    <MapContainer
      center={[0, 0]}
      zoom={1.2}
      style={{ height: "95vh", width: "100%" }}
    >
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <GeoJSON data={plateBoundaries} />

      {earthquakes.map((d, i) => (
        <CircleMarker
          key={i}
          center={[d.geometry.coordinates[1], d.geometry.coordinates[0]]}
          radius={d.properties.mag ** 2}
          pathOptions={{ color: "#e639bb" }}
        >
          <Popup>
            <div style={{ textAlign: "center" }}>
              {d.properties.title} <br />
            </div>
            <button onClick={() => setEarthquake(d)}>Details</button>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
};
