import DefaultMapView from "../DefaultMapView";
import { MapSection } from "./Dashboard.styled";
import TopNavbar from "../TopNavbar/TopNavbar";
import SecondNavbar from "../SecondNavbar/SecondNavbar";
import { useParams } from 'react-router-dom';
import { useState, useMemo } from 'react';

export const Dashboard = () => {
  const initialCrimes = new Set(['assault', 'vandalism', 'theft', 'drugAlcohol', 'motortheft']);
  const { university } = useParams();
  const [selectedCrimes, setSelectedCrimes] = useState(initialCrimes);
  const [selectionMade, setSelectionMade] = useState(false);  // New state to track if any selection has been made
  const [dateRange, setDateRange] = useState('');

  const umbcLocations = [ 
    { lat: 39.255260, lng: -76.710306 , address: "Address1", crimeType: "assault", range: "yesterday" },
    { lat: 39.257091, lng: -76.714769, address: "Address2", crimeType: "vandalism", range: "last 3 days" },
    { lat: 39.254140, lng: -76.715148, address: "Address3", crimeType: "theft", range: "last 7 days" },
    { lat: 39.258991, lng: -76.709861 , address: "Address4", crimeType: "drugAlcohol", range: "last 30 days" },
    { lat: 39.254318, lng: -76.707367, address: "Address5", crimeType: "motortheft", range: "last 90 days" },
  ];
  const umcpLocations = [
    { lat: 38.986705, lng: -76.942715 , address: "Address1", crimeType: "assault", range: "yesterday" },
    { lat: 39.257091, lng: -76.714769, address: "Address2", crimeType: "vandalism", range: "last 3 days" },
    { lat: 39.254140, lng: -76.715148, address: "Address3", crimeType: "theft", range: "last 7 days" },
    { lat: 39.258991, lng: -76.709861 , address: "Address4", crimeType: "drugAlcohol", range: "last 30 days" },
    { lat: 39.254318, lng: -76.707367, address: "Address5", crimeType: "motortheft", range: "last 90 days" },
  ];

  const locations = university === 'UMBC' ? umbcLocations : umcpLocations;

  const filteredMarkers = useMemo(() => {
    return locations.filter(location => {
      const crimeMatch = selectionMade ? selectedCrimes.has(location.crimeType) : true;
      const dateMatch = !dateRange || location.range.trim() === dateRange.trim();
      return crimeMatch && dateMatch;
    });
  }, [locations, selectedCrimes, dateRange, selectionMade]);

  const onCrimeTypeChange = (crimesObject) => {
    const selected = new Set();
    for (const [crime, isSelected] of Object.entries(crimesObject)) {
      if (isSelected) selected.add(crime);
    }
    setSelectedCrimes(selected);
    setSelectionMade(true);  // Indicate that a selection has been made
  };

  return (
    <div>
      <TopNavbar />
      <SecondNavbar 
        onCrimeTypeChange={onCrimeTypeChange}
        onDateRangeChange={setDateRange}
      />
      <MapSection>
        <DefaultMapView University={university} markers={filteredMarkers} />
      </MapSection>
    </div>
  );
};
