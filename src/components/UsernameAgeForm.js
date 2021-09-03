 /* eslint-disable react/prop-types */
import React, {useState} from 'react';

import styles from './UsernameAgeForm.module.css';

import WhiteCloudDiv from './UI/WhiteCloudDiv';
import Button from './UI/Button';

const UsernameAgeForm = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('')
    const [errorMessage, setErrorMessage] = useState("");
    //let errorMessage = "";

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
        if ((event.target.value === null) || (event.target.value === ""))
        {
            setErrorMessage("Please enter a username. ");
            //errorMessage = ("Please enter a username. ");
        }
        //  Idk what should be allowed for a username, going to go w 30 char:
        else if (event.target.value.toString().length > 30)
        {
            setErrorMessage("Please enter a username that is less than 30char. ");
            //errorMessage = "Please enter a username that is less than 30char. ";
        }
        else 
        {
            setErrorMessage("");
            //errorMessage = "";
        }
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
        //  This checks for < 0 or a String, including the empty string, at the same time.
        if ((isNaN(event.target.value)) || (event.target.value <= 0))
        {
            setErrorMessage("Please enter a positive number for the age. ");
            //errorMessage = "Please enter a positive number for the age. ";
        }
        else 
        {
            setErrorMessage(errorMessage + "");
            //errorMessage = "";
        }
    };

    const submitHandler = (event) => {

        //  Maybe this will stop it from being 1 behind?
        usernameChangeHandler;
        ageChangeHandler;

        //  The thing that prevents the page refreshing in React only:
        event.preventDefault();

        //  Maybe this will catch the '' from if no text ever entered? 
        if (enteredUsername === null)
        {
            setErrorMessage("Please enter a username. ");
            //errorMessage = "Please enter a username. ";
        }
        else if (enteredAge === null)
        {
            setErrorMessage("Please enter a positive number for the age. ");
            //errorMessage = "Please enter a positive number for the age. ";
        }

        //  Hmm... I could handle the error here or in App.js. Going to do it in App.js.
        props.callback({
            enteredUsername: enteredUsername, 
            enteredAge: enteredAge,
            errorMessage: errorMessage
        });

        //  Because this is bound to the "value" property of the input, this will clear the input!
        setEnteredUsername('');
        setEnteredAge('');
        setErrorMessage("");
        //errorMessage = "";
    };

    return (
        <WhiteCloudDiv className={styles.centeredStuff}>
            <form onSubmit={submitHandler}>
                <label className={styles.labelSpacing}>Username:</label>
                <input type="text" value={enteredUsername} onChange={usernameChangeHandler} />
                <br />
                <br />
                <label className={styles.labelSpacing}>Age:</label>
                <input type="text" value={enteredAge} onChange={ageChangeHandler} />
                <br />
                <br />
                <Button text="Add User" />
            </form>
        </WhiteCloudDiv>
    );
};

export default UsernameAgeForm;