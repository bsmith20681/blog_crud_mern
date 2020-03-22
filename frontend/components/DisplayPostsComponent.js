import {useState, useEffect} from 'react'
import axios from 'axios'
import {getCookie, isAuth} from '../actions/auth'

const DisplayPostsComponent = () => {
  const [posts, setPosts] = useState([])
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

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
        {posts.map((post,i) =>
          <div key={post._id}>
            <h1>{post.title}</h1>
            <p>{post.content.substring(0,100)}</p>
            <p>published on: {new Date(post.createAt).toLocaleString()}</p>
          </div>
        )}
        </div>
      </div>
    </div>
  )
}

export default DisplayPostsComponent
