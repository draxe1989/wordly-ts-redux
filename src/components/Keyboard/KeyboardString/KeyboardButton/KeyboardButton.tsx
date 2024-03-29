import React, {MouseEvent, FC} from 'react';
import './KeyboardButton.css'


type KeyboardButtonProps = {
    guessed: 'guessed-cell' | 'wrong-order-cell' | 'wrong-cell' | ''
    title: string,
    callback: (title: string) => void
}

const KeyboardButton: FC<KeyboardButtonProps> = ({guessed, title, callback}) => {
    const onButtonHandler = (e: MouseEvent): void => {
        e.preventDefault()
        callback(title)
    }
    return (
        <div className={`keyboard-button ${guessed}`}
                onPointerDown={onButtonHandler}>
            {title === '-' ? <div style={{paddingLeft: '5px', paddingRight: '5px'}}>&#128281;</div>
                : title === '+' ? <div style={{paddingLeft: '10px', paddingRight: '10px'}}>&#9094;</div>
                    : title}
        </div>
    );
};

export default React.memo(KeyboardButton, (a, b)=> (a.guessed === b.guessed && a.title === b.title));