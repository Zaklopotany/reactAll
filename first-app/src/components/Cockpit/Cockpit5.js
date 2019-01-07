import React from 'react';
import cssClasses from "./Cockpit5.css";
import Aux from "../../hoc/Aux";


const cockpit = (props) => {

    let classes = [];
    let btnClass = cssClasses.Button;

    if (props.persons.length <= 2) {
        classes.push(cssClasses.red);
    }
    if (props.persons.length <= 1) {
        classes.push(cssClasses.bold);
    }
    if (props.showPersons) {
        btnClass = [cssClasses.Red, cssClasses.Button].join(' ');
    }

    return (
        //Aux is empty there is now wrapping element : d
        <>
            <h1> This is react app</h1>
            <p className={classes.join(' ')}> this is working</p>
            <button
                className={btnClass}
                onClick={props.toggled}>Toggle Persons
            </button>
        </>
    );
};

export default cockpit;
