 /* eslint-disable react/prop-types */
import React, {useState} from 'react';

import styles from './UsernameAgeForm.module.css';

import WhiteCloudDiv from './UI/WhiteCloudDiv';
import Button from './UI/Button';

const UsernameAgeForm = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('')

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const submitHandler = (event) => {

        //  The thing that prevents the page refreshing in React only:
        event.preventDefault();

        const id = Math.random.toString()

        props.callback({
            id: id,
            enteredUsername: enteredUsername, 
            enteredAge: enteredAge,
        });

        //  Because this is bound to the "value" property of the input, this will clear the input!
        setEnteredUsername('');
        setEnteredAge('');
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