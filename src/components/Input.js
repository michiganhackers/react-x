const Input = ({ count, setCount }) => {

  return (
    <div className="inputContainer">
      <input type="text" placeholder="What is happening!?" className="postInput" />
      <button className="postButton">Post</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}
export default Input
