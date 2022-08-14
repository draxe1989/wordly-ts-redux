import React, {FC} from 'react';
import './GridCell.css'
import {GridCellType} from "../../../../types";

type props = {
    gridCell: GridCellType
}

const GridCell: FC<props> = ({gridCell}) => {
    return (
        <div className={`grid-cell ${gridCell.guessed}`}>
            {gridCell.letter}
        </div>
    )
};

export default React.memo(GridCell);