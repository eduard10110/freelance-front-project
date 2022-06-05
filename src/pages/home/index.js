import HomeFirstContainer from "containers/homeFirstContainer";
import HomeHowWorkServiceContainer from "containers/homeHowWorkServiceContainer";

export default function Home() {
  return (
    <div className="home-container-wrapper">
      <HomeFirstContainer />
      <HomeHowWorkServiceContainer />
    </div>
  );
}
