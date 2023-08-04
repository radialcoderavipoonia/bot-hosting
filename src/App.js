import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BasicFeatures from "./components/BasicFeatures";
import ModPack from "./components/ModPack";
import Testimonials from "./components/Testimonials";
import PricingPlan from "./components/PricingPlan";
// import MyNav from "./components/MyNav";
import GameHosting from "./components/GameHosting";
import OurLocations from "./components/OurLocations";
import { ProductNav } from "./components/ProductNav";
// import { Hero } from "./components/Hero";

function App() {
  return (
    <div className=" overflow-hidden bg_img_main">
      {/* <MyNav /> */}
      <ProductNav />
      <PricingPlan />
      <OurLocations />
      <GameHosting />
      {/* <Hero /> */}
      <Testimonials />
      <BasicFeatures />
      <ModPack />
    </div>
  );
}

export default App;
