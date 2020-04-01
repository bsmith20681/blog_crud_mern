import {useState, useEffect} from 'react'
import axios from 'axios'
import {getCookie, isAuth, removeBlog } from '../actions/auth'
import Link from 'next/link'

const DisplayPostsComponent = () => {
  const [posts, setPosts] = useState([])
  const [message, setMessage] = useState('')
  const token = getCookie('token')

  const fetchPosts = () => {
    axios.get('http://localhost:8000/api/post', {
      headers : {
        authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      console.log(response.data)
      setPosts(response.data)
    })
    .catch(error => alert(error))
  }

  const deletePost = (slug) => {
    removeBlog(slug, token).then(data => {
      if(data.error) {
        console.log(data.error)
      } else {
        setMessage(data.message)
      }
    })
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div class="container">
      <div class="row">
        {posts.map((post,i) =>
          <React.Fragment>
            <div class="col-lg-8 col-md-8 col-sm-12">
              <div key={post._id}>
                <Link href={`/post/${post.slug}`}><h1>{post.title}</h1></Link>
                <p>{post.content.substring(0,100)}</p>
                <p>published on: {new Date(post.createAt).toLocaleString()}</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
              <Link href={`/post/update/${post.slug}`}><button class="btn btn-sm btn-outline-warning">Update</button></Link>
              <button onClick={() => deletePost(post.slug)} class="btn btn-sm btn-outline-danger">Delete</button>
            </div>
          </ React.Fragment>
        )}
      </div>
    </div>
  )
}

export default DisplayPostsComponent
