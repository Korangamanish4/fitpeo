import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import React from "react";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import Styles from "./styles.module.scss";

const OptionsSection = () => {
  return (
    <div className={Styles.OptionsContainer}>
      <section className={Styles.Section}>
        <div className={Styles.LeftSection}>
          <div className={`${Styles.IconContainer} ${Styles.Orange}`}>
            <CrisisAlertIcon />
          </div>
          <label className={Styles.Label}>Goals</label>
        </div>
        <button className={Styles.Button}>
          <ArrowForwardIosIcon />
        </button>
      </section>
      <section className={Styles.Section}>
        <div className={Styles.LeftSection}>
          <div className={`${Styles.IconContainer} ${Styles.Blue}`}>
            <LunchDiningIcon />
          </div>
          <label className={Styles.Label}>Popular Dishes</label>
        </div>
        <button className={Styles.Button}>
          <ArrowForwardIosIcon />
        </button>
      </section>
      <section className={Styles.Section}>
        <div className={Styles.LeftSection}>
          <div className={`${Styles.IconContainer} ${Styles.Green}`}>
            <RestaurantMenuIcon />
          </div>
          <label className={Styles.Label}>Menus</label>
        </div>
        <button className={Styles.Button}>
          <ArrowForwardIosIcon />
        </button>
      </section>
    </div>
  );
};

export default OptionsSection;
