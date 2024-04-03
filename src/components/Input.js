import { useState } from 'react'

const USERNAME = 'briantravis'

const Input = ({ setPosts }) => {

  const [text, setText] = useState('')

  return (
    <div className="inputContainer">
      <input type="text" placeholder="What is happening!?" className="postInput" value={text} onChange={(e) => setText(e.target.value)} />
      <button className="postButton">Post</button>
    </div>
  )
}
export default Input
