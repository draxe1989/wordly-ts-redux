import React, {FC} from 'react';
import GridString from "./GridString/GridString";
import './GridArea.css'
import {GridAreaType} from "../../types";

type props = {
    gridArea: GridAreaType
}

const GridArea: FC<props> = ({gridArea}) => {

    return (
        <div className={'grid-area'}>
            {gridArea.map((gridString, i) => <GridString key={i + ' gridString'} gridString={gridString}/>)}
        </div>
    );
};

export default GridArea;