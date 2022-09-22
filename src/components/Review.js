const Review = (props) => {
    return(
        <div className='review'>
            <h2>Reviews</h2>
            <h1>{props.reviews}</h1>
        </div>
    );
};

export default Review;