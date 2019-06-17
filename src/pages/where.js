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
        **GPS USERS: FOLLOW DIRECTIONS TO DAVIDSON HILL, NOT SKI BOWL HILL**
        <br />
        <br />
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
        <details open style={{ width: `100%` }}>
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
            Here is the address on:{' '}
            <a
              href="https://www.google.com/maps/place/264+Thayer+Rd,+Westminster,+VT+05158/@43.120258,-72.4931177,17z"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: `inherit` }}
            >
              Google Maps.
            </a>
            <br />
            <br />
            If you are using a GPS to find your way to 264 Thayer Road,
            Westminster VT (Lisai Ridge), be sure to follow directions up
            Davidson Hill Road and NOT Ski Bowl Hill!!
            <br />
            <br />
            Directions from Interstate 91 Northbound, Exit 5:
            <br />
            <ul>
              <li>Turn left at T-intersectio.n</li>
              <li>Turn right onto Back Westminster Rd. Drive 3 miles to end</li>
              <li>Turn left onto Rte 121. Drive 1/4 mile.</li>
              <li>
                Just beyond a tractor barn on the left, look for Davidson Hill
                Road, a dirt road that forks off the main road. Look for the
                J&amp;A sign! The road going up the hill is narrow and windy.
              </li>
              <li>
                Take Davidson Hill Road up and up (a bit more than a mile). You
                will come to a fork (and another sign!).
              </li>
              <li>
                Bear right onto Thayer Rd. Go up one more small rise and you
                will see wedding signs again at the mailboxes.
              </li>
              <li>
                Turn right into #264 and follow the road to the top of the hill
                for parking.
              </li>
            </ul>
          </p>
        </details>
      </ul>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Where
