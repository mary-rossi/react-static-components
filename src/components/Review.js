const Review = (props) => {
    return(
        <div className='review'>
            <h2>Reviews</h2>
            <h3>{props.reviews}</h3>
        </div>
    );
};

export default Review;