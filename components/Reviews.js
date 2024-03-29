import React from "react";
import StarRatings from "react-star-ratings";
import ReviewTable from "./ReviewTable";

const Reviews = ({ reviews }) => {
  // Check if reviews prop exists and is an array, or else assign an empty array
  const reviewsArray = Array.isArray(reviews) ? reviews : [];

  return (
    <div>
      <div className="mx-4">
        <h2 className="text-2xl font-bold">Reviews</h2>
        <ReviewTable reviews={reviews} />
        <br />
        {reviewsArray.length === 0 ? (
          <p>There are no reviews yet</p> // Render "There are no reviews yet" if the array is empty
        ) : (
          <ul className="mt-4">
            {reviewsArray.map((review, index) => (
              <li key={index} className="mb-8">
                <div className="flex items-center mb-2">
                  <h3 className="mr-2 font-bold">{review.title}</h3>
                  <StarRatings
                    rating={review.rating}
                    starRatedColor="yellow"
                    starDimension="20px"
                    starSpacing="2px"
                  />
                </div>
                <p>{review.description}</p>
                <p className="text-grey font-italic">- {review.author}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Reviews;
