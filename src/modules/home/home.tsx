import Header from "@/shared/widgets/header/header";
import React from "react";
import Banner from "./elements/Banner";
import Branding from "./elements/Branding";
import Benefits from "./elements/Benefits";
import FeatureHighlight from "./elements/feature.highlights";
import Pricing from "./elements/pricing";
import Footer from "../../shared/widgets/footer/footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Branding />
      <Benefits />
      <FeatureHighlight />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;
