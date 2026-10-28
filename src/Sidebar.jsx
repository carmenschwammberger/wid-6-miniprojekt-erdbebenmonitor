export const Sidebar = ({ earthquake }) => (
  <div className="aside">
    <aside>
      <p>Ort: {earthquake.properties?.place ?? ""}</p>
      <p>Magnitude: {earthquake.properties?.mag ?? ""}</p>
      <p>Lat: {earthquake.geometry?.coordinates?.[1] ?? ""}</p>
      <p>Lon: {earthquake.geometry?.coordinates?.[0] ?? ""}</p>
      <p>
        Zeitpunkt:{" "}
        {earthquake.properties?.time
          ? new Date(earthquake.properties.time).toLocaleString()
          : ""}
      </p>
    </aside>
  </div>
);
