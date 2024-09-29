import React from "react";
import Hero from "../components/hero";
import Destination from "../components/destination";
import Whyus from "../components/Whyus";
import FullScreenSlider from "../components/Slider";


const Home = () => {

  return (
    <>
     <Hero/>
     <Destination/>
     <FullScreenSlider/>
     <Whyus/>
    </>
  );
};

export default Home;
