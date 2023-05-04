import React from "react";
import "./item.css"

const Item = (props) => {
  return (
    <div className="item-container">
      <div className="image-item-block" style={{backgroundImage: `url(${props.prop.images[0]})`}} key={props.prop.id}></div>
      <div className="text-block">
        <h3 className="pr-block-title">{props.prop.title}</h3>
        <p className="text-info-block">{props.prop.text}</p>
      </div>
      <div className="image-items-block">
        <div className="line-image-item" style={{backgroundImage: `url(${props.prop.images[1]})`}}></div>
        <div className="line-image-item" style={{backgroundImage: `url(${props.prop.images[2]})`}}></div>
        <div className="line-image-item" style={{backgroundImage: `url(${props.prop.images[0]})`}}></div>
        <div className="line-image-item" style={{backgroundImage: `url(${props.prop.images[3]})`}}></div>
      </div>
      </div>
  )
}

export default Item