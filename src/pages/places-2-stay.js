import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const PlacesToStay = () => (
  <Layout>
    <SEO title="Places to Stay" />
    <div style={{ maxWidth: `80vw` }}>
      <h1>Places to Stay</h1>
      <p>"We'd love to attend y'all's wedding, but where will we stay?"</p>
      <p>
        If this is you, we understand. Southern Vermont is a new and unknown
        world to many, out of reach and out of the way for most, and
        accomodations with easy access to our chosen venue are not as familiar
        and abundant as those found in most cites.
      </p>
      <h3>Some options</h3>
      <ul
        style={{
          textAlign: `center`,
          maxWidth: `50vw`,
          margin: `0 auto`,
          listStyleType: `none`,
        }}
      >
        <hr />
        <li>
          <details>
            <summary style={{ fontFamily: `'Major Mono Display', monospace` }}>
              Airbnb
            </summary>
            <br />
            <form>
              from:
              <br />
              <input
                style={{ textAlign: `center` }}
                name="from"
                defaultValue="2019-06-28"
                type="date"
              />
              <br />
              to:
              <br />
              <input
                style={{ textAlign: `center` }}
                name="to"
                defaultValue="2019-07-01"
                type="date"
              />
              <br />
              <input name="adults" placeholder="# Adults" type="numeric" />
              <br />
              <input name="children" placeholder="# Children" type="numeric" />
            </form>
            <button
              onClick={() => {
                alert('sorry, not yet!')
              }}
            >
              See Listings
            </button>
            <br />
            <br />
            <hr />
          </details>
        </li>
        <li>
          <details>
            <summary style={{ fontFamily: `'Major Mono Display', monospace` }}>
              Hotels
            </summary>
            <br />
            <ul>
              <li>The Saxtons River Inn</li>
              <li>Harvest Barn Inn</li>
              <li>Copper Kettle B&B</li>
              <li>Hickory Ridge House</li>
              <li>Rodeway Inn</li>
            </ul>
            <hr />
          </details>
        </li>
        <li>
          <details>
            <summary style={{ fontFamily: `'Major Mono Display', monospace` }}>
              Camping
            </summary>
            <br />
            <p>
              For the adventurous and outdoorsy among you, there will be options
              for camping on the land where the wedding will be held. Please
              email Jason at{' '}
              <a href="mailto:jasonarnoldleo@gmail.com">
                jasonarnoldleo@gmail.com
              </a>{' '}
              so we can know who to expect.
            </p>
          </details>
        </li>
        <hr />
      </ul>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default PlacesToStay
