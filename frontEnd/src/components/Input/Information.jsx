import React, { useState, useEffect } from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Service from "./Service";
import Skill from "./Skill";
function Information() {

  return (
    <div className="w-[1240px] h-screen mx-auto">
    <Home/>
    <About/>
    <Skill/>
    <Service/>
    <Contact/>
     
    </div>
  );
}
export default Information;