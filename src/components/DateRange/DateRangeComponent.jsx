import React, { useState } from "react";

const DateRangeComponent = () => {
  const [selectedRange, setSelectedRange] = useState("last7days");

  const handleSubmit = () => {
    console.log("Selected Date Range:", selectedRange);
    // Submit your date range or do some action here
  };

  const handleCancel = () => {
    setSelectedRange(""); // Clear selection
    // Handle the cancel action here
  };

  return (
    <div>
      <h2>Date Range</h2>
      <form onSubmit={handleSubmit}>
        <li>
          <label>
            <input
              type="radio"
              value="yesterday"
              checked={selectedRange === "yesterday"}
              onChange={() => setSelectedRange("yesterday")}
            />
            Yesterday
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              value="last3days"
              checked={selectedRange === "last3days"}
              onChange={() => setSelectedRange("last3days")}
            />
            Last 3 days
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              value="last7days"
              checked={selectedRange === "last7days"}
              onChange={() => setSelectedRange("last7days")}
            />
            Last 7 days
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              value="last30days"
              checked={selectedRange === "last30days"}
              onChange={() => setSelectedRange("last30days")}
            />
            Last 30 days
          </label>
        </li>
        <li>
          {" "}
          <label>
            <input
              type="radio"
              value="last90days"
              checked={selectedRange === "last90days"}
              onChange={() => setSelectedRange("last90days")}
            />
            Last 90 days
          </label>
        </li>
        <div>
          <button type="submit">GO</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default DateRangeComponent;
