import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import './App.css';

function App() {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBUy2-fbp3_rX5_e5rG39zkI_VH46KuCN8',
  });
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  return (
    <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
        />
      )}
    </div>
  );
}

export default App;
