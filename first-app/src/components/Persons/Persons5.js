import React, {PureComponent} from 'react';
import Person from "./Person/Person5";


class Persons extends PureComponent {
    //LIFE CYCLE HOOKS
    constructor(props) {
        super(props);
        console.log("[Persons.js] inside Constructor", props);
    };

    componentWillMount() {
        console.log('[Persons.js] componentWillMount()');
    }

    componentDidMount() {
        console.log('[Persons.js] componenetDidMount()');
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('[update Persons4.js] Inside componentWillReceiveProps', nextProps);
    }

    // !!!!!!!!! important we can comment out this section and use PureComponent as it has shouldComponentUpdate
    //method embedded

    //we don't necessary need to add it to every component
    // if we have use case when we have component with lot's of props it is useful.
    //to spare some computing power : d
    /*shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[Update Persons4.js] Inside shouldComponentUpdate', nextProps, nextState);
        return nextProps.persons !== this.props.persons
            || nextProps.changed !== this.props.changed
            || nextProps.clicked !== this.props.clicked;
        // return true;
    }*/

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('[Update Persons4.js] Inside componentWillUpdate', nextState, nextProps);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Update Persons4.js] Inside componentDidUpdate');
    }

    render() {
        console.log('[Persons4.js] inside render()');
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                changed={(event) => this.props.changed(event, person.id)}
                name={person.name}
                age={person.age}
                key={person.id}
            />
        });
    }
}


export default Persons;
