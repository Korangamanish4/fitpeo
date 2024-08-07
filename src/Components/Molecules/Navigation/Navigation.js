import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import React from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Styles from "./styles.module.scss";
import useBoolStyles from "../../../Hooks/useBoolStyles";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const pathname = window.location.pathname;
  const navigate = useNavigate();
  const BoolStyle = useBoolStyles();

  const HomeStyle = BoolStyle(`${Styles.Selected}`, pathname === "/dashboard");
  const AnalyticsStyle = BoolStyle(
    `${Styles.Selected}`,
    pathname === "/analytics"
  );
  const InventoryStyle = BoolStyle(
    `${Styles.Selected}`,
    pathname === "/inventory"
  );
  const WalletStyle = BoolStyle(`${Styles.Selected}`, pathname === "/wallet");
  const CartStyle = BoolStyle(`${Styles.Selected}`, pathname === "/cart");

  return (
    <div className={Styles.NavigationContainer}>
      <div className={Styles.TopSection}>
        <button
          className={`${Styles.Button} ${HomeStyle}`}
          onClick={() => navigate("/dashboard")}
        >
          <HomeIcon />
        </button>
        <button
          className={`${Styles.Button} ${AnalyticsStyle}`}
          onClick={() => navigate("/analytics")}
        >
          <AssessmentOutlinedIcon />
        </button>
        <button
          className={`${Styles.Button} ${InventoryStyle}`}
          onClick={() => navigate("/inventory")}
        >
          <ContentPasteIcon />
        </button>
        <button
          className={`${Styles.Button} ${WalletStyle}`}
          onClick={() => navigate("/wallet")}
        >
          <AccountBalanceWalletOutlinedIcon />
        </button>
        <button
          className={`${Styles.Button} ${CartStyle}`}
          onClick={() => navigate("/cart")}
        >
          <ShoppingBagOutlinedIcon />
        </button>
      </div>
      <div className={Styles.BottomSection}>
        <button className={Styles.Button}>
          <LogoutIcon />
        </button>
      </div>
    </div>
  );
};

export default Navigation;
