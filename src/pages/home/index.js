import HomeCategoriesContainer from "containers/homeCategoriesContainer";
import HomeFirstContainer from "containers/homeFirstContainer";
import HomeHowWorkServiceContainer from "containers/homeHowWorkServiceContainer";
import HomeReviewsContainer from "containers/homeReviewsContainer";
import StartTodayContainer from "containers/startTodayContainer";

export default function Home() {
  return (
    <div className="home-container-wrapper">
      <HomeFirstContainer />
      <HomeHowWorkServiceContainer />
      <HomeCategoriesContainer />
      <HomeReviewsContainer />
      <StartTodayContainer/>
    </div>
  );
}
