const BodyShimmer = () => {

    var resShimmer = [];
    for (var i = 0; i < 20; i++) {
        resShimmer.push(<div key={i} className="res-shimmer">
            <img />
            <div className="restaurant_details">
                <div className='restaurant_name'></div>
                <div className='restaurant_cuisines'></div>
                <div className='restaurant_footer'></div>
            </div>
        </div>);
    }

    return (
        <div className="body-shimmer-container">
            {resShimmer}
        </div>
    )
}
export default BodyShimmer