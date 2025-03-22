import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";

const CreatePost=()=>{
    const [name,setName]=useState("");
    const [content,setContent]=useState("");
    const navigate=useNavigate();
    // Data inserting...
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('https://react-mysql-crud-server.onrender.com/addpost',{name,content})
        .then((response)=>{
            console.log(response.data);
            navigate("/"); 
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    return(
        <div className="container mt-5">
                <h1>This is CreatePost</h1>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                            <h3>Create a NewPost</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" className="form-control" placeholder="Enter Your Name" required
                                        value={name} onChange={(e)=>setName(e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Content</label>
                                        <textarea className="form-control" placeholder="Enter The Content" required
                                        value={content} onChange={(e)=>setContent(e.target.value)}/>
                                    </div>
                                    <br/>
                                    <button type="submit" className="btn btn-outline-primary">CreatePost</button>
                                </form>

                            </div>
                        </div>

                    </div>

                </div>
        </div>
    )
}
export default CreatePost;