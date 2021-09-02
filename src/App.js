import React from 'react';

import styles from './App.module.css';
import UsernameAgeForm from './components/UsernameAgeForm';
import ErrorMessage from './components/ErrorMessage';

const App = () => {
  return (
    <div className={styles.blackground}>
      <UsernameAgeForm />
      <ErrorMessage />
    </div> 
  );
}

export default App;
