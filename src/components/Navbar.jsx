import { Link } from "react-router-dom";

export default function Navbar(){
 return(
  <nav>
    <h3 style={{color:"#4ade80"}}>CodeWithTanishk</h3>

    <div>
      <Link to="/">Home</Link>
      <Link to="/blogs">Blogs</Link>
      <Link to="/create">Create</Link>
    </div>
  </nav>
 )
}