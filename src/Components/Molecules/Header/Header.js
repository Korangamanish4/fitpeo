import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Styles from "./styles.module.scss";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import userImage from "../../../Assets/Images/userImage.webp";

const Header = () => {
  return (
    <div className={Styles.HeaderContainer}>
      <div className={Styles.LeftSection}>
        <WidgetsOutlinedIcon />
        <div className={Styles.InputFieldContainer}>
          <SearchOutlinedIcon />
          <input placeholder="Search" className={Styles.InputField} />
        </div>
      </div>
      <div className={Styles.RightSection}>
        <button className={Styles.Button}>
          <MailOutlineIcon />
        </button>
        <button className={Styles.Button}>
          <SettingsOutlinedIcon />
        </button>
        <button className={Styles.Button}>
          <NotificationsNoneOutlinedIcon />
        </button>
        <button className={`${Styles.Button} ${Styles.ExtraStyle}`}>
          <img alt="userImage" className={Styles.UserImage} src={userImage} />
        </button>
      </div>
    </div>
  );
};

export default Header;
