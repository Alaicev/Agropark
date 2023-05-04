import React from "react";
import {NavLink} from "react-router-dom";
import ReactMarkdown from "react-markdown";


const NewsItem = (pr) => {



    let text = ''
    if (pr.posts.text.length > 150) {
        for (let y = 0; y < 150; y++) {
         text = text + pr.posts.text[y]
        }
    text = `${text}...`
    } else {
            text = pr.posts.text
        }
    let imageStyle = {
        backgroundImage: `url(${pr.posts.imageURL? "https://agropark-vavilov-sar.onrender.com"+pr.posts.imageURL: ""})`,
        backgroundPosition: "center",
        backgroundSize: 'cover',
    }


    return (
        <div className='newsItem'>
            <div className="newsImage" style={imageStyle}></div>
            <div className="newsItem-info">
                <h2 className="newsItem-title">{pr.posts.title}</h2>
                <ReactMarkdown children={text} className="one-post-title"/>
                <NavLink to={pr.posts._id}>
                    <button className="news-button startaps-link ">Перейти</button>
                </NavLink>
            </div>
        </div>
    )
}

export default NewsItem