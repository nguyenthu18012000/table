import React from 'react';
import '@pages/style.scss';

type prop = {
    style?: string;
    style2?: string;
    value: any;
}

const CellComponent = ({style, style2, value}: prop) => {
    
    if (style === "0" ) {
        return <div className={`green-cell bold-cell`}>{value}</div>
    } else if (style === "1") {
        return <div className={`red-cell bold-cell`}>{value}</div>
    } else if (style === "2") {
        return <div className={`yellow-cell bold-cell`}>{value}</div>
    } else {
        return <div className={`${style} bold-cell`}>{value}</div>
    }
}

export default CellComponent;
