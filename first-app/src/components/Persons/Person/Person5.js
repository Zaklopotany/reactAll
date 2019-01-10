// @flow/
import React, {Component} from 'react';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';
import withClass1 from '../../../hoc/withClass1';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';


// npm install --save prop-types
//powyższe daje kontrolet typów

class Person extends Component {

    constructor(props) {
        super(props);
        console.log("[Person.js] inside Constructor", props);
        //create ref method, the same as arrow function but clearer
        this.inputElement = React.createRef();
    };

    componentWillMount() {
        console.log('[Person.js] componentWillMount()');
    }

    componentDidMount() {

        console.log('[Person.js] componentDidMount()');
        if (this.props.position === 0) {
            //current for current elememnt simple af
            this.inputElement.current.focus();

        }

    }

    //focusing moved to method
    // we want to call if from outside the component
    focus() {

            this.inputElement.current.focus();


    }

    render() {
        console.log('[Person.js] inside render()');

        return (

            <Aux>
                <p onClick={this.props.click}>Ima lazy af {this.props.name} and I am {this.props.age} years old </p>
                <p>{this.props.children}</p>
                <input

                    //prypisywanie referencji new way react 16.3 ++
                    ref={this.inputElement}

                    //prypiszywanie refernecji old way
                    // ref={(inp) => {this.inputElement = inp}}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}/>
            </Aux>
        );
    };
}


Person.propTypes = {
    click: PropTypes.func,
    changed: PropTypes.func,
    age: PropTypes.number,
    name: PropTypes.string
}

export default withClass1(Person, classes.Person);
