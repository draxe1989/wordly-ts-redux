import React from 'react';
import Keyboard from "./components/Keyboard/Keyboard";
import GridArea from "./components/GridArea/GridArea";
import {useDispatch, useSelector} from "react-redux";
import {addAttemptAC, delLetterAC, writeLetterAC} from "./store/store";
import {GridAreaType, state} from "./types";

function App() {
    const dispatch = useDispatch();
    const logButton = (letter: string): void => {
        switch (letter) {
            case 'Delete':
                dispatch(delLetterAC())
                break
            case 'Enter':
                dispatch(addAttemptAC())
                break
            default:
                dispatch(writeLetterAC(letter))
                break
        }
    }

    const gridArea = useSelector((state : state) : GridAreaType => state.grid)


    return (
        <div>
            <GridArea gridArea={gridArea}/>
            <Keyboard callback={logButton}/>
        </div>
    );
}

export default App;
