import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UsersINO/UserInput';
import UserOutput from './UsersINO/UserOutput';

import './css/css.css';

class App extends Component {
    state = {
        users: [
            {p1: 'username', p2: 'password'}
        ]
    }

    usernameEventHandler = (event) => {
        this.setState(
            {
                users: [
                    {p1: event.target.value, p2: 'password'}
                ]
            }
        )
    }

    render() {
        const style = {
            backgroundColor: 'red',
            font: 'inherit',
            padding: '16px',
            margin: '16px',
            cursor: 'pointer',
            border: '5x solid blue',
            inline: 'false'
        };
        return (

            <div className="App">
                <button style={style}/>
                <UserInput
                    style={style}
                    change={this.usernameEventHandler} startName={this.state.users[0].p1}/>
                <UserOutput style={style} p1='p11' p2='p21'/>
                <UserOutput
                    p1={this.state.users[0].p1}
                    p2={this.state.users[0].p2}/>
                <UserOutput/>

            </div>
        )
            ;
    }
}

export default App;
