 /* eslint-disable react/prop-types */
import React from 'react';

import styles from './ErrorMessage.module.css';

import WhiteCloudDiv from './UI/WhiteCloudDiv';
import Button from './UI/Button';

const ErrorMessage = (props) => {

    const classes = styles.centeredStuff + " " + props.className;

    const closeHandler = (event) => {
        //  The thing that prevents the page refreshing in React only:
        event.preventDefault();

        props.callback({
            errorMessage: ""
        });
    };

    return (
        <WhiteCloudDiv className={classes}>
            <form onSubmit={closeHandler}>
                <h2 className={styles.h2}>Error</h2>
                <p>{props.errorMessage}</p>
                <Button text="Okay" />
            </form>
        </WhiteCloudDiv>
    );
};

export default ErrorMessage;