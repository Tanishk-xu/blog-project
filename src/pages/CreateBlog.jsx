export default function CreateBlog() {
  return (
    <div className="container">
      <h2>Create Blog</h2>

      <input placeholder="Blog Title" />
      <textarea placeholder="Write your blog..."></textarea>

      <button>Create</button>
    </div>
  );
}