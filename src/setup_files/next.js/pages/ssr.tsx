import React, { useEffect, useState } from 'react'
import axios from 'axios'

const getTodos = async () => {
  let data = []
  await axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
    data = res.data
  })
  return data
}

interface Post {
  completed: boolean
  id: number
  title: string
  userId: number
}

type Posts = Post[]

const App = () => {
  const [posts, setPosts] = useState<Posts>([])

  useEffect(() => {
    getTodos().then((res: Posts) => {
      console.log(res[0])
      setPosts([...res])
    })
  }, [])

  return (
    <div>
      <p>Welcome to next.js, tsssx with nplate!</p>
      <ul>
        <li>
          <a href="/">SSG</a>
        </li>
        <li>
          <a href="/ssr">SSR Sample</a>
        </li>
      </ul>
      <ul>
        {posts.map((post, i) => (
          <li key={i}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
