import React from 'react';
import AverageRating from './AverageRating';
import Review from './Review';
import SentimentAnalysis from './SentimentAnalysis';
import WebsiteVisitors from './WebsiteVisitors';
import Sidebar from './Sidebar';

function Dashboard() {
    return(
        <div className='dashboard'>
            <Sidebar />
            <Review reviews='1,281' />
            <AverageRating rating='4.6' />
            <SentimentAnalysis sentimentAnalysisOne="960" sentimentAnalysisTwo="122" sentimentAnalysisThree="321" />
            <WebsiteVisitors websiteVisitors="821" />
        </div>
    );
};

export default Dashboard;