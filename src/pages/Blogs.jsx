import { Link } from "react-router-dom";

export default function Blogs() {

  const blogs = [
    {
      id: 1,
      title: "My Lifestyle Journey",
    },
    {
      id: 2,
      title: "Learning React",
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Blogs</h2>

      {blogs.map((blog) => (
        <div 
          key={blog.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px"
          }}
        >
          <h3>{blog.title}</h3>
          <Link to={`/blogs/${blog.id}`}>Read</Link>
        </div>
      ))}
    </div>
  );
}