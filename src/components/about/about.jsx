import React from "react";
import "./about.css"
import "./../../App.css"
import Banner from "./banner/banner"
import Projects from "./Project/project"
import Service from "./service/service"
import Partners from "./partners/partners"
import Intro from "./intro/intro"


const About = (p) => {
  return (
    <div className="about">
      <Banner posts={p.posts}/>
      <Intro />
      <Projects />
      <Service/>
      <Partners/>
    </div>
  )
}

export default About; 