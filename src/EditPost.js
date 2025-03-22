import React ,{useState,useEffect} from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";

const EditPost=()=>{
    const [name, setName]=useState("");
    const [content,setContent]=useState("");
    const {id}=useParams();
    const navigate=useNavigate();

    useEffect(()=>{
        const fetchPost=async()=>{
            try{ 
     const res=await axios.get(`https://react-mysql-crud-server.onrender.com/getpost/${id}`)
         setName(res.data[0].name);
         setContent(res.data[0].content);
            }catch(error)
            {
                console.log(error);
            }
        }
            fetchPost();
        },[id])
        
        const handleSubmit=async(e)=>{
            e.preventDefault();
            try{
                await axios.put(`https://react-mysql-crud-server.onrender.com/updatepost/${id}`,{name,content})
                navigate("/");
            }
            catch(error){
                console.log(error);
            }
        }
        return(
            <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <h3>Edit Post</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="title">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        placeholder="Enter title"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="body">Content</label>
                                    <textarea
                                        className="form-control"
                                        id="content"
                                        rows="5"
                                        placeholder="Enter body"
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary mt-3">Update Post</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        )
    }

export default EditPost;    