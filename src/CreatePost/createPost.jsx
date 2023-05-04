import React from "react";
import "./crposr.css"
import "./../App.css"
import {useSelector} from "react-redux";
import {selectIsAuth} from "../redux/slices/authSlice";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import SimpleMDE from 'react-simplemde-editor'
import "easymde/dist/easymde.min.css"
import axios from "../axios";

const CreatePost = () => {

    const params = useParams()
    const navigete = useNavigate()
    const isAuth = useSelector(selectIsAuth)
    const [value, setValue] = React.useState('')
    const [title, setTitle] = React.useState('')
    const [imageUrl, setImageUrl] = React.useState('')
    const inputFileRef = React.useRef(null)

    const localId = params.id

    const onChange = React.useCallback((value) => {
        setValue(value)
    },[])

    const options = React.useMemo(
        () => ({
            spellChecker: true,
            maxHeight: '400px',
            autoFocus: true,
            placeholder: "Введите текст ...",
            status: false,
            autoSave: {
                enabled: true,
                delay: 1000,
            }
        } ),
        []
    )

    const handleChangeFile = async (event) => {
        try {
            const formData = new FormData();
            const file = event.target.files[0];
            formData.append("image", file);
            const { data } = await axios.post("/upload", formData)
            setImageUrl(data.url)
        } catch (err) {
            console.log(err)
        }
    }

    const RemoveImage = () => {
        setImageUrl('')
    }

    let imageStyle = {
        backgroundImage: `url(${imageUrl? "https://agropark-vavilov-sar.onrender.com"+imageUrl: "black"})`,
        backgroundPosition: "center",
        width: "100%",
        height: `${imageUrl? "300px": "0"}`,
        marginBottom: '40px',
    }

    const onSubmit = async () => {
        try {

            const filed = {
                title: title,
                text: value,
                imageURL: imageUrl,
                tags: [],
            }
            const {data} = !!localId?
                await axios.patch(`/news/${localId}`, filed) :
                await axios.post("/news", filed)
            const id = localId? localId : data._id
            navigete(`/news/${id}`)

        } catch (err) {

        }
    }

    React.useEffect(() => {
        if (localId) {
            axios.get(`/news/${localId}`).then(res => {
                setTitle(res.data.title)
                setValue(res.data.text)
                setImageUrl(res.data.imageURL)
            })
        }
    },[localId])



    if(!isAuth) {
        return <Navigate to="/" />;
    }


    return (
        <div className="createPost">
            <div className="wrapper createPost-container">
                    <div className="file-container">
                        <div className="image-container" style={imageStyle}></div>
                        <div className="news-button startaps-link" onClick={() => inputFileRef.current.click()}>Добавить картинку</div>
                        {imageUrl? <div className="news-button startaps-link remove" onClick={RemoveImage}>Удилить</div>: null}
                        <input ref={inputFileRef} type="file" id="file"
                               className="file" name="file"
                               required={true}
                               onChange={handleChangeFile} />
                    </div>
                    <div className="title-container">
                        <input type="text" name="title"
                               className="title-input"
                               placeholder="Заголовок страницы"
                               required={true} value={title}
                               onChange={e => {setTitle(e.target.value)}}/>
                    </div>
                    <div className="text-input-container">

                        <SimpleMDE className="text" value={value} options={options} onChange={onChange}/>
                    </div>
                <button onClick={onSubmit} className="news-button startaps-link button-submit" >{!!localId? "Сохранить": "Опубликовать"}</button>
            </div>
        </div>
    )
}

export default CreatePost