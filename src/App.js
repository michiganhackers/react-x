import { useState } from 'react'
import './App.css';
import Input from './components/Input'
import Post from './components/Post'

function App() {

  const [count, setCount] = useState(0)

  const posts = [
    {
      id: 0,
      username: 'brian',
      text: 'Weather is so good rn'
    },
    {
      id: 0,
      username: 'brian',
      text: 'Weather is bad'
    },
    {
      id: 0,
      username: 'brian',
      text: 'asdklfkjasldkfjalksdjf'
    },
    {
      id: 0,
      username: 'brian',
      text: '2o35462098345709283457'
    },
  ]

  return (
    <div className="appContainer">
      <div className="nav">
        <img className="logo" alt="logo" src="https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1712016000&semt=ais" />
      </div>
      <Input />
      <div className="postContainer">
        {posts.map((post) => <Post post={post} />)}
      </div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <p>{count}</p>
    </div>
  );
}

export default App;
