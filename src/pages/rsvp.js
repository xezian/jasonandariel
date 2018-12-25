import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const RSVP = () => (
  <Layout>
    <SEO title="RSVP" />
    <div style={{ textAlign: `center`, maxWidth: `80vw` }}>
      <h1>RSVP</h1>
      <p>
        "I made a decision about y'all's wedding, but where can I RSVP at
        though?"
      </p>
      <p>
        This will be the RSVP portal through which we will allow our invited
        guests to RSVP electronically. Don't worry, we will also still accept
        your RSVP via the traditional US mail delivery method. Neither option
        exists until our official invitations will go out around 2 months in
        advance of the date. For now, pals, just hold your little horsies.
      </p>
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

export default RSVP
