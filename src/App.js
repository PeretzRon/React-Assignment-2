import React, {Component} from 'react';
import './App.css';
import ValidationComponent from "./ValidationComponent/ValidationComponent.js";
import CharComponent from './CharComponent/CharComponent.js'
import {v4 as uuidv4} from 'uuid';

class App extends Component {
    state = {
        data: '',
        charComponent: []
    };

    inputChangeHandler = event => {
        const currentInput = event.target.value;
        this.setState({
            data: currentInput,
            charComponent: Array.from(currentInput)
        })
    };

    deleteChar = (id) => {
        const indexCharToDelete = this.state.charComponent.indexOf(value => value.id === id);
        const charComponentArr = [...this.state.charComponent];
        charComponentArr.splice(indexCharToDelete, 1);
        this.setState({
            data: charComponentArr.join(''),
            charComponent: charComponentArr
        });
    };

    render() {
        const chars = <div>
            {this.state.charComponent.map(value => {
                const id = uuidv4();
                return <CharComponent deleteChar={this.deleteChar.bind(this, id)} character={value} key={id}/>
            })
            }

        </div>;
        return (
            <div className="App">
                <header>
                    <h1>
                        Assignment 2 - React
                    </h1>
                </header>
                <div>
                    <input placeholder={'enter text'} value={this.state.data} type="text" onChange={this.inputChangeHandler}/>
                    <ValidationComponent output={this.state.data}/>
                </div>
                <div>
                    {chars}
                </div>
            </div>
        )
    }
}

export default App;
