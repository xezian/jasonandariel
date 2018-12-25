import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Registry = () => (
  <Layout>
    <SEO title="Registry" />
    <div style={{ textAlign: `center`, maxWidth: `80vw` }}>
      <h1>Registry</h1>
      <p>
        "I'd sure like to getch'all somethin' nice for yer life together, but
        where to even begin?"
      </p>
      <p>
        Well some luck is with you dare we say. We are working on putting
        together a few options here for giving you the opportunity to do exactly
        that!
      </p>
      <h3>Some options</h3>
      <p>
        * These options will transition to clickable links to the actual
        registries, as we create them.
      </p>
      <ul style={{ maxWidth: `30vw`, margin: `0 auto`, listStyleType: `none` }}>
        <hr />
        <li>
          <h4>Travel Fund</h4>
          for our Honeymoon in 2020
        </li>
        <li>
          <h4>Music Gear Registry</h4>
        </li>
        <li>
          <h4>Amazon Registry</h4>
        </li>
        <hr />
      </ul>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Registry
