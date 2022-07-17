import React, {FC} from 'react';
import './Modal.css'

interface ModalProps {
    header: string
    text: string
    callback: ()=>void
}

const Modal :FC<ModalProps> = ({callback,text,header}) => {
    return (
        <div className={'modal'}>
            <div>
                <h3>{header}</h3>
                <p>{text}</p>
                <button onClick={callback}>Закрыть</button>
            </div>
        </div>
    );
};

export default Modal;