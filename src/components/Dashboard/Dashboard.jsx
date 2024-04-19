import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import DefaultMapView from "../DefaultMapView";
import { MapSection } from "./Dashboard.styled";
import TopNavbar from "../TopNavbar/TopNavbar";
import SecondNavbar from "../SecondNavbar/SecondNavbar";

export const Dashboard = () => {
  const { university } = useParams();

  // State to hold the crime data fetched from the backend
  const [data, setData] = useState([]);

  // State to hold the fetched crime types
  const [crimeTypes, setCrimeTypes] = useState(new Set());

  // State for user-selected crimes and date range
  const [selectedCrimes, setSelectedCrimes] = useState(new Set());
  const [selectionMade, setSelectionMade] = useState(false);
  const [dateRange, setDateRange] = useState("");

  // Fetch crime types from the backend
  useEffect(() => {
    const fetchCrimeTypes = async () => {
      const response = await fetch('https://seng645backend.me/getCrimeData/crimeTypes');
      if (response.ok) {
        const types = await response.json();
        setCrimeTypes(new Set(types.map(type => type.toLowerCase())));
      }
    };

    fetchCrimeTypes();
  }, []);

  // Fetch crime data for the university
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://seng645backend.me/getCrimeData/${university}`);
      if (response.ok) {
        const jsonData = await response.json();
        const transformedData = jsonData.map(item => ({
          lat: item.latitude,
          lng: item.longitude,
          address: item.location,
          crimeType: crimeTypes.has(item.crimeType.toLowerCase()) ? item.crimeType : 'Unknown',
          range: convertTimestampToRange(item.dateOccurred),
          caseId: item.caseId
        }));
        setData(transformedData);
      }
    };

    fetchData();
  }, [university, crimeTypes]);

  // Function to convert timestamp to a readable range
  const convertTimestampToRange = (timestamp) => {
    // Example conversion logic
    const diffInDays = (new Date() - new Date(timestamp)) / (1000 * 3600 * 24);
    if (diffInDays < 1) return " yesterday";
    if (diffInDays < 3) return " last 3 days";
    if (diffInDays < 7) return " last 7 days";
    if (diffInDays < 30) return " last 30 days";
    return " last 90 days";
  };

  // Filter markers based on selected crimes and date range
  const filteredMarkers = useMemo(() => {
    return data.filter((location) => {
      const crimeMatch = selectionMade ? selectedCrimes.has(location.crimeType.toLowerCase()) : true;
      const dateMatch = !dateRange || location.range === dateRange;
      return crimeMatch && dateMatch;
    });
  }, [data, selectedCrimes, dateRange, selectionMade]);

  // Handle changes in crime type selection
  const onCrimeTypeChange = (crimesObject) => {
    const selected = new Set();
    for (const [crime, isSelected] of Object.entries(crimesObject)) {
      if (isSelected) selected.add(crime.toLowerCase());
    }
    setSelectedCrimes(selected);
    setSelectionMade(true);
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
