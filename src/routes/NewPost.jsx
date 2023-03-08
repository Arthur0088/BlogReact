import React from 'react'
import './NewPost.css'
import blogFetch from '../axios/config'

import { useState } from 'react'

import { useNavigate } from 'react-router-dom' 

const NewPost = () => {

  const navigate = useNavigate()

  const[title, setTitle] = useState()
  const[body, setBody] = useState()

  const createPost = async(e)=>{
    e.preventDefault()

    const post = {title,body,userId:1}
    await blogFetch.post('/posts',{
      body:post
    })
    navigate("/")
    alert("sucesso")
  }

  return (
    <div className="new-post">
      <h2>Criar novo post</h2>
      <form onSubmit={(e)=>createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input type="text" name='title' id='title' placeholder='Digite o título' onChange={(e)=>setTitle(e.target.value)}></input>
        </div>
        <div className="form-control">
          <label htmlFor="body">Texto:</label>
          <textarea name='body' id='body' placeholder='Digite o título'onChange={(e)=>setBody(e.target.value)}></textarea>
        </div>
        <input type="submit" value="Criar novo post" className='btn'/>
      </form >
    </div>
    )
}

export default NewPost