// @flow
import React, {PureComponent} from 'react';

import cssClasses from './App2.css';
import Cockpit from '../components/Cockpit/Cockpit5';
import WithClass from '../hoc/WithClass';
import Aux from '../hoc/Aux';
import withClass1 from '../hoc/withClass1';

import Persons from '../components/Persons/Persons5';

class App extends PureComponent {
    constructor(props) {
        super(props);
        console.log("[App4.js] inside Constructor", props);

    };

    componentWillMount() {
        console.log('[App3.js] componentWillMount()');
    }

    componentDidMount() {
        console.log('[App4.js] componenetDidMount()');
    }

    state = {
        persons: [
            {id: '1231', name: "MAX", age: 123},
            {id: '12asdf', name: "Manu", age: 23},
            {id: '1dfs31', name: "kill", age: 11}
        ],
        otherState: 'someValues',
        showPerson: false,
        toggleClickCounter: 0
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
        //setState is executed asynchronously
        //if we want to directly update the value without creating the
        this.setState((prevState, props) => {
            return {
                showPerson: !doesShow,
                toggleClickCounter: prevState.toggleClickCounter + 1
            }
        });

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
            <Aux>
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
            </Aux>


            /*     //auxiliary component wrapping content
                 <WithClass classes={cssClasses.App}>
                     <button onClick={() => {this.setState({showPerson: true})}}>show persons</button>
                     <Cockpit
                         persons={this.state.persons}
                         showPersons={this.state.showPerson}
                         toggled={this.togglePersonHandler}
                     />
                     {persons}

                 </WithClass>
     */


        );
    }
}


export default withClass1(App, cssClasses.App);
