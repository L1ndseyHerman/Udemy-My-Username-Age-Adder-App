import React, {useState} from 'react';

import styles from './App.module.css';
import UsernameAgeForm from './components/UsernameAgeForm';
import ErrorMessage from './components/ErrorMessage';
import WhiteCloudDiv from './components/UI/WhiteCloudDiv';
import OneUser from './components/OneUser';

const App = () => {

  const [errorMessage, setErrorMessage] = useState("");

  const submitHandler = (submitData) => {
    setErrorMessage(submitData.errorMessage);
  };

  const closeHandler = (closeData) => {
    setErrorMessage(closeData.errorMessage);
  };

  return (
    <div className={styles.blackground}>
      <UsernameAgeForm callback={submitHandler} />
      <WhiteCloudDiv 
        className={`${errorMessage !== "" ? styles.hideErrorMessage : styles.showErrorMessage}`}
      >
        <OneUser />
        <OneUser />
      </WhiteCloudDiv>
      <ErrorMessage 
        className={`${errorMessage === "" ? styles.hideErrorMessage : styles.showErrorMessage}`}
        errorMessage={errorMessage}
        callback={closeHandler}
      />
    </div> 
  );
}

export default App;
