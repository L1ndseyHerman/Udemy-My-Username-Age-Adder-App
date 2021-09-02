import React from 'react';

import styles from './App.module.css';
import UsernameAgeForm from './components/UsernameAgeForm';

const App = () => {
  return (
    <div className={styles.blackground}>
      <UsernameAgeForm />
    </div> 
  );
}

export default App;
