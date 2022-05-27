import React, {FC} from 'react';
import GridCell from "./GridCell/GridCell";
import './GridString.css'

const GridString :FC= () => {
    let arr: number[] = [1,2,3,4,5]


    return (
        <div className={'grid-string'}>
            {arr.map(cell=><GridCell key={cell + 'cell'} letter={cell+''} guessed={""}/>)}
        </div>
    );
};

export default GridString;