// @flow
import React, {Component} from 'react';
import './App.css';
//always capital letter in imports all components.

import Person from './components/Person/Person';


class App extends Component {
    state = {
        persons: [
            {id: '1231', name: "MAX", age: 26},
            {id: '12asdf', name: "Manu", age: 23},
            {id: '1dfs31', name: "kill", age: 11}
        ],
        otherState: 'someValues',
        showPerson: false
    }

    switchNameHandler = (newName) => {
        //console.log("Was clicked");
        //Don't do this this.state.persons[0].name="maro paor";
        this.setState({
            persons: [
                {name: newName, age: 226},
                {name: "Manu", age: 223},
                {name: "kill", age: 11}
            ]
        })
    };

    //fetch all people xD
    deletePersonHandler = (personIndex) => {
        //this creates reference to original object to avoid this we can use slice()
        // const persons = this.state.persons;
        //there is also different approach we can use newest JS6 operator:
        const persons = [...this.state.persons];
        // const persons = this.state.persons.slice();
        //splice delete one person removes from the array
        persons.splice(personIndex, 1);
        //ustawia zaktualizowana macierz, wskaznik
        this.setState({persons: persons});
    }

    nameChangeHandler = (event, id) => {

        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person =
            {
                //opertor umozliwia utworzenie nowego obiektu a nie zmienianie juz istni
                //istniejacego. Nie mutowalne :D '...' dzial dla macierzy i obiektow
                ...this.state.persons[personIndex]
            };

        //modyfikacja utworzonej kopi person
        person.name = event.target.value;
        //utworzenie kopii macierzy persons
        const persons = [...this.state.persons];
        //modyfikacji kopii macierzy persons
        persons[personIndex] = person;
        //aktualizacja macierzy oryginalnej przy pomocy macierzy utworzonej wczesniej
        this.setState({
            persons: persons
        });
    };


    togglePersonHandler = () => {
        const doesShow = this.state.showPerson;
        this.setState({showPerson: !doesShow});

    }


    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1x solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;
        if (this.state.showPerson) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            changed={(event) => this.nameChangeHandler(event, person.id)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                        />
                    })}
                </div>
            );
        }

        return (
            <div className='App'>
                <h1> This is react app</h1>
                <p> this is working</p>
                <button
                    style={style}
                    onClick={this.togglePersonHandler}>Toggle Persons
                </button>
                {persons}
            </div>

        );
        // return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'is it safe to go alone'));
    }
}

/*

{this.state.showPerson ?
        <div>

            <Person
                handler={this.switchNameHandler.bind(this, 'Maxonomia!!!')}
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}/>
            <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                changed={this.nameChangeHandler}>My hobbies: Racing </Person>
            <Person
                name={this.state.persons[2].name}
                age={this.state.persons[2].age}/>
        </div> : null
}
*/

export default App;
