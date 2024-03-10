import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom"; 

export const DefaultMapView = ({ University }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [infoWindowData, setInfoWindowData] = useState();
  const centerUMBC = useMemo(() => ({ lat: 39.2554, lng: -76.7107 }), []);
  const centerUMCP = useMemo(() => ({ lat: 38.986705, lng: -76.942715 }), []);

  const umbcLocations = [ 
  { lat: 39.255260, lng: -76.710306 , address: "Address1"},
  { lat: 39.257091, lng: -76.714769, address: "Address2" },
  { lat: 39.254140, lng: -76.715148, address: "Address3" },
  { lat: 39.258991, lng: -76.709861 , address: "Address4"},
  { lat: 39.254318, lng: -76.707367, address: "Address5" },
];
  const umcpLocations = [
  { lat: 38.986705, lng: -76.942715 , address: "Address1"},
  { lat: 39.257091, lng: -76.714769, address: "Address2" },
  { lat: 39.254140, lng: -76.715148, address: "Address3" },
  { lat: 39.258991, lng: -76.709861 , address: "Address4"},
  { lat: 39.254318, lng: -76.707367, address: "Address5" },
];

  const markers = University === "UMBC" ? umbcLocations : (University === "UMCP" ? umcpLocations : []);
  let center = University === "UMBC" ? centerUMBC : (University === "UMCP" ? centerUMCP : []);

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
