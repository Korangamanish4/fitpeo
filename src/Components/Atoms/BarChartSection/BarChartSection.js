import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import React from "react";
import Styles from "./styles.module.scss";
import { chartData } from "../../../Assets/DummyData/ChartData";

const BarChartSection = () => {
  return (
    <div className={Styles.BarChartContainer}>
      <div className={Styles.TopSection}>
        <header className={Styles.Header}>Activity</header>
        <button className={Styles.Button}>
          Weekly
          <ArrowDropDownSharpIcon />
        </button>
      </div>
      <div className={Styles.BarGraph}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="pv" fill="#7296f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartSection;
