import Head from 'next/head'
import Link from 'next/link'
import {withRouter} from 'next/router'
import Layout from '../../components/Layout'
import {useState} from 'react'
import {singlePost} from '../../actions/auth'
import { API } from '../../config'

const SinglePost = ({post, router}) => {
  return(
    <React.Fragment>
      <Layout>
        <main>
          <article>
            <div class="container">
              <div class="row">
                <div>
                  <h1>{post.title}</h1>
                  <p>{post.content}</p>
                </div>
              </div>
            </div>
          </article>
        </main>
      </Layout>
    </React.Fragment>
  )
}

SinglePost.getInitialProps = ({query}) => {
  return singlePost(query.slug).then(data => {
    if(data.error) {
      console.log(data.error)
    } else {
      return {post: data}
    }
  })
}

export default withRouter(SinglePost)
