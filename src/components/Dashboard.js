import React from 'react';
import AverageRating from './AverageRating';
import Review from './Review';
import SentimentAnalysis from './SentimentAnalysis';
import WebsiteVisitors from './WebsiteVisitors';

function Dashboard() {
    return(
        <div className='Dashboard'>
            <AverageRating rating='4.6' />
            <Review reviews='1,281' />
            <SentimentAnalysis sentimentAnalysisOne="960" sentimentAnalysisTwo="122" sentimentAnalysisThree="321" />
            <WebsiteVisitors websiteVisitors="821" />
        </div>
    );
};

export default Dashboard;