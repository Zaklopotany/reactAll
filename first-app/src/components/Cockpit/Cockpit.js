import React from 'react';
import cssClasses from "./Cockpit.css";

const cockpit = (props) => {

    let classes = [];
    let btnClass = '';

    if (props.persons.length <= 2) {
        classes.push(cssClasses.red);
    }
    if (props.persons.length <= 1) {
        classes.push(cssClasses.bold);
    }
    if (props.showPersons) {
        btnClass = cssClasses.Red;
    }

    return (
        <div className={cssClasses.Cockpit}>
            <h1> This is react app</h1>
            <p className={classes.join(' ')}> this is working</p>
            <button
                className={btnClass}
                onClick={props.toggled}>Toggle Persons
            </button>
        </div>
    );
};

export default cockpit;
