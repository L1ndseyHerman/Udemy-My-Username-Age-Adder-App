import React from 'react';

import styles from './App.module.css';
import WhiteCloudDiv from './components/WhiteCloudDiv';

function App() {
  return (
    <div className={styles.blackground}>
      <WhiteCloudDiv />
      <WhiteCloudDiv />
    </div> 
  );
}

export default App;
