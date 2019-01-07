// @flow
import React, {Component} from 'react';

import cssClasses from './App2.css';
import Cockpit from '../components/Cockpit/Cockpit';

import Persons from '../components/Persons/Persons';

class App extends Component {
    state = {
        persons: [
            {id: '1231', name: "MAX", age: 26},
            {id: '12asdf', name: "Manu", age: 23},
            {id: '1dfs31', name: "kill", age: 11}
        ],
        otherState: 'someValues',
        showPerson: false
    };


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

        let persons = null;


        if (this.state.showPerson) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangeHandler}/>;
        }

        return (
            <div className={cssClasses.App}>
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
