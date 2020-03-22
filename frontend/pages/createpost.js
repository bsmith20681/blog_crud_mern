import Layout from '../components/Layout'
import Private from '../components/auth/Private'
import CreatePostComponent from '../components/CreatePostComponent'

const CreatePost = () => {
  return (
    <Layout>
      <Private>
        <CreatePostComponent />
      </Private>
    </Layout>
  )
}

export default CreatePost
