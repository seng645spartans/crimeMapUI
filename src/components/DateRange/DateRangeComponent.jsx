import React, { useState } from "react";

const DateRangeComponent = ({ onDateRangeChange }) => {
  const [selectedRange, setSelectedRange] = useState("last7days");

  const handleDateChange = (range) => {
    setSelectedRange(range);
    onDateRangeChange(range);
  };

  return (
    <div>
      <h2>Date Range</h2>
      {[" yesterday", " last 3 days", " last 7 days", " last 30 days", " last 90 days"].map(range => (
        <div key={range}>
          <input
            type="radio"
            value={range}
            checked={selectedRange === range}
            onChange={() => handleDateChange(range)}
          />
          <label>{range}</label>
        </div>
      ))}
    </div>
  );
};

export default DateRangeComponent;
