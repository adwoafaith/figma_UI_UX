import React from "react";
import Flower from "./flowers/flower";
import WhatWeOffer from "./offers/whatWeOffer";
import Products from "./products/index";
import Benefits from './benefits/index'
import Galary from "./Galary";
import Testimonial from "./testimonials";
import Froms from "./form";
import Blog from "./Blog";
import Footer from "./footer";

function App() {
  return (
    <div className="App">
      <Flower />
      <WhatWeOffer />
      <Products />
      <Benefits />
      {/* <Galary/> */}
      <Testimonial />
      <Froms/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
