import Layout from '../components/Layout'
import Link from 'next/link'

const Index = () => {
  return (
    <Layout>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">Create an account to see and write personal blog posts</h1>
            <Link href="/signup">
              <button class="btn btn-success text-center">Create an Account</button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Index;
