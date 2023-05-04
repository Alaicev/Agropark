import React from "react";
import {useParams} from "react-router-dom";
import axios from "../../axios";
import "./../../App.css"
import "./onePost.css"
import ReactMarkdown from "react-markdown";

const OnePost = () => {
    const {id} = useParams()
    const [data, setData] = React.useState()
    const [status, setStatus] = React.useState(true)



    React.useEffect( () => {
        axios.get(`/news/${id}`).then(res => {
            setData(res.data)
            setStatus(false)
        })
    }, [id])




    if (!status) {
        return (
            <div className="onePost">
                <div className="wrapper onePost-container">
                    <img className="onePost-image" src={data.imageURL? "https://agropark-vavilov-sar.onrender.com"+data.imageURL: null} alt=""/>
                    <div className="onePost-info">
                        <h2 className="one-post-title">{data.title}</h2>
                        <ReactMarkdown children={data.text} className="one-post-title"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default OnePost