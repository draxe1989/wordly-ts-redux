import React from 'react';
import Keyboard from "./components/Keyboard/Keyboard";
import GridArea from "./components/GridArea/GridArea";
import {useDispatch} from "react-redux";
import {writeLetterAC} from "./store/store";

function App() {
    const dispatch = useDispatch();
    const logButton = (letter: string): void => {
        dispatch(writeLetterAC(letter))
    }

    return (
        <div>
            <GridArea/>
            <Keyboard callback={logButton}/>
        </div>
    );
}

export default App;
