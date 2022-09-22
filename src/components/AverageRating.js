const AverageRating = (props) => {
    return (
        <div className='rating'>
            <h2>Average Rating</h2>
            <h1>{props.rating}</h1>
        </div>    
    );
};

export default AverageRating