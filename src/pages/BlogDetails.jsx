import { useState, useEffect } from "react";

export default function BlogDetails() {

  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // Page load hone par check kare
  useEffect(() => {
    const savedLike = localStorage.getItem("liked");

    if (savedLike === "true") {
      setIsLiked(true);
      setLikes(1);
    }
  }, []);

  const handleLike = () => {
    if (isLiked) {
      alert("❌ You already liked this post!");
      return;
    }

    setLikes(1);
    setIsLiked(true);
    localStorage.setItem("liked", "true");
  };

  return (
    <div style={{ padding: "20px" }}>

      <h2>My Lifestyle Journey</h2>
      <p>This is my lifestyle blog</p>

      {/* LIKE BUTTON */}
      <button
        onClick={handleLike}
        style={{
          background: "#22c55e",
          color: "white",
          padding: "8px 15px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        ❤️ Like {likes}
      </button>

      <hr />

      <h3>Comments</h3>
      <input
        type="text"
        placeholder="Write comment..."
        style={{ padding: "6px", width: "200px" }}
      />
      <br /><br />
      <button style={{
        background: "#0ea5e9",
        color: "white",
        border: "none",
        padding: "6px 12px",
        borderRadius: "5px"
      }}>
        Post
      </button>

    </div>
  );
}