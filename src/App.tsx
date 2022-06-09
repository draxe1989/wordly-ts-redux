import React from 'react';
import Keyboard from "./components/Keyboard/Keyboard";
import GridArea from "./components/GridArea/GridArea";
import {useDispatch, useSelector} from "react-redux";
import {addAttemptAC, delLetterAC, writeLetterAC} from "./store/store";
import {GridAreaType, KeyboardType, state} from "./types";

function App() {
    const dispatch = useDispatch();
    const logButton = (letter: string): void => {
        switch (letter) {
            case '-':
                dispatch(delLetterAC())
                break
            case '+':
                dispatch(addAttemptAC())
                break
            default:
                dispatch(writeLetterAC(letter))
                break
        }
    }

    const gridArea = useSelector((state : state) : GridAreaType => state.grid)

    const keyboard = useSelector((state:state): KeyboardType =>state.keyboard)

    return (
        <div>
            <GridArea gridArea={gridArea}/>
            <Keyboard keyboard = {keyboard} callback={logButton}/>
        </div>
    );
}

export default App;
