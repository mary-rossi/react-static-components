const SentimentAnalysis = (props) => {
    return(
        <div className='sentimentAnalysis'>
            <h2>Sentiment Analysis</h2>
            <h3>{props.sentimentAnalysisOne}</h3>
            <h3>{props.sentimentAnalysisTwo}</h3>
            <h3>{props.sentimentAnalysisThree}</h3>
        </div>
    );
};

export default SentimentAnalysis;