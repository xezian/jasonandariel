import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Posts = () => (
  <Layout>
    <SEO title="Posts" />
    <div style={{ textAlign: `center`, maxWidth: `80vw` }}>
      <h1>Posts</h1>
      <p>
        Here&apos;s the place to find news and updates and whimsical whatever we
        wanna share type anything about the wedding over the months leading up
        to and following the event.
      </p>
      <p>For the time-being this is a &quot;coming soon&quot; section</p>
      <h3>♡</h3>
      <ul style={{ maxWidth: `30vw`, margin: `0 auto`, listStyleType: `none` }}>
        <hr />
        <li>♡</li>
        <hr />
      </ul>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Posts
