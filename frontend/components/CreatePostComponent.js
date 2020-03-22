import {useState} from 'react'
import axios from 'axios'

const CreatePostComponent = () => {

  const [state, setState] = useState({
    title: '',
    content: ''
  })

  const {title, content} = state

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post(`http://localhost:8000/api/post`,{title, content})
      .then(response => {

        setState({...state, title: '', content: ''})

        console.log(title, content)
      })
      .catch(error => {
        alert(error.response.data.error)
      })

  }

  const handleChange = (name) => (e) => {
    setState({...state, [name]: e.target.value})

  }

  const createPost = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="exampleFormControlInput1">Title</label>
          <input value={title} onChange={handleChange('title')} type="test" class="form-control" id="exampleFormControlInput1" placeholder="Enter your title here" />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Content</label>
          <textarea value={content} onChange={handleChange('content')} class="form-control" id="exampleFormControlTextarea1" rows="6" placeholder="Write your blog post here"></textarea>
        </div>
        <button class="btn btn-primary">Create Post</button>
      </form>
    )
  }

  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
          {createPost()}
        </div>
      </div>
    </div>
  )
}

export default CreatePostComponent
