import React from "react";
import Flower from "./flowers/flower";
import WhatWeOffer from "./offers/whatWeOffer";
import Products from "./products/index";
import Benefits from './benefits/index'
import Testimonial from "./testimonials";

function App() {
  return (
    <div className="App">
      {/* <Flower />
      <WhatWeOffer/>
      <Products/>
      <Benefits/> */}
      <Testimonial/>
    </div>
  );
}

export default App;
