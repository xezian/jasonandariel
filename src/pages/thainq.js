import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const RSVPpage = () => (
  <Layout>
    <SEO title="thainq" />
    <div style={{ textAlign: `center`, maxWidth: `80vw` }}>
      <h1>Thank you!</h1>
      <p>Thank you for submitting your RSVP</p>
      <p>It means a lot to us :)</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default RSVPpage
