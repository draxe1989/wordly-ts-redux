import React, {FC} from 'react';
import GridString from "./GridString/GridString";
import './GridArea.css'

const GridArea: FC = () => {
    let arr: Array<any> = [1, 2, 3, 4, 5, 6]

    return (
        <div className={'grid-area'}>
            {arr.map(string => <GridString key={string}/>)}
        </div>
    );
};

export default GridArea;