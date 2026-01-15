import { Link } from "react-router-dom";

export default function BlogCard({blog}){
 return(
  <div className="card">
    <h3>{blog.title}</h3>

    <p>{blog.content.slice(0,70)}...</p>

    <Link 
      to={`/blogs/${blog.id}`} 
      style={{color:"#4ade80"}}
    >
      Read →
    </Link>
  </div>
 )
}