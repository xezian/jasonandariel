import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import RSVP from '../components/RSVP'
import SEO from '../components/seo'

const RSVPpage = () => (
  <Layout>
    <SEO title="RSVP" />
    <div style={{ textAlign: `center`, maxWidth: `80vw` }}>
      <h1>RSVP</h1>
      <p>Répondez s&apos;il vous plaît</p>
      <p>
        The kindness of your response is most respectfully requested by the
        first of June, 2019
      </p>
      <RSVP />
      <ul style={{ maxWidth: `30vw`, margin: `0 auto`, listStyleType: `none` }}>
        <hr />
        <li>♡</li>
        <hr />
      </ul>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default RSVPpage
