import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  const position = [38.04, 46.17];
  return (
    <MapContainer
      style={{
        width: "100%",
        height: "200px",
      }}
      center={position}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>تبریز کارخانه متالورژی</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
