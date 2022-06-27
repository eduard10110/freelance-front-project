import HomeMobileCategoriesContainer from "containers/mobileContainers/homeMobileCategoriesContainer";
import HomeMobileFirstContainer from "containers/mobileContainers/HomeMobileFirstContainer";
import HomeMobileHowWorkContainer from "containers/mobileContainers/homeMobileHowWorkContainer";
import HomeMobileReviewsContainer from "containers/mobileContainers/homeMobileReviewsContainer";
import MobileStartTodayContainer from "containers/mobileStartTodayContainer";
import React from "react";

export default function HomeMobile() {
  return <div>
    <HomeMobileFirstContainer/>
    <HomeMobileHowWorkContainer/>
    <HomeMobileCategoriesContainer/>
    <HomeMobileReviewsContainer/>
    <MobileStartTodayContainer/>
  </div>;
}
