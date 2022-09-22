const SentimentAnalysis = (props) => {
    return(
        <div className='sentimentAnalysis'>
            <h2>Sentiment Analysis</h2>
            <h1>{props.sentimentAnalysisOne}</h1>
            <h1>{props.sentimentAnalysisTwo}</h1>
            <h1>{props.sentimentAnalysisThree}</h1>
        </div>
    );
};

export default SentimentAnalysis;