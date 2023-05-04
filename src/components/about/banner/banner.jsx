import React from "react";
import "./bunner.css"
import "./../../../App.css"
import BannerItem from "./BannerItem/BannerItem";
import Preloader from "./preloader/preloader";

const Banner = (p) =>  {

    const posts = p.posts.items
    const isLoading = p.posts.status === "loading"


    let banTrans = {
      transform: `translateX(-${100/3}%) `,
      transition: "all 0.5s linear"
    }

    return (
      <div className="banner">
        <div className="banner-container" style={banTrans}>
          <div className="banner-image">1</div>
          <div className="banner-image">
              {isLoading ? <Preloader /> : <BannerItem item={isLoading ? '':posts[posts.length-1]}/>}
          </div>
          <div className="banner-image">3</div>
        </div>
        <div className=" banner-button-container" style={{display: "none"}}>
              <button className="perv button-carusel">&#8249;</button>
              <button className="next button-carusel">&#8250;</button>
            </div>
      </div>
    )
  }

export default Banner