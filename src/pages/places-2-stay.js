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
      <p>
        The wedding itself will be held at{' '}
        <a
          href="https://www.google.com/maps/place/316+Thayer+Rd,+Westminster,+VT+05158/@43.121548,-72.4934147,17z"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: `inherit` }}
        >
          Jason's mother's house in Westminster, VT
        </a>
        , but there are many neighboring towns and villages that would still put
        you within a very reasonable driving distance of the event.
      </p>
      <ul
        style={{
          textAlign: `center`,
          maxWidth: `40vw`,
          margin: `0 auto`,
          listStyleType: `square`,
        }}
      >
        <li>
          15 to 25 minute drive:
          <ul>
            Saxton's River, VT <br />
            Westminster West, VT
            <br /> Bellows Falls, VT
            <br />
            Grafton, VT
            <br /> Rockingham, VT
            <br /> Walpole, NH
          </ul>
        </li>
        <li>
          25 to 40 minute drive:
          <ul>
            Putney, VT
            <br /> Brattleboro, VT
            <br />
            Chester, VT
            <br />
            Springfield, VT
            <br /> Keene, NH
          </ul>
        </li>
        <hr />
      </ul>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default PlacesToStay
