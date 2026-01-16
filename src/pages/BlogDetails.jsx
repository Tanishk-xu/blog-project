import { useParams, useNavigate } from "react-router-dom";
import "./BlogDetails.css";

export default function BlogDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const blogs = JSON.parse(localStorage.getItem("blogsData")) || [];

  const blog = blogs.find(b => b.id == id);

  if (!blog) {
    return <h2 style={{ padding: "30px" }}>Blog not found</h2>;
  }

  return (
    <div className="detail-page">

      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="detail-card">

        {blog.img && (
          <img src={blog.img} alt="blog" className="detail-img" />
        )}

        <h1>{blog.title}</h1>

        <p className="detail-text">
          {blog.desc}
        </p>

        <div className="detail-actions">
          <span>❤️ {blog.likes}</span>
        </div>

      </div>
    </div>
  );
}