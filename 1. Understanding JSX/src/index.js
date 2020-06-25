import React from 'react';
import ReactDOM from 'react-dom';

const getButtonText = () => {
    return 'Click Me!';
};
const App = () => {
    const style = { backgroundColor: 'blue', color: 'white' };

    const buttonText = 'Click Me';
    const buttonBool = true;
    const buttonArray = ['Click', 'Me', 'In', 'It'];
    const buttonObject = {
        name: 'button',
        text: 'Click Me',
    };
    return (
        <div>
            <label className="label" htmlFor="name">
                Enter Name
            </label>
            <input type="text" id="name" />
            {/* <button style={style}> {getButtonText()} </button> */}
            {/* <button style={style}> {buttonText} </button> */}

            {/* <button style={style}> {buttonType.join(' ')} </button> */}
            <button style={style}> {buttonObject.text} </button>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
