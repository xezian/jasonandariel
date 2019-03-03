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
      <p>
        &quot;I made a decision about y&apos;all&apos;s wedding, but where can I
        RSVP at though?&quot;
      </p>
      <p>
        This will be the RSVP portal through which we will allow our invited
        guests to RSVP electronically. Don&apos;t worry, we will also still
        accept your RSVP via the traditional US mail delivery method. Neither
        option exists until our official invitations will go out around 2 months
        in advance of the date. For now, pals, just hold your little horsies.
      </p>
      <RSVP />
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

export default RSVPpage
