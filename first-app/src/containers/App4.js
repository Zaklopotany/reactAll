// @flow
import React, {PureComponent, Component} from 'react';

import cssClasses from './App2.css';
import Cockpit from '../components/Cockpit/Cockpit';

import Persons from '../components/Persons/Persons4';

class App extends PureComponent {
    constructor(props) {
        super(props);
        console.log("[App4.js] inside Constructor", props);
        //mozna umiescic tu inicjalizacje stanu, tak robilo sie kiedys :

        /*this.state = = {
            persons: [
                {id: '1231', name: "MAX", age: 26},
                {id: '12asdf', name: "Manu", age: 23},
                {id: '1dfs31', name: "kill", age: 11}
            ],
            otherState: 'someValues',
            showPerson: false
        };*/
    };

    componentWillMount() {
        console.log('[App3.js] componentWillMount()');
    }

    componentDidMount() {
        console.log('[App4.js] componenetDidMount()');
    }

    state = {
        persons: [
            {id: '1231', name: "MAX", age: 26},
            {id: '12asdf', name: "Manu", age: 23},
            {id: '1dfs31', name: "kill", age: 11}
        ],
        otherState: 'someValues',
        showPerson: false
    };

    //The same as in Persons4

    /*shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[Update App4.js] Inside shouldComponentUpdate', nextProps, nextState);
        return this.state.persons !== nextState.persons || nextState.showPerson !== this.state.showPerson;
        // return true;
    }*/

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('[Update App4.js] Inside componentWillUpdate', nextState, nextProps);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Update App4.js] Inside componentDidUpdate');
    }


    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    nameChangeHandler = (event, id) => {

        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person =
            {
                ...this.state.persons[personIndex]
            };

        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({
            persons: persons
        });
    };


    togglePersonHandler = () => {
        const doesShow = this.state.showPerson;
        this.setState({showPerson: !doesShow});

    }


    render() {
        console.log('[App4.ja] inside render()');

        let persons = null;


        if (this.state.showPerson) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangeHandler}/>;
        }

        return (
            <div className={cssClasses.App}>
                <button onClick={() => {
                    this.setState({showPerson: true})
                }}>show persons
                </button>

                <Cockpit
                    persons={this.state.persons}
                    showPersons={this.state.showPerson}
                    toggled={this.togglePersonHandler}
                />
                {persons}
            </div>

        );
    }
}


export default App;
