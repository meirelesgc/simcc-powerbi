import React from 'react';

const PowerBI = ({ powerBI }) => {
    return <iframe
        src={powerBI}
        title="Power BI Report"
        className='powerbi-frame' />
};

export default PowerBI;
