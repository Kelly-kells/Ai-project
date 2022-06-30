import React from "react";
import { Brand, Cta, Navbar,} from "./Components";
import {
  Blog,
  Features,
  
  Header,
  Possibility,
  WhatGPT3,
  Footer,
} from "./Containers";

import "./index.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient-bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
