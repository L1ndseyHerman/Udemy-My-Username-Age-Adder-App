import React, {useState} from 'react';

import styles from './App.module.css';
import UsernameAgeForm from './components/UsernameAgeForm';
import ErrorMessage from './components/ErrorMessage';

const App = () => {

  const [errorMessage, setErrorMessage] = useState("");
  //const [hasError, setHasError] = useState(false);

  //let errorMessage = "";
  //let hasError = false;


  const submitHandler = (submitData) => {
    setErrorMessage(submitData.errorMessage);
    //errorMessage = submitData.errorMessage;
    /*if (errorMessage === "")
    {
      setHasError(false);
      //hasError = false;
    }
    else 
    {
      setHasError(true);
      //hasError = true;
    }*/
  };

  const closeHandler = (closeData) => {
    setErrorMessage(closeData.errorMessage);
  };

  return (
    <div className={styles.blackground}>
      <UsernameAgeForm callback={submitHandler} />
      <ErrorMessage 
        className={`${errorMessage === "" ? styles.hideErrorMessage : styles.showErrorMessage}`}
        errorMessage={errorMessage}
        callback={closeHandler}
      />
    </div> 
  );
}

export default App;
