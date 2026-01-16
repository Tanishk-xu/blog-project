import { useState } from "react";

export default function CreateBlog() {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <div style={{ padding: "30px" }}>

      <h2>Create New Blog</h2>

      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "100%", padding: "10px", margin: "10px 0" }}
      />

      <textarea
        placeholder="Blog Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        style={{ width: "100%", padding: "10px", height: "100px" }}
      />

      <br />

      <button
        style={{
          background: "#22c55e",
          color: "white",
          border: "none",
          padding: "10px 20px",
          cursor: "pointer",
          marginTop: "10px"
        }}
      >
        Create
      </button>

    </div>
  );
}