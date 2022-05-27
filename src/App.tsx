import React from 'react';
import Keyboard from "./components/Keyboard/Keyboard";
import GridArea from "./components/GridArea/GridArea";

function App() {
    const logButton = (letter: string): void => console.log(letter)

    return (
        <div>
            <GridArea/>
            <Keyboard callback={logButton}/>
        </div>
    );
}

export default App;
