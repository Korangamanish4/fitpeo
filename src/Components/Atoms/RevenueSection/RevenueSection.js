import { Cell, Pie, PieChart } from "recharts";

import ArrowDropUpSharpIcon from "@mui/icons-material/ArrowDropUpSharp";
import React from "react";
import Styles from "./styles.module.scss";

const RevenueSection = () => {
  const storageDataArray = [
    {
      name: " ",
      value: 30,
    },
    { name: " ", value: 70 },
  ];
  const COLORS = ["#2A3471", "#7296f6"];

  return (
    <div className={Styles.RevenueContainer}>
      <div className={Styles.LeftSection}>
        <header className={Styles.Header}>Net Profit</header>
        <span className={Styles.RevenueText}>$ 6759.25</span>
        <label className={`${Styles.Label} ${Styles.Profit}`}>
          <ArrowDropUpSharpIcon />
          3%
        </label>
      </div>
      <div className={Styles.RightSection}>
        <PieChart width={130} height={130} className="header-storage-pie-chart">
          <Pie
            data={storageDataArray}
            cx={60}
            cy={60}
            innerRadius={37}
            dataKey="value"
          >
            {storageDataArray.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <div className={Styles.ChartDescription}>
          70%
          <label className={Styles.GoalCompleted}>
            Goal <br /> Completed
          </label>
        </div>
        <label className={Styles.Description}>
          *The values here has been rounded off.
        </label>
      </div>
    </div>
  );
};

export default RevenueSection;
