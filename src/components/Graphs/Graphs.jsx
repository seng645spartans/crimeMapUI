import React from 'react';
import styles from './Graphs.module.css';
import Header from '../Header/Header';

const Graphs = () => {
  // Mock data initialized directly within the component
  const data = [
    { label: 'Theft', value: 15 },
    { label: 'Vandalism', value: 10 },
    { label: 'Assault', value: 5 },
  ];

  // Finding the maximum value for scaling the bars
  const maxValue = Math.max(...data.map(item => item.value));

  return (
    <div>
      <Header />
      <div className={styles.graphContainer}>
      <h2>Statistics</h2>
      {data.map((item, index) => (
        <div key={index} className={styles.barContainer}>
          <span className={styles.barLabel}>{item.label}</span>
          <div className={styles.bar} style={{ width: `${(item.value / maxValue) * 100}%` }}>
            {item.value}
          </div>
        </div>
      ))}
    </div>
    </div>
    
  );
};

export default Graphs;
