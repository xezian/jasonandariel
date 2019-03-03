import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Where = () => (
  <Layout>
    <SEO title="RSVP" />
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        width: `60%`,
        maxWidth: `80vw`,
        textAlign: `center`,
      }}
    >
      <h1>Where?</h1>
      <p>
        &quot;OK, I got it. Y&apos;allr marryin up in Westhampster, VT. So where
        is that exactly?&quot;
      </p>
      <p>
        ~<br />
        <a
          href="https://www.google.com/maps/place/264+Thayer+Rd,+Westminster,+VT+05158/@43.120258,-72.4931177,17z"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: `inherit` }}
        >
          264 Thayer Rd.,
          <br /> Westminster, VT
        </a>
        <br />~
        <br />
        ...can best be reached by automobile, from one of several possible
        points of connection.
      </p>
      <ul>
        <details style={{ width: `100%` }}>
          <summary
            style={{
              display: `flex`,
              flexDirection: `row`,
              justifyContent: `space-around`,
            }}
          >
            <h3>By Aeroplane</h3>
          </summary>
          <hr />
          <p>
            If you&apos;re travelling by Aeroplane, from a faraway distance, the
            easiest airport to access us by will be:
          </p>
          <li>
            Bradley Interational Airport (Hartford, CT), Airport Code
            &quot;BDL&quot;
          </li>

          <h4>Other Airports</h4>
          <li>
            Boston Logan International Airport (Boston, MA), Airport Code
            &quot;BOS&quot;
          </li>
          <li>
            Manchester-Boston Regional Airport (Manchester, NH), Airport Code
            &quot;MHT&quot;
          </li>
          <hr />
        </details>
      </ul>
      <ul>
        <details style={{ width: `100%` }}>
          <summary
            style={{
              display: `flex`,
              flexDirection: `row`,
              justifyContent: `space-around`,
            }}
          >
            <h3>By Train</h3>
          </summary>
          <hr />
          <p>
            There are Train Stations with Amtrak service in Bellows Falls, VT
            and Brattleboro, VT. The train arrives at 5:26pm so this is maybe
            only a good option for those planning to arrive in town the day
            before, who are staying close to Bellows Falls, or Brattleboro. You
            will need to arrange transportation from the Train Station to
            wherever you are staying.
          </p>
        </details>
      </ul>
      <ul>
        <details style={{ width: `100%` }}>
          <summary
            style={{
              display: `flex`,
              flexDirection: `row`,
              justifyContent: `space-around`,
            }}
          >
            <h3>By Automobile</h3>
          </summary>
          <hr />
          <p>
            Please refer to the{' '}
            <a
              href="https://www.google.com/maps/place/264+Thayer+Rd,+Westminster,+VT+05158/@43.120258,-72.4931177,17z"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: `inherit` }}
            >
              Google Maps
            </a>{' '}
            or similar service for directions to the loaction. Be prepared to
            spend a few mintues on a steep, windy old unpaved road to finally
            reach the site. The road is maintained and should be in great
            condition at the time, and we will take care to place a few colorful
            arrows to help you feel confident you are on track.
          </p>
        </details>
      </ul>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Where
