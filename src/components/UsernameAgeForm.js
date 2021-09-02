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
            <input type="text" />
            <br />
            <br />
            <Button />
        </WhiteCloudDiv>
    );
};

export default UsernameAgeForm;