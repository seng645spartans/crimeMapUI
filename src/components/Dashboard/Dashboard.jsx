import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import DefaultMapView from "../DefaultMapView";
import { MapSection } from "./Dashboard.styled";
import TopNavbar from "../TopNavbar/TopNavbar";
import SecondNavbar from "../SecondNavbar/SecondNavbar";

export const Dashboard = () => {
  const initialCrimes = new Set([
    "assault",
    "vandalism",
    "theft",
    "drugAlcohol",
    "motortheft",
  ]);
  const { university } = useParams();
  //Mocking the data to be displayed on the map
  const [data, setData] = useState([
    {
      lat: 39.25526,
      lng: -76.710306,
      address: "Address1",
      crimeType: "assault",
      range: "yesterday",
    },
    {
      lat: 39.257091,
      lng: -76.714769,
      address: "Address2",
      crimeType: "vandalism",
      range: "last 3 days",
    },
    {
      lat: 39.25414,
      lng: -76.715148,
      address: "Address3",
      crimeType: "theft",
      range: "last 7 days",
    },
    {
      lat: 39.258991,
      lng: -76.709861,
      address: "Address4",
      crimeType: "drugAlcohol",
      range: "last 30 days",
    },
    {
      lat: 39.254318,
      lng: -76.707367,
      address: "Address5",
      crimeType: "motortheft",
      range: "last 90 days",
    },
    {
      lat: 38.987001,
      lng: -76.943230,
      address: "Address1",
      crimeType: "assault",
      range: "yesterday",
    },
    {
      lat: 38.988385, 
      lng: -76.940247,
      address: "Address2",
      crimeType: "vandalism",
      range: "last 3 days",
    },
    {
      lat: 38.987836,
      lng: -76.947135,
      address: "Address3",
      crimeType: "theft",
      range: "last 7 days",
    },
    {
      lat: 38.985783,
      lng: -76.939668,
      address: "Address4",
      crimeType: "drugAlcohol",
      range: "last 30 days",
    },
    {
      lat: 38.982814,
      lng: -76.937266,
      address: "Address5",
      crimeType: "motortheft",
      range: "last 90 days",
    },
  ]);
  const [selectedCrimes, setSelectedCrimes] = useState(initialCrimes);
  const [selectionMade, setSelectionMade] = useState(false);
  const [dateRange, setDateRange] = useState("");
  /*
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8080/getCrimeData/${university}`);
      if (response.ok) {
        const jsonData = await response.json();
        const transformedData = jsonData.map(item => ({
          lat: item.latitude,
          lng: item.longitude,
          address: item.location,
          crimeType: Array.from(initialCrimes)[Math.floor(Math.random() * initialCrimes.size)], // Assign a random crime type from initialCrimes
          range: convertTimestampToRange(item.dateOccurred), // This function needs to be implemented
        }));
        setData(transformedData);
      }
    };

    fetchData();
  }, [university]);*/

  // Convert timestamp to range (this function needs to be defined based on your requirements)
  const convertTimestampToRange = (timestamp) => {
    // Example implementation (adjust according to your needs)
    const diffInDays = (new Date() - new Date(timestamp)) / (1000 * 3600 * 24);
    if (diffInDays < 1) return "yesterday";
    if (diffInDays < 3) return "last 3 days";
    if (diffInDays < 7) return "last 7 days";
    if (diffInDays < 30) return "last 30 days";
    return "last 90 days";
  };

  const filteredMarkers = useMemo(() => {
    return data.filter((location) => {
      const crimeMatch = selectionMade
        ? selectedCrimes.has(location.crimeType)
        : true;
      const dateMatch =
        !dateRange || location.range.trim() === dateRange.trim();
      return crimeMatch && dateMatch;
    });
  }, [data, selectedCrimes, dateRange, selectionMade]);

  const onCrimeTypeChange = (crimesObject) => {
    const selected = new Set();
    for (const [crime, isSelected] of Object.entries(crimesObject)) {
      if (isSelected) selected.add(crime);
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
