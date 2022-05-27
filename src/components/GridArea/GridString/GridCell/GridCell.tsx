import React, {FC} from 'react';
import './GridCell.css'

type GridCellProps = {
    letter: string,
    guessed: 'guessed-cell' | 'wrong-order-cell' | 'wrong-cell' | ''
}

const GridCell: FC<GridCellProps> = ({letter, guessed}) => {
    return (
        <div className={`grid-cell ${guessed}`}>
            {letter}
        </div>
    )
};

export default GridCell;