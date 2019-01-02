import React from 'react';
import './../css/mainCss.css';

const charComponent = (props) => {
    return (
        <p onClick={props.clicked} className='CharComp'>
            {props.letter}
        </p>
    )
};

export default charComponent;
