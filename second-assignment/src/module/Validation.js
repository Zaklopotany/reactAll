// @flow

import React from 'react';

const validation = (props) => {

    const textShort = "Text too short";
    const textLong = "text long enough"
    if (props.length < 5) {
        return <p>{textShort}</p>
    } else {
        return <p>{textLong}</p>
    };

};

export default validation;