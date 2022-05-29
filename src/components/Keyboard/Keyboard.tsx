import React, {FC} from 'react';
import KeyboardString from "./KeyboardString/KeyboardString";
import './Keyboard.css'

type KeyboardProps = {
    callback: (letter:string)=>void
}

const Keyboard: FC<KeyboardProps> = ({callback}) => {
    const keyboardButtons = [
        ['й','ц','у','к','е','н','г','ш','щ','з','х','ъ'],
        ['ф','ы','в','а','п','р','о','л','д','ж','э'],
        ['Delete','я','ч','с','м','и','т','ь','б','ю','Enter']
    ]
    return (
        <div className={'keyboard'}>
            {keyboardButtons.map((string, i)=><KeyboardString key={i + 'string'} arr={string} callback={callback}/>) }
        </div>
    );
};

export default Keyboard;