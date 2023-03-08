import blogFetch from '../axios/config'
import { useState, useEffect } from 'react'
import React from 'react'

import "./Home.css"

const Home = () => {

  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    try {
      const res = await blogFetch.get("/posts")
      const data = res.data

      setPosts(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div>
      <h1>Posts</h1>
      {posts.length === 0 ? <p>Carregando...</p> : (
        posts.map((post)=>(
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  )}


export default Home