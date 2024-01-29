const ReviewTable = ({ reviews }) => {
    // Calculations for star rating counts and lengths
    // ...

    const starRatingCounts = {
        5: 0,
        4: 0,
        3: 0,
        2: 0,
        1: 0,
    };

    // Check if the reviews prop is defined
    if (reviews && reviews.reviews) {
        reviews.reviews.forEach((review) => {
            const starRating = Math.round(review.rating);
            starRatingCounts[starRating]++;
        });
    }

    const maxCount = Math.max(...Object.values(starRatingCounts));
    const maxLength = 0.2 * window.innerWidth;

    const lengths = {};

    for (const rating in starRatingCounts) {
        const count = starRatingCounts[rating];
        lengths[rating] = (count / maxCount) * maxLength;
    }

    return (
        <div>
            <br />
            <div style={{ display: "flex", alignItems: "center" }}>
                <p style={{ marginRight: "10px", marginBottom: "0" }}>5 stars</p>
                <div style={{ width: `${maxLength}px`, height: "1rem", backgroundColor: "gray", marginBottom: "2px", border: "1px solid black", borderRadius: "5px" }}>
                    <div style={{ width: `${lengths['5']}px`, height: "100%", backgroundColor: "yellow", border: "1px solid black", borderRadius: "5px" }}></div>
                </div>
                <p style={{ marginLeft: "10px", marginBottom: "0" }}>{starRatingCounts['5']} reviews</p>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
                <p style={{ marginRight: "10px", marginBottom: "0" }}>4 stars</p>
                <div style={{ width: `${maxLength}px`, height: "1rem", backgroundColor: "gray", marginBottom: "2px", border: "1px solid black", borderRadius: "5px" }}>
                    <div style={{ width: `${lengths['4']}px`, height: "100%", backgroundColor: "yellow", border: "1px solid black", borderRadius: "5px" }}></div>
                </div>
                <p style={{ marginLeft: "10px", marginBottom: "0" }}>{starRatingCounts['4']} reviews</p>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
                <p style={{ marginRight: "10px", marginBottom: "0" }}>3 stars</p>
                <div style={{ width: `${maxLength}px`, height: "1rem", backgroundColor: "gray", marginBottom: "2px", border: "1px solid black", borderRadius: "5px" }}>
                    <div style={{ width: `${lengths['3']}px`, height: "100%", backgroundColor: "yellow", border: "1px solid black", borderRadius: "5px" }}></div>
                </div>
                <p style={{ marginLeft: "10px", marginBottom: "0" }}>{starRatingCounts['3']} reviews</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <p style={{ marginRight: "10px", marginBottom: "0" }}>2 stars</p>
                <div style={{ width: `${maxLength}px`, height: "1rem", backgroundColor: "gray", marginBottom: "2px", border: "1px solid black", borderRadius: "5px" }}>
                    <div style={{ width: `${lengths['2']}px`, height: "100%", backgroundColor: "yellow", border: "1px solid black", borderRadius: "5px" }}></div>
                </div>
                <p style={{ marginLeft: "10px", marginBottom: "0" }}>{starRatingCounts['2']} reviews</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <p style={{ marginRight: "10px", marginBottom: "0" }}>1 star&nbsp;&nbsp;</p>
                <div style={{ width: `${maxLength}px`, height: "1rem", backgroundColor: "gray", marginBottom: "2px", border: "1px solid black", borderRadius: "5px" }}>
                    <div style={{ width: `${lengths['1']}px`, height: "100%", backgroundColor: "yellow", border: "1px solid black", borderRadius: "5px" }}></div>
                </div>
                <p style={{ marginLeft: "10px", marginBottom: "0" }}>{starRatingCounts['1']} reviews</p>
            </div>
            <br />
        </div>
    );
};

export default ReviewTable;

