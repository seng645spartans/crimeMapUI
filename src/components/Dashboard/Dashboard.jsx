import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import DefaultMapView from "../DefaultMapView";
import { MapSection } from "./Dashboard.styled";
import TopNavbar from "../TopNavbar/TopNavbar";
import SecondNavbar from "../SecondNavbar/SecondNavbar";

export const Dashboard = () => {
  const { university } = useParams();

  const [data, setData] = useState([]);
  const [crimeTypes, setCrimeTypes] = useState(new Set());
  const [selectedCrimes, setSelectedCrimes] = useState(new Set());
  const [selectionMade, setSelectionMade] = useState(false);
  const [dateRange, setDateRange] = useState("");

  useEffect(() => {
    const fetchCrimeTypes = async () => {
      console.log("Fetching crime types...");
      const response = await fetch('https://seng645backend.me/getCrimeData/crimeTypes');
      if (response.ok) {
        const types = await response.json();
        console.log("Fetched crime types:", types);
        setCrimeTypes(new Set(types.map(type => type.toLowerCase())));
      }
    };

    fetchCrimeTypes();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      console.log(`Fetching crime data for ${university}...`);
      const response = await fetch(`https://seng645backend.me/getCrimeData/${university}`);
      if (response.ok) {
        const jsonData = await response.json();
        console.log("Fetched data:", jsonData);
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

  const convertTimestampToRange = (timestamp) => {
    console.log("Converting timestamp:", timestamp);
    const diffInDays = (new Date() - new Date(timestamp)) / (1000 * 3600 * 24);
    if (diffInDays < 1) return " yesterday";
    if (diffInDays < 3) return " last 3 days";
    if (diffInDays < 7) return " last 7 days";
    if (diffInDays < 30) return " last 30 days";
    return " last 90 days";
  };

  const filteredMarkers = useMemo(() => {
    console.log("Filtering markers...");
    return data.filter((location) => {
      const crimeMatch = selectionMade ? selectedCrimes.has(location.crimeType.toLowerCase()) : true;
      const dateMatch = !dateRange || location.range === dateRange;
      console.log(`Marker: ${location.crimeType}, Crime Match: ${crimeMatch}, Date Match: ${dateMatch}`);
      return crimeMatch && dateMatch;
    });
  }, [data, selectedCrimes, dateRange, selectionMade]);

  const onCrimeTypeChange = (crimesObject) => {
    console.log("Handling crime type change:", crimesObject);
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
