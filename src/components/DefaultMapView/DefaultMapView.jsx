import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom"; 

export const DefaultMapView = ({ University, markers }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [infoWindowData, setInfoWindowData] = useState(null);

  const centerUMBC = useMemo(() => ({ lat: 39.2554, lng: -76.7107 }), []);
  const centerUMCP = useMemo(() => ({ lat: 38.986705, lng: -76.942715 }), []);

  const center = University === 'UMBC' ? centerUMBC : centerUMCP;

  const handleMarkerClick = (marker) => {
    setInfoWindowData(marker);
    setIsOpen(true);
  };

  return (
    <GoogleMap mapContainerClassName="map-container" center={center} zoom={16}>
      {markers.map((marker) => (
        <Marker
          key={marker.caseId}
          position={{ lat: marker.lat, lng: marker.lng }}
          onClick={() => handleMarkerClick(marker)}
        >
          {isOpen && infoWindowData?.caseId === marker.caseId && (
            <InfoWindow onCloseClick={() => setIsOpen(false)}>
              <div>
                <h2>{infoWindowData.crimeType}</h2>
                <h3>{infoWindowData.address}</h3>
                <Link to={`/CrimeDetails/${infoWindowData.caseId}`}>View More Details</Link>
              </div>
            </InfoWindow>
          )}
        </Marker>
      ))}
    </GoogleMap>
  );
};
