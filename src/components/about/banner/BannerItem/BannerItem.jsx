import React from "react";
import "./../../../../App.css"
import "./bannerItem.css"
import {NavLink} from "react-router-dom";

const BannerItem = (pr) => {

        const imageStyle = {
            backgroundImage: `url(${pr.item.imageURL? "https://agropark-vavilov-sar.onrender.com"+pr.item.imageURL: null})`,
            backgroundPosition: "center",
            backgroundSize: 'cover',
        }

    return (
        <div className="BannerItem" style={imageStyle}>
            <div className="wrapper bannerItem-container">
                <div className="banner-info">
                    <h2 className="banner-title">{pr.item.title}</h2>
                    <NavLink to={`/news/${pr.item._id}`}>
                        <button className="banner-button startaps-link">Перейти</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default BannerItem