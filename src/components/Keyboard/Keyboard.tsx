import React, {FC} from 'react';
import KeyboardString from "./KeyboardString/KeyboardString";
import './Keyboard.css'
import {KeyboardType} from "../../types";

type KeyboardProps = {
    callback: (letter:string)=>void,
    keyboard: KeyboardType
}

const Keyboard: FC<KeyboardProps> = ({callback , keyboard}) => {

    return (
        <div className={'keyboard'}>
            {keyboard.map((string, i)=><KeyboardString key={i + 'string'} arr={string} callback={callback}/>) }
        </div>
    );
};

export default React.memo(Keyboard);