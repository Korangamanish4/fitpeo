import React from "react";
import Styles from "./styles.module.scss";
import { orderData } from "../../../Assets/DummyData/OrderData";

const OrderSection = () => {
  return (
    <div className={Styles.OrderContainer}>
      <header className={Styles.Header}>Recent Orders</header>
      <div className={Styles.DataTable}>
        <div className={Styles.TableRowContainer}>
          <div className={Styles.Label}>Customer</div>
          <div className={Styles.Label}>Order No.</div>
          <div className={Styles.Label}>Amount</div>
          <div className={Styles.Label}>Status</div>
        </div>
        {orderData.map((item) => {
          return (
            <div key={item.orderId} className={Styles.TableRowContainer}>
              <div className={`${Styles.Label} ${Styles.Data}`}>
                <img
                  alt="userImage"
                  src={item.customerImage}
                  className={Styles.UserImage}
                />
                {item.customerName}
              </div>
              <div className={`${Styles.Label} ${Styles.Data}`}>
                {item.orderId}
              </div>
              <div className={`${Styles.Label} ${Styles.Data}`}>
                ${item.orderAmount}
              </div>
              <div className={`${Styles.Label} ${Styles.Data}`}>
                <div
                  className={`${Styles.Status}  ${
                    item.orderStatus === "delivered" ? Styles.Green : Styles.Red
                  }`}
                >
                  {item.orderStatus}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderSection;
