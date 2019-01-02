// @flow

import React from 'react';


const textLength = (props) => {

    return (
        <div>
            <input type="text" onChange={props.changed} value={props.tekst}/>
            <p>{props.tekstLength}</p>
        </div>
    );
};
    export default textLength;
