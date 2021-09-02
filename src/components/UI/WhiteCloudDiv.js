 /* eslint-disable react/prop-types */
import React from 'react';

import styles from './WhiteCloudDiv.module.css';

const WhiteCloudDiv = (props) => {

    //  REALLY DON'T FORGET THE SPACE!!
    const classes = styles.whiteCloud + " " + props.className;

    return <div className={classes}>{props.children}</div>;
};

export default WhiteCloudDiv;