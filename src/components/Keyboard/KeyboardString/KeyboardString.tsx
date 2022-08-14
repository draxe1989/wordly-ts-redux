import React, {FC} from 'react';
import KeyboardButton from "./KeyboardButton/KeyboardButton";
import './KeyboardString.css'
import {KeyboardCell} from "../../../types";

type KeyboardStringProps = {
    arr: KeyboardCell[],
    callback: (letter:string)=>void
}

const KeyboardString : FC<KeyboardStringProps> = ({arr, callback}) => {



    return (
        <div className={'keyboard-string'}>
            {arr.map(letter=><KeyboardButton key={letter.letter} guessed={letter.guessed} title={letter.letter} callback={callback}/>)}
        </div>
    );
};

export default React.memo(KeyboardString);