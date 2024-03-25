import React, { useState } from "react";
import styles from './DateRangeComponent.module.css';

const DateRangeComponent = ({ onDateRangeChange }) => {
  const [selectedRange, setSelectedRange] = useState("last7days");

  const handleDateChange = (range) => {
    setSelectedRange(range);
    onDateRangeChange(range);
  };

  return (
    <div className={styles.dateRangeContainer}>
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
