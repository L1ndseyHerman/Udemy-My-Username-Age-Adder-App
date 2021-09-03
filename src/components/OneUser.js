 /* eslint-disable react/prop-types */
import React from 'react';

import styles from './OneUser.module.css';

const OneUser = (props) => {
    return (
        <p className={styles.centeredStuff}>Username: {props.username}&nbsp;&nbsp;&nbsp; Age: {props.age}</p>
    );
};

export default OneUser;