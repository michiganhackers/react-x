import logo from './logo.svg';
import './App.css';

function Post({ post }) {
  return (
    <div>
      <h3>Username</h3>
      <p>{post.text}</p>
    </div>
  )
}

function App() {

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
    <div>
      {posts.map((post) => <Post post={post} />)}
    </div>
  );
}

export default App;
