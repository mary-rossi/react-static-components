import React from 'react';
import AverageRating from './AverageRating';
import Review from './Review';
import SentimentAnalysis from './SentimentAnalysis';

function Dashboard() {
    return(
        <div className='Dashboard'>
            <AverageRating rating='4.6' />
            <Review reviews='1,281' />
            <SentimentAnalysis sentimentAnalysisOne="960" sentimentAnalysisTwo="122" sentimentAnalysisThree="321" />
        </div>
    );
};

export default Dashboard;