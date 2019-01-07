// @flow/
import React, {Component} from 'react';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';
import withClass1 from '../../../hoc/withClass1';
import Aux from '../../../hoc/Aux';

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

            <Aux>
                <p onClick={this.props.click}>Ima lazy af {this.props.name} and I am {this.props.age} years old </p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </Aux>
        );
    };
}

export default withClass1(Person, classes.Person);
