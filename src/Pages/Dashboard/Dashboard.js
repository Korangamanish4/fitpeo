import React, { lazy, Suspense } from "react";
import Styles from "./styles.module.scss";
import AnalyticsSuspense from "../../Components/Atoms/AnalyticsSection/AnalyticsSuspense";
import { delay } from "../../Helpers/Functions";
import BarChartSuspense from "../../Components/Atoms/BarChartSection/BarChartSuspense";
import OptionsSuspense from "../../Components/Atoms/OptionsSection/OptionsSuspense";
import RevenueSuspense from "../../Components/Atoms/RevenueSection/RevenueSuspense";
import OrderSuspense from "../../Components/Atoms/OrderSection/OrderSuspense";
import ReviewSuspense from "../../Components/Atoms/ReviewSection/ReviewSuspense";

const AnalyticsSection = lazy(() =>
  delay(1000).then(() =>
    import("../../Components/Atoms/AnalyticsSection/AnalyticsSection")
  )
);
const RevenueSection = lazy(() =>
  delay(2500).then(() =>
    import("../../Components/Atoms/RevenueSection/RevenueSection")
  )
);
const BarChartSection = lazy(() =>
  delay(500).then(() =>
    import("../../Components/Atoms/BarChartSection/BarChartSection")
  )
);
const OptionsSection = lazy(() =>
  delay(1500).then(() =>
    import("../../Components/Atoms/OptionsSection/OptionsSection")
  )
);
const OrderSection = lazy(() =>
  delay(2000).then(() =>
    import("../../Components/Atoms/OrderSection/OrderSection")
  )
);
const ReviewSection = lazy(() =>
  delay(1500).then(() =>
    import("../../Components/Atoms/ReviewSection/ReviewSection")
  )
);

const Dashboard = () => {
  return (
    <div className={Styles.DashboardContainer}>
      <header className={Styles.Header}>Dashboard</header>
      <div className={Styles.Content}>
        <Suspense fallback={<AnalyticsSuspense />}>
          <AnalyticsSection />
        </Suspense>
        <Suspense fallback={<RevenueSuspense />}>
          <RevenueSection />
        </Suspense>
        <Suspense fallback={<BarChartSuspense />}>
          <BarChartSection />
        </Suspense>
        <Suspense fallback={<OptionsSuspense />}>
          <OptionsSection />
        </Suspense>
        <Suspense fallback={<OrderSuspense />}>
          <OrderSection />
        </Suspense>
        <Suspense fallback={<ReviewSuspense />}>
          <ReviewSection />
        </Suspense>
      </div>
    </div>
  );
};

export default Dashboard;
