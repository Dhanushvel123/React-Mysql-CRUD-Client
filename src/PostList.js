import React,{useEffect,useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PostList = () => {
    const [post,setPost]=useState([])

    useEffect(()=>{
        axios.get('https://react-mysql-crud-server.onrender.com/getpost')
       .then(response=>setPost(response.data))
       
    },[])
    const handleDelete=async(id)=>{
        await axios.delete(`https://react-mysql-crud-server.onrender.com/deletepost/${id}`)
        setPost(post.filter(post=>post.id!==id))
    }
    
return(
    <div className="container mt-5">
        <h2>PostList</h2>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {post.map((post)=>(
                    <tr key={post.id}>
                    <td>{post.id}</td> 
                    <td>{post.name}</td>
                    <td>{post.content}</td>
                    <td>
                    <Link to={`/edit/${post.id}`} className="btn btn-warning btn-sm mr-2">Edit</Link>
                    <button onClick={()=>handleDelete(post.id)} className="btn btn-danger btn-sm">Delete</button>
                    </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
)
}
export default PostList;
