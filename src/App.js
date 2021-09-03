import React, {useState} from 'react';

import styles from './App.module.css';
import UsernameAgeForm from './components/UsernameAgeForm';
import ErrorMessage from './components/ErrorMessage';

const App = () => {

  const [errorMessage, setErrorMessage] = useState("");

  const submitHandler = (submitData) => {
    setErrorMessage(submitData.errorMessage);
  };

  return (
    <div className={styles.blackground}>
      <UsernameAgeForm callback={submitHandler} />
      <ErrorMessage errorMessage={errorMessage} />
    </div> 
  );
}

export default App;
