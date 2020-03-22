import Layout from '../components/Layout'
import Private from '../components/auth/Private'
import DisplayPostsComponent from '../components/DisplayPostsComponent'

const MyPosts = () => {
  return (
    <Layout>
      <Private>
        <DisplayPostsComponent />
      </Private>
    </Layout>
  )
}

export default MyPosts
