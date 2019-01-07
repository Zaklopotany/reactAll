//also a higher order component, wrapping html elements :)

import React from 'react';

const withClass = (props) => (
    <div className={props.classes}>
        {props.children}
    </div>
);


export default withClass;
