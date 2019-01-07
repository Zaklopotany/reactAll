// @flow
import React, {Component} from 'react';
import classes from './Person.css';
import WithClasses from '../../../hoc/WithClass';

class Person extends Component {

    constructor(props) {
        super(props);
        console.log("[Person.js] inside Constructor", props);
    };

    componentWillMount() {
        console.log('[Person.js] componentWillMount()');
    }

    componentDidMount() {
        console.log('[Person.js] componentDidMount()');
    }

    render() {
        console.log('[Person.js] inside render()');

        return (
            <WithClasses classes={classes.Person}>
                <p onClick={this.props.click}>Ima lazy af {this.props.name} and I am {this.props.age} years old </p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </WithClasses>
        );
    };
}

export default Person;
