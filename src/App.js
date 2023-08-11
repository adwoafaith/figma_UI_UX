import React from "react";
import Flower from "./flowers/flower";
import WhatWeOffer from "./offers/whatWeOffer";
import Products from "./products/index";

function App() {
  return (
    <div className="App">
      <Flower />
      <WhatWeOffer/>
      <Products/>
    </div>
  );
}

export default App;
