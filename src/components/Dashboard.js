import React from 'react';
import AverageRating from './AverageRating';
import Review from './Review';

function Dashboard() {
    return(
        <div className='Dashboard'>
            <AverageRating rating='4.6' />
            <Review reviews='1,281' />
        </div>
    );
};

export default Dashboard;