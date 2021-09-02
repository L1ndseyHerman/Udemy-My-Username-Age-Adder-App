import React from 'react';

import styles from './UsernameAgeForm.module.css';

import WhiteCloudDiv from './UI/WhiteCloudDiv';
import Button from './UI/Button';


const UsernameAgeForm = () => {
    return (
        <WhiteCloudDiv className={styles.centeredStuff}>
            <label className={styles.labelSpacing}>Username:</label>
            <input type="text" />
            <br />
            <br />
            <label className={styles.labelSpacing}>Age:</label>
            <input type="number" min="1" step="1" />
            <br />
            <br />
            <Button text="Add User" />
        </WhiteCloudDiv>
    );
};

export default UsernameAgeForm;