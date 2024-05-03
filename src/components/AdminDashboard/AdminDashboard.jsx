import React, { useState, useEffect } from 'react';
import styles from './AdminDashboard.module.css'; // Ensure this path matches your actual CSS file
import Header from '../Header/Header';

const AdminDashboard = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://seng645backend.me/getCrimeData/crimeTypesWithStatus`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  const handleCheckboxChange = (id, isChecked) => {
    const updatedData = data.map(item => {
      if (item.id === id) {
        return { ...item, isActive: isChecked };
      }
      return item;
    });
    setData(updatedData);
  };

  const handleUpdate = () => {
    fetch(`https://seng645backend.me/getCrimeData/updateCrimeTypes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Update successful:', data);
      alert('Update successful!');
    })
    .catch(error => {
      console.error('Error updating data:', error);
      alert('Error updating data');
    });
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.adminDashboard}>
      <Header />
      <h1 className={styles.dashboard}>Admin Dashboard</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {data.length > 0 ? (
          data.map(item => (
            <li key={item.id} className={styles.checkboxContainer}>
              <label className={styles.checkboxLabel}>{item.description}</label>
              <input
                type="checkbox"
                className={styles.inputCheckbox}
                checked={item.isActive}
                onChange={(e) => handleCheckboxChange(item.id, e.target.checked)}
                id={`checkbox-${item.id}`}
              />
            </li>
          ))
        ) : (
          <p>No data available.</p>
        )}
      </ul>
      <div className={styles.buttonGroup}>
        <button onClick={handleUpdate} className={styles.enableButton}>Update</button>
      </div>
      <p>                                   </p>
      <p>                                   </p>
    </div>
  );
};

export default AdminDashboard;
