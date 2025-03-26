import React from "react";
import{HashRouter, Routes,Route } from "react-router-dom";
import NavigationBar from "./NavBar";
import CreatePost from "./CreatePost";
import EditPost from "./EditPost";
import  PostList from "./PostList";

const App=()=>{
  return(
    <HashRouter>
      <div>
      <NavigationBar/>
        <div className="container">
          <Routes>
            <Route path="/" element={<PostList/>}/>
            <Route path="/create" element={<CreatePost/>}/>
            <Route path="/edit/:id" element={<EditPost/>}/>
          </Routes>
        </div>  
      </div>
    </HashRouter>
  );
}

export default App;