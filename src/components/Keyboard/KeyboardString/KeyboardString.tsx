import React, {FC} from 'react';
import KeyboardButton from "./KeyboardButton/KeyboardButton";
import './KeyboardString.css'

type KeyboardStringProps = {
    arr: string[],
    callback: (letter:string)=>void
}

const KeyboardString : FC<KeyboardStringProps> = ({arr, callback}) => {



    return (
        <div className={'keyboard-string'}>
            {arr.map(letter=><KeyboardButton key={letter} guessed={''} title={letter} callback={callback}/>)}
        </div>
    );
};

export default KeyboardString;