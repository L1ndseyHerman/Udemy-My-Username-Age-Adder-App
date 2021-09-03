 /* eslint-disable react/prop-types */
import React, {useState} from 'react';

import styles from './UsernameAgeForm.module.css';

import WhiteCloudDiv from './UI/WhiteCloudDiv';
import Button from './UI/Button';

const UsernameAgeForm = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('')
    const [errorMessage, setErrorMessage] = useState("");

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
        //  This does't work for some reason :(
        if ((event.target.value === null) || (event.target.value === ''))
        {
            setErrorMessage("Please enter a username. ");
        }
        //  Idk what should be allowed for a username, going to go w 30 char:
        else if (event.target.value.toString().length > 30)
        {
            setErrorMessage("Please enter a username that is less than 30char. ");
        }
        else 
        {
            setErrorMessage("");
        }
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
        //  This checks for < 0 or a String, but doesn't notice the empty string :(
        if ((isNaN(event.target.value)) || (event.target.value <= 0))
        {
            setErrorMessage("Please enter a positive number for the age. ");
        }
        else 
        {
            setErrorMessage(errorMessage + "");
        }
    };

    const submitHandler = (event) => {

        //  The thing that prevents the page refreshing in React only:
        event.preventDefault();

        //  Maybe this will catch the '' from if no text ever entered? 
        if (enteredUsername === '')
        {
            setErrorMessage("Please enter a username. ");
        }
        else if (enteredAge === '')
        {
            setErrorMessage("Please enter a positive number for the age. ");
        }

        const id = Math.random.toString()

        props.callback({
            id: id,
            enteredUsername: enteredUsername, 
            enteredAge: enteredAge,
            errorMessage: errorMessage
        });

        //  Because this is bound to the "value" property of the input, this will clear the input!
        setEnteredUsername('');
        setEnteredAge('');
        setErrorMessage("");
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