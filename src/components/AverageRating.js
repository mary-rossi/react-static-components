const AverageRating = (props) => {
    return (
        <div className='rating'>
            <h2>Average Rating</h2>
            <h3>{props.rating}</h3>
        </div>    
    );
};

export default AverageRating