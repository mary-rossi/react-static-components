import React from 'react';
import AverageRating from './AverageRating';

function Dashboard() {
    return(
        <div className='Dashboard'>
            <AverageRating rating='4.6' />
        </div>
    );
};

export default Dashboard;