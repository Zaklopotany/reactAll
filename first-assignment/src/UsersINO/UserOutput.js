// @flow
import React from 'react';

const userOutput = (props) => {
    return (
        <div style = {props.style}>
            <p>{props.p1}</p>
            <p>{props.p2}</p>
        </div>
    );
};

export default userOutput;