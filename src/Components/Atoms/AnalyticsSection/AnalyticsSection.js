import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import ArrowDropUpSharpIcon from "@mui/icons-material/ArrowDropUpSharp";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import React from "react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import Styles from "./styles.module.scss";
import VerifiedIcon from "@mui/icons-material/Verified";

const AnalyticsSection = () => {
  return (
    <div className={Styles.AnalyticsContainer}>
      <div className={Styles.Content}>
        <div className={`${Styles.IconContainer} ${Styles.Blue}`}>
          <ShoppingCartCheckoutIcon />
        </div>
        <header className={Styles.Header}>Total Orders</header>
        <div className={Styles.Details}>
          75
          <label className={`${Styles.Label} ${Styles.Profit}`}>
            <ArrowDropUpSharpIcon />
            3%
          </label>
        </div>
      </div>
      <div className={Styles.Content}>
        <div className={`${Styles.IconContainer} ${Styles.Green}`}>
          <VerifiedIcon />
        </div>
        <header className={Styles.Header}>Total Delivered</header>
        <div className={Styles.Details}>
          70
          <label className={`${Styles.Label} ${Styles.Loss}`}>
            <ArrowDropDownSharpIcon />
            3%
          </label>
        </div>
      </div>
      <div className={Styles.Content}>
        <div className={`${Styles.IconContainer} ${Styles.Orange}`}>
          <NewReleasesIcon />
        </div>
        <header className={Styles.Header}>Total Cancelled</header>
        <div className={Styles.Details}>
          5
          <label className={`${Styles.Label} ${Styles.Profit}`}>
            <ArrowDropUpSharpIcon />
            3%
          </label>
        </div>
      </div>
      <div className={Styles.Content}>
        <div className={`${Styles.IconContainer} ${Styles.Pink}`}>
          <PriceCheckIcon />
        </div>
        <header className={Styles.Header}>Total Revenue</header>
        <div className={Styles.Details}>
          $12K
          <label className={`${Styles.Label} ${Styles.Loss}`}>
            <ArrowDropDownSharpIcon />
            3%
          </label>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection;
