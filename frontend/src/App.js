import React, { useEffect } from'react'
import NavBar from "./componentz/NavBar/nav";
import Footer from "./componentz/footer/Footer"
import Home from "../src/componentz/Home/Home.jsx";
import About from "./componentz/about/About";
import Signup from './componentz/signup/Signup';
import Signin from './componentz/signup/signin';
import Todo from "./componentz/todo/Todo";
import { useDispatch } from 'react-redux';
import {authActions}from "./store";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
const App=()=>{
  const dispatch=useDispatch();
  useEffect(()=>{
   const id=sessionStorage.getItem("id");
   if(id){ dispatch(authActions.login());}
  })
  return (
    <div>
      <Router>
      <NavBar/>
      <Routes>
      <Route exact path="/" element= {<Home/>}/>
      <Route  path="/about" element= {<About/>}/>
      <Route  path="/todo" element= {<Todo/>}/>
     <Route  path="/signup" element= {<Signup/>}/>
      <Route  path="/signin" element= {<Signin/>}/>
      </Routes>
      </Router>
    {/* <Home/>
    <About/> */}
    <Footer/>
    </div>
  )
}
export default App;
