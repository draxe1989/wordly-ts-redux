import React, {FC} from 'react';
import KeyboardString from "./KeyboardString/KeyboardString";

type KeyboardProps = {
    callback: (letter:string)=>void
}

const Keyboard: FC<KeyboardProps> = ({callback}) => {
    const keyboardButtons = [
        ['й','ц','у','к','е','н','г','ш','щ','з','х','ъ'],
        ['ф','ы','в','а','п','р','о','o','д','ж','э'],
        ['Delete','я','ч','с','м','и','т','ь','б','ю','Enter']
    ]
    return (
        <div>
            {keyboardButtons.map((string, i)=><KeyboardString key={i + 'string'} arr={string} callback={callback}/>) }
        </div>
    );
};

export default Keyboard;