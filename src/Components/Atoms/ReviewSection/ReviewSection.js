import React from "react";
import StarIcon from "@mui/icons-material/Star";
import Styles from "./styles.module.scss";
import { reviews } from "../../../Assets/DummyData/Reviews";

const ReviewSection = () => {
  const totalStars = 5;

  const renderRating = (ratingNumber) => {
    const array = new Array(totalStars).fill(0);
    return array.map((_, index) => {
      if (index < ratingNumber) {
        return <StarIcon className={Styles.Golden} />;
      } else {
        return <StarIcon className={Styles.White} />;
      }
    });
  };

  return (
    <div className={Styles.ReviewContainer}>
      <header className={Styles.Header}>Customer's Feedback</header>
      {reviews.map((item) => {
        return (
          <section key={item.reviewId} className={Styles.Section}>
            <div className={Styles.TopSection}>
              <img
                alt="userImage"
                src={item.userImage}
                className={Styles.UserImage}
              />
              <label className={Styles.UserName}>{item.userName}</label>
            </div>
            <div className={Styles.RatingSection}>
              {renderRating(item.rating)}
            </div>
            <p className={Styles.Review}>{item.review}</p>
          </section>
        );
      })}
    </div>
  );
};

export default ReviewSection;
