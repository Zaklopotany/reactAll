// @flow
import React from 'react';
import classes from './Person.css';
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
    /*const rnd = Math.random();
    if (rnd > 0.7) {
        throw new Error('Something went wrongo');
    }*/

    return (
        <div className={classes.Person} /*style={style}*/>
            <p onClick={props.click}>Ima lazy af {props.name} and I am {props.age} years old </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>

        </div>);
};

export default person;//Radium(person);
