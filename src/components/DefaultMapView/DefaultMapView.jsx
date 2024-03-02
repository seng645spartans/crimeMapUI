import { GoogleMap ,Marker,InfoWindow} from "@react-google-maps/api";
import { useMemo,useState } from "react";

export const DefaultMapView = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [infoWindowData, setInfoWindowData] = useState();
  const center = useMemo(() => ({ lat: 39.2554, lng: -76.7107 }), []);

  const markers = [
    { lat: 39.255260, lng: -76.710306 , address: "Address1"},
    { lat: 39.257091, lng: -76.714769, address: "Address2" },
    { lat: 39.254140, lng: -76.715148, address: "Address3" },
    { lat: 39.258991, lng: -76.709861 , address: "Address4"},
    { lat: 39.254318, lng: -76.707367, address: "Address5" },
  ];

  const handleMarkerClick = (id,address) => {
    setInfoWindowData({id,address});
    setIsOpen(true);
  };
  
  return (
    <GoogleMap mapContainerClassName="map-container" center={center}zoom={16}>
    {markers.map(({ address, lat, lng }, ind) => (
        <Marker
          position={{ lat, lng }}
          onClick={() => {
            handleMarkerClick(ind, address);
          }}
        >
          {isOpen && infoWindowData?.id === ind && (
            <InfoWindow
              onCloseClick={() => {
                setIsOpen(false);
              }}
            >
              <h3>{infoWindowData.address}</h3>
            </InfoWindow>
          )}
        </Marker>
      ))}
    </GoogleMap>
  );
};
