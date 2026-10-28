import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

export const Sidebar = ({ earthquake, size, setSize }) => {
  const handleChange = (event, newValue) => {
    setSize(newValue);
  };

  return (
    <div className="aside">
      <aside>
        <Card sx={{ m: 2 }}>
          <CardContent>
            <Typography variant="h6">Erdbeben Details</Typography>
            <Typography variant="body2">
              Ort: {earthquake.properties?.place ?? ""}
            </Typography>
            <Typography variant="body2">
              Magnitude: {earthquake.properties?.mag ?? ""}
            </Typography>
            <Typography variant="body2">
              Lat: {earthquake.geometry?.coordinates?.[1] ?? ""}
            </Typography>
            <Typography variant="body2">
              Lon: {earthquake.geometry?.coordinates?.[0] ?? ""}
            </Typography>
            <Typography variant="body2">
              Zeitpunkt:{" "}
              {earthquake.properties?.time
                ? new Date(earthquake.properties.time).toLocaleString()
                : ""}
            </Typography>
          </CardContent>
        </Card>
        <Box sx={{ width: 200, p: 2}}>
        <Slider
          aria-label="Radius"
          value={size}
          onChange={handleChange}
          valueLabelDisplay="auto"
          step={0.25}
          min={1}
          max={3}
        />
        </Box>
      </aside>

    </div>
  );
};
