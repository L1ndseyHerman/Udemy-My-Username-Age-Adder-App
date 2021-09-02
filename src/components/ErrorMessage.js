import React from 'react';

import styles from './ErrorMessage.module.css';

import WhiteCloudDiv from './UI/WhiteCloudDiv';
import Button from './UI/Button';

const ErrorMessage = () => {
    return (
        <WhiteCloudDiv className={styles.centeredStuff}>
            <h2 className={styles.h2}>Error</h2>
            <p>Error Message</p>
            <Button text="Okay" />
        </WhiteCloudDiv>
    );
};

export default ErrorMessage;