import React, {FC} from 'react';
import './KeyboardButton.css'


type KeyboardButtonProps = {
    guessed: 'guessed-key' | 'wrong-key' | ''
    title: string,
    callback: (title: string) => void
}

const KeyboardButton: FC<KeyboardButtonProps> = ({guessed, title, callback}) => {
    return (
        <button className={`keyboard-button ${guessed}`}
                onClick={() => callback(title)}>
            {title === 'Delete' ? 'Del' : title === 'Enter' ? 'ENT' : title}
        </button>
    );
};

export default KeyboardButton;