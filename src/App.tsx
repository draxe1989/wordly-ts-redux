import React from 'react';
import Keyboard from "./components/Keyboard/Keyboard";
import GridArea from "./components/GridArea/GridArea";
import {useDispatch, useSelector} from "react-redux";
import {addAttemptAC, closeModalAC, delLetterAC, writeLetterAC} from "./store/store";
import {GridAreaType, KeyboardType, ModalType, state} from "./types";
import Modal from "./components/Modal/Modal";
import './App.css'

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
    const closeModal = () => dispatch(closeModalAC())
    const gridArea = useSelector((state : state) : GridAreaType => state.grid)

    const keyboard = useSelector((state:state): KeyboardType =>state.keyboard)

    const modal = useSelector((state:state): ModalType =>state.modal)



    return (
        <div className='container'>
            <GridArea gridArea={gridArea}/>
            <Keyboard keyboard = {keyboard} callback={logButton}/>
            {modal.visible && <Modal callback={closeModal} header={modal.header} text={modal.text}/>}
        </div>
    );
}

export default App;
