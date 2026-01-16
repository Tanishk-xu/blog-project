import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Blogs.css";

export default function Blogs() {

  const navigate = useNavigate();

  const defaultBlogs = [
    { id: 1, title: "My Lifestyle Journey", desc: "Improve myself daily", likes: 0, img:"https://source.unsplash.com/400x250/?life" },
    { id: 2, title: "Learning React", desc: "React step by step", likes: 0, img:"https://source.unsplash.com/400x250/?code" },
    { id: 3, title: "Introduction to AI", desc: "What is AI?", likes: 0, img:"https://source.unsplash.com/400x250/?ai" }
  ];

  const [blogs, setBlogs] = useState([]);
  const [dark, setDark] = useState(false);
  const [likedBlogs, setLikedBlogs] = useState(
    JSON.parse(localStorage.getItem("likedBlogs")) || []
  );

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("blogsData"));
    if (saved && saved.length > 0) setBlogs(saved);
    else setBlogs(defaultBlogs);
  }, []);

  useEffect(() => {
    localStorage.setItem("blogsData", JSON.stringify(blogs));
  }, [blogs]);

  const handleRead = (id) => {
    navigate(`/blog/${id}`);
  };

  const likeBlog = (id) => {

    if (likedBlogs.includes(id)) {
      alert("You already liked this blog!");
      return;
    }

    const updated = blogs.map(b =>
      b.id === id ? { ...b, likes: b.likes + 1 } : b
    );

    setBlogs(updated);

    const newLiked = [...likedBlogs, id];
    setLikedBlogs(newLiked);
    localStorage.setItem("likedBlogs", JSON.stringify(newLiked));
  };

  const deleteBlog = (id) => {
    if (window.confirm("Delete this blog?")) {
      setBlogs(blogs.filter(b => b.id !== id));
    }
  };

  return (
    <div className={dark ? "dark" : "light"}>

      <div className="top-bar">
        <h2>🚀 CodeWithTanishk Blogs</h2>

        <button
          onClick={() => setDark(!dark)}
          className="mode-btn"
        >
          {dark ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>

      <div className="grid">

        {blogs.map(blog => (
          <div key={blog.id} className="card animate">

            <img src={blog.img} alt="blog" />

            <span className="badge">
              {blog.likes > 2 ? "🔥 Popular" : "🆕 New"}
            </span>

            <h3>{blog.title}</h3>
            <p>{blog.desc}</p>

            <div className="btn-row">

              <button className="read"
                onClick={() => handleRead(blog.id)}>
                Read
              </button>

              <button className="like"
                onClick={() => likeBlog(blog.id)}>
                ❤️ {blog.likes}
              </button>

              <button className="del"
                onClick={() => deleteBlog(blog.id)}>
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>

      <footer>
        © 2026 | Made by Tanishk
      </footer>

    </div>
  );
}