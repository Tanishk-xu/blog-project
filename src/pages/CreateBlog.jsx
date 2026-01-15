import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateBlog() {

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCreate = () => {

    if (title === "" || content === "") {
      alert("Please fill all fields");
      return;
    }

    // Get old blogs
    const oldBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

    const newBlog = {
      id: Date.now(),
      title,
      content
    };

    oldBlogs.push(newBlog);

    localStorage.setItem("blogs", JSON.stringify(oldBlogs));

    alert("Blog created successfully!");

    navigate("/blogs");
  };

  return (
    <div style={{ padding: "20px" }}>

      <h2>Create Blog</h2>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter blog title"
        style={{ width: "100%", padding: "10px" }}
      />

      <br /><br />

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your blog here..."
        rows="6"
        style={{ width: "100%", padding: "10px" }}
      />

      <br /><br />

      <button
        onClick={handleCreate}
        style={{
          background: "#22c55e",
          color: "white",
          border: "none",
          padding: "10px 20px",
          cursor: "pointer"
        }}
      >
        Create
      </button>

    </div>
  );
}