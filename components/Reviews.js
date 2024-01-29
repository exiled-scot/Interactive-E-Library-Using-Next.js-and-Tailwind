import React from "react";
import StarRatings from "react-star-ratings";
import ReviewTable from "./ReviewTable";

const Reviews = ({ reviews }) => {
    const reviewsArray = reviews?.reviews;

    return (
        <div>
            <div className="mx-4">
                <h2 className="text-2xl font-bold">Reviews</h2>
                <ReviewTable reviews={reviews} />
                <ul>
                    {reviewsArray?.map((review, index) => (
                        <li key={index}>
                            <div className="flex items-center mb-0">
                                <h3 className="mr-2 font-bold">{review.title}</h3>
                                <StarRatings
                                    rating={review.rating}
                                    starRatedColor="blue"
                                    starDimension="20px"
                                    starSpacing="2px"
                                />
                            </div>
                            <p className="text-grey font-italic">{review.author}</p>
                            <p>{review.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Reviews;
