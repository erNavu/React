import "../styles/shimmer.css"

const BodyShimmer = () => {

    var resShimmer = [];
    for (var i = 0; i < 8; i++) {
        resShimmer.push(
            <div key={i} className="card">
                <div className="loader-shimmer-banner shimmer-animation"></div>
                <div className="loader-shimmer-content">
                    <div className="loader-shimmer-header">
                        <div className="loader-shimmer-title shimmer-animation"></div>
                    </div>
                    <div className="loader-shimmer-list shimmer-animation"></div>
                    <div className="loader-shimmer-info shimmer-animation"></div>
                </div>
            </div>);
    }

    return (
        <div className="flex flex-wrap">
            {resShimmer}
        </div>
    )
}
export default BodyShimmer