const WebsiteVisitors = (props) => {
    return(
        <div className='websiteVisitors'>
            <h2>Website Visitors</h2>
            <h1>{props.websiteVisitors}</h1>
        <div className='websiteVisitorsBackground'>
        </div>    
        </div>
    );
};

export default WebsiteVisitors;