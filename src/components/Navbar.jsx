import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{
      background: "#111",
      padding: "12px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>

      <h3 style={{ color: "#00ff99" }}>
        CodeWithTanishk
      </h3>

      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/blogs" style={linkStyle}>Blogs</Link>
        <Link to="/create" style={linkStyle}>Create</Link>
      </div>

    </div>
  );
}

const linkStyle = {
  color: "white",
  margin: "0 12px",
  textDecoration: "none",
  fontWeight: "bold"
};