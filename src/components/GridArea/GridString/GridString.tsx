import React, {FC} from 'react';
import GridCell from "./GridCell/GridCell";
import './GridString.css'
import {GridStringType} from "../../../types";

type props = {
    gridString: GridStringType
}

const GridString :FC<props>= ({gridString}) => {
    return (
        <div className={'grid-string'}>
            {gridString.map(gridCell=><GridCell key={gridCell.id} gridCell={gridCell}/>)}
        </div>
    );
};

export default React.memo(GridString);