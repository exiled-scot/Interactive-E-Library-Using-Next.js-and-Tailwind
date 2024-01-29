import React from 'react';

const ReviewTable = ({ reviews }) => {
  const starRatingCounts = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  };

  if (reviews?.length > 0) {
    reviews.forEach((review) => {
      const starRating = Math.round(review.rating);
      starRatingCounts[starRating]++;
    });
  }

  const maxCount = Math.max(...Object.values(starRatingCounts));
  const maxLength = 0.2 * window.innerWidth;

  const renderStarRating = (rating) => {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ marginRight: "10px", marginBottom: "0" }}>{rating} stars</p>
        <div
          style={{
            width: `${maxLength}px`,
            height: "1rem",
            backgroundColor: "gray",
            marginBottom: "2px",
            border: "1px solid black",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              width: `${reviews && reviews.length > 0 ? (starRatingCounts[rating] / maxCount) * maxLength : "100%"}px`,
              height: "100%",
              backgroundColor: `${reviews && reviews.length > 0 ? "yellow" : "gray"}`,
              border: "1px solid black",
              borderRadius: "5px",
            }}
          ></div>
        </div>
        <p style={{ marginLeft: "10px", marginBottom: "0" }}>
          {starRatingCounts[rating]} reviews
        </p>
      </div>
    );
  };

  return (
    <div>
      <br />
      {renderStarRating(5)}

      {/* Modify for other star ratings */}
      {renderStarRating(4)}
      {renderStarRating(3)}
      {renderStarRating(2)}
      {renderStarRating(1)}

      <br />
    </div>
  );
};

export default ReviewTable;
