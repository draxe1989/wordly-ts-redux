import React, {FC} from 'react';
import './KeyboardButton.css'


type KeyboardButtonProps = {
    guessed: 'wrong-letter' | 'wrong-order' | 'guessed-letter' | ''
    title: string,
    callback: (title: string) => void
}

const KeyboardButton: FC<KeyboardButtonProps> = ({guessed, title, callback}) => {
    return (
        <button className={`keyboard-button ${guessed}`}
                onClick={() => callback(title)}>
            {title === 'Delete' ? <div style={{paddingLeft: '5px', paddingRight: '5px'}}>&#128281;</div>
                : title === 'Enter' ? <div style={{paddingLeft: '10px', paddingRight: '10px'}}>&#9094;</div>
                    : title}
        </button>
    );
};

export default KeyboardButton;