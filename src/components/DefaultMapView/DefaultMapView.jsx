import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom"; 

export const DefaultMapView = ({ University, markers }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [infoWindowData, setInfoWindowData] = useState();

  const centerUMBC = useMemo(() => ({ lat: 39.2554, lng: -76.7107 }), []);

  const centerUMCP = useMemo(() => ({ lat: 38.986705, lng: -76.942715 }), []);

  const center = University === 'UMBC' ? centerUMBC : centerUMCP;

  const handleMarkerClick = (id, address) => {
    setInfoWindowData({ id, address });
    setIsOpen(true);
  };

  return (
    <GoogleMap mapContainerClassName="map-container" center={center} zoom={16}>
      {markers.map(({ address, lat, lng }, ind) => (
        <Marker
          key={ind}
          position={{ lat, lng }}
          onClick={() => handleMarkerClick(ind, address)}
        >
          {isOpen && infoWindowData?.id === ind && (
            <InfoWindow onCloseClick={() => setIsOpen(false)}>
              <div>
                <h3>{infoWindowData.address}</h3>
                <Link to="/CrimeDetails">View More Details</Link>
              </div>
            </InfoWindow>
          )}
        </Marker>
      ))}
    </GoogleMap>
  );
};
