import React, {useState} from 'react';
import './App.css';
import Header from './components/heder/header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './components/about/about';
import AuthMe from './components/auth/authMe';
import Contacts from './components/contacts/contacts';
import Servicer from './components/services/services';
import Startaps from './components/startaps/startaps';
import Footer from "./components/footer/footer";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "./redux/slices/posts";
import News from "./components/news/News";
import OnePost from "./components/OnePost/OnePost";
import {fetchAuthMe} from "./redux/slices/authSlice";
import CreatePost from "./CreatePost/createPost";


function AppContainer() {


    const dispatch = useDispatch()
    const {posts} = useSelector(state => state.posts)


    // console.log(allPosts.reverse())

    React.useEffect(() => {
        dispatch(fetchPosts())
        dispatch(fetchAuthMe())
    }, [dispatch])

    let [backIn, setBackIN] = useState(0)
window.addEventListener('scroll', () => { 
  setBackIN(window.scrollY);
})

let appStyleBack = {
  backgroundPosition: `-50px ${-backIn*0.2-1200}px`, 
  minHeight: '100vh',
  position: 'relative',
  padding: '0 0 100px'
}

  return (
    <div className="App" style={appStyleBack}>

      <BrowserRouter>
      <header className="header">
        <Header/>
      </header>
      <Routes>
        <Route path="/" element={<About posts={posts}/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/news" element={<News posts={posts}/>}/>
        <Route path="/news/:id" element={<OnePost />}/>
        <Route path="/services" element={<Servicer/>}/>
        <Route path="/startaps" element={<Startaps/>}/>
        <Route path="/auth/login/tolko-dlya-dimasika" element={<AuthMe/>}/>
        <Route path="/create-post" element={<CreatePost/>}/>
        <Route path="/news/:id/edit" element={<CreatePost/>}/>
      </Routes>
      <footer>
        <Footer/>
      </footer>
      </BrowserRouter>
    </div>
  );
}

export default AppContainer;
