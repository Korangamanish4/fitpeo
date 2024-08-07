import React from "react";
import Styles from "./styles.module.scss";

const AnalyticsSuspense = () => {
  const array = [1, 2, 3, 4];

  return (
    <div className={Styles.AnalyticsContainer}>
      {array.map((item) => {
        return <div className={Styles.Animation} id={item} />;
      })}
    </div>
  );
};

export default AnalyticsSuspense;
