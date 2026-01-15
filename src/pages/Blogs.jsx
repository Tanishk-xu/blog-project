import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Blogs() {

  const defaultBlogs = [
    { id: 1, title: "My Lifestyle Journey" },
    { id: 2, title: "Learning React" }
  ];

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs =
      JSON.parse(localStorage.getItem("blogs")) || [];

    setBlogs([...defaultBlogs, ...storedBlogs]);
  }, []);

  // DELETE FUNCTION
  const deleteBlog = (id) => {

    // default blogs protect
    if (id === 1 || id === 2) {
      alert("Default blogs cannot be deleted!");
      return;
    }

    const storedBlogs =
      JSON.parse(localStorage.getItem("blogs")) || [];

    const updated = storedBlogs.filter(
      (blog) => blog.id !== id
    );

    localStorage.setItem(
      "blogs",
      JSON.stringify(updated)
    );

    // refresh state
    setBlogs([...defaultBlogs, ...updated]);
  };

  return (
    <div style={{ padding: "20px" }}>

      <h2>All Blogs</h2>

      {blogs.map((blog) => (
        <div key={blog.id}
          style={{ marginBottom: "15px" }}>

          <h3>{blog.title}</h3>

          <Link to={`/blogs/${blog.id}`}>
            Read
          </Link>

          <button
            onClick={() => deleteBlog(blog.id)}
            style={{
              marginLeft: "10px",
              background: "red",
              color: "white",
              border: "none",
              padding: "5px 10px",
              cursor: "pointer"
            }}
          >
            Delete
          </button>

        </div>
      ))}
    </div>
  );
}