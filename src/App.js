import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BasicFeatures from "./components/BasicFeatures";
import ModPack from "./components/ModPack";
import Testimonials from "./components/Testimonials";
import PricingPlan from "./components/PricingPlan";
// import MyNav from "./components/MyNav";
import GameHosting from './components/GameHosting';
import OurLocations from "./components/OurLocations";
import MyFooter from "./components/MyFooter";
// import { Hero } from "./components/Hero";

function App() {
  return (
    <div className="overflow-hidden">
      {/* <MyNav /> */}
      <PricingPlan />
      <GameHosting />
      <OurLocations />
      {/* <Hero /> */}
      <Testimonials/>
      <BasicFeatures />
      <ModPack />
      <MyFooter/>
    </div>
  );
}

export default App;
