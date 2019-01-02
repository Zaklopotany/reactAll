// @flow
import React from 'react';
import './Person.css';
// import Radium from 'radium';
//bare function, simple js function that returns jsx
//ES6 new moder features

const person = (props) => {
    //
    // const style = {
    //     //special selector works because of Radium
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }

    return (
        <div className="Person" /*style={style}*/>
            <p onClick={props.click}>Ima lazy af {props.name} and I am {props.age} years old </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>

        </div>);
};

export default person;//Radium(person);
