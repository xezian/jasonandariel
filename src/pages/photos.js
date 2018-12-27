import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Photos = () => (
  <Layout>
    <SEO title="Photos" />
    <div style={{ textAlign: `center`, maxWidth: `80vw` }}>
      <h1>Photos</h1>
      <p>
        Here's where we'll begin sharing photographs once we have some to share!
      </p>
      <p>For the time-being this is a "coming soon" section</p>
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

export default Photos
