import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import AirbnbForm from '../components/AirbnbForm'
import SEO from '../components/seo'

const List = styled.ul`
  li {
    a {
      font-family: 'Josefin Slab', georgia, serif;
      color: rust;
    }
  }
`

const PlacesToStay = () => (
  <Layout>
    <SEO title="Places to Stay" />
    <div style={{ textAlign: `center`, maxWidth: `80vw` }}>
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
          maxWidth: `35vw`,
          margin: `0 auto`,
          listStyleType: `none`,
        }}
      >
        <hr />
        <li>
          <AirbnbForm />
        </li>
        <li>
          <details>
            <summary style={{ fontFamily: `'Major Mono Display', monospace` }}>
              Hotels
            </summary>
            <br />
            <List>
              <li>
                <a
                  href="https://www.saxtonsriverinn.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Saxtons River Inn
                </a>
              </li>
              <li>
                <a
                  href="https://www.saxtonsriverinn.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Harvest Barn Inn
                </a>
              </li>
              <li>
                <a
                  href="http://www.harvestbarninn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Copper Kettle B&B
                </a>
              </li>
              <li>
                <a
                  href="http://www.hickoryridgehouse.com/Site/Home.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hickory Ridge House
                </a>
              </li>
              <li>
                <a
                  href="https://www.booking.com/hotel/us/everyday-inn.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rodeway Inn
                </a>
              </li>
            </List>
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
