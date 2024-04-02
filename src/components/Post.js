export default function Post({ post }) {
  return (
    <div className="post">
      <h3>Username</h3>
      <p>{post.text}</p>
    </div>
  )
}
