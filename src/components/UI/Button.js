 /* eslint-disable react/prop-types */
import React from 'react';

import styles from './Button.module.css';

const Button = (props) => {
    return (
        <button className={styles.button} type="submit">{props.text}</button>
    );
};

export default Button;