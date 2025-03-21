import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import NavigationBar from "./NavBar";
import CreatePost from "./CreatePost";
import EditPost from "./EditPost";
import  PostList from "./PostList";

const App=()=>{
  return(
    <Router>
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
    </Router>
  );
}

export default App;