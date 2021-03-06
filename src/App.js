import React, {useState} from 'react';

import styles from './App.module.css';
import UsernameAgeForm from './components/UsernameAgeForm';
import ErrorMessage from './components/ErrorMessage';
import WhiteCloudDiv from './components/UI/WhiteCloudDiv';
import OneUser from './components/OneUser';

const App = () => {

  const [errorMessage, setErrorMessage] = useState("");
  const [users, setUsers] = useState([]);

  const submitHandler = (submitData) => {
    if (submitData.enteredUsername === '')
    {
      setErrorMessage("Please enter a username. ");
    }
    //  Idk what should be allowed for a username, going to go w 30 char:
    else if (submitData.enteredUsername.length > 30)
    {
      setErrorMessage("Please enter a username that is less than 30char. ");
    }
    else if ((isNaN(submitData.enteredAge)) || (submitData.enteredAge <= 0))
    {
      setErrorMessage("Please enter a positive number for the age. ");
    }
    else 
    {
      setUsers([
        {id: submitData.id, username: submitData.enteredUsername, age: submitData.enteredAge},
         ...users]);
      setErrorMessage("");
    }
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
        {users.map(user => (
          <OneUser
            key={user.id}
            username={user.username} 
            age={user.age} 
          />
        ))}
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
