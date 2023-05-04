import React from "react";
import "./../../App.css"
import "./news.css"
import NewsItem from "./newsItem";
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuth} from "../../redux/slices/authSlice";
import {NavLink} from "react-router-dom";
import {fetchRemovePost} from "../../redux/slices/posts";


const News = (p) => {


    const posts = [...p.posts.items]
    const isLoading = p.posts.status === "loading"

    const dispatch = useDispatch()

    const onClickRemove = (e) => {
        let id = e.target.id
        if (window.confirm("Вы уверены что хотите удалить пост?")) {
            dispatch(fetchRemovePost(id))
        }
    }


    const isAuth = useSelector(selectIsAuth)

    return (
        <div className="news">
            <div className="wrapper news-container">
                <h2 className="news-title">Новости</h2>
                {isAuth?<NavLink to="/create-post" className='post-create-but'>
                    <button className="news-button startaps-link ">Создать пост</button>
                </NavLink>: ''}

                <div className="news-items">
                    {isLoading ? '': posts.reverse().map((a, i) => <div className="newItem" key={i}>
                        {isAuth?<div>
                                    <button className="button-delete" id={a._id} onClick={onClickRemove} >&#9773;</button>
                                    <NavLink to={`/news/${a._id}/edit`}>
                                        <button className="button-delete bitton-put" id={a._id} >&#9998;</button>
                                    </NavLink>
                                </div> :null}
                        <NewsItem posts={a}/>
                    </div> )}
                </div>
            </div>
        </div>
    )
}

export default News