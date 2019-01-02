import React, {Component} from 'react';

import './App.css';
import TextLength from './module/text_length';
import ValidationComponent from './module/Validation';
import CharComponent from './module/CharComponent';
import './css/mainCss.css';

class App extends Component {

    state = {
        inputs: [
            {id: '1232', tekstLength: '0', tekst: ''}
        ],
        length: {length: 0}
    }


    inputLengthHandler = (event, id) => {
        const indexElement = this.state.inputs.findIndex(p => {
            return p.id === id;
        });

        //kopiowanie pojedynczego obiektu, by operowac caly czas na kopii : D simple as that
        const inputenOne = {...this.state.inputs[indexElement]};

        //modyfikacja skopiowanego elementu
        inputenOne.tekstLength = event.target.value.length;
        inputenOne.tekst = event.target.value;

        //skopiowanie całej macierzy
        const inputsArray = [...this.state.inputs];

        inputsArray[indexElement] = inputenOne;


        this.setState({
                inputs: inputsArray
            }
        )


    };

    charDeleteHandler = (id, idElement) => {
        const indexElement = this.state.inputs.findIndex(p => {
            return p.id === idElement;
        });
        //kopiowanie pojedynczego obiektu, by operowac caly czas na kopii : D simple as that
        const inputenOne = {...this.state.inputs[indexElement]};
        let inputenTwo = inputenOne.tekst.substring(0, id) + inputenOne.tekst.substr(id + 1, inputenOne.tekst.length);

        inputenOne.tekst = inputenTwo;
        inputenOne.tekstLength = inputenTwo.length;

        const inputsArray = [...this.state.inputs];
        inputsArray[indexElement] = inputenOne;


        this.setState({
                inputs: inputsArray
            }
        )

    };

    render() {

        let modules = (
            <div>
                {this.state.inputs.map((element, index) => {
                    console.log(element.tekst);
                    let charArray = [...(element.tekst)];
                    // console.log(charArray);

                    return (
                        <div>
                            <TextLength
                                changed={(event) => this.inputLengthHandler(event, element.id)}
                                tekstLength={element.tekstLength}
                                key={element.id}
                                tekst={element.tekst}/>
                            <ValidationComponent length={element.tekstLength}/>
                            {charArray.map((c, index) => {
                                return <CharComponent
                                    letter={c}
                                    clicked={() => this.charDeleteHandler(index, element.id)}/>
                            })}
                        </div>
                    );
                })}
            </div>
        );


        return (

            <div>
                {modules}
            </div>
        );
    }
}

export default App;
