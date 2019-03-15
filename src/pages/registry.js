import React from 'react'
import { Link } from 'gatsby'

import Checkout from '../components/Checkout.js'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Registry = () => (
  <Layout>
    <SEO title="Registry" />
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        textAlign: `center`,
        maxWidth: `80vw`,
      }}
    >
      <h1>Registry</h1>
      <p>
        &quot;I&apos;d sure like to getch&apos;all somethin&apos; nice for yer
        life together, but where to even begin?&quot;
      </p>
      <p>
        Well some luck is with you dare we say. We are working on putting
        together a few options here for giving you the opportunity to do exactly
        that!
      </p>
      <h3>Some options</h3>
      <ul
        style={{
          maxWidth: `100%`,
          margin: `0 auto`,
          listStyleType: `square`,
        }}
      >
        <hr />
        <li>
          <h4>
            <a
              style={{ fontFamily: `inherit` }}
              href="https://www.amazon.com/wedding/share/jasonandariel"
              target="_blank"
              rel="noopener noreferrer"
            >
              Amazon Registry
            </a>
          </h4>
        </li>
        <hr />
        <li
          style={{
            width: `100%`,
          }}
        >
          <details>
            <summary
              style={{
                fontFamily: `'Major Mono Display', monospace`,
              }}
            >
              Wedding Gift Fund
            </summary>
            <div
              style={{
                display: `flex`,
                flexDirection: `column`,
                alignItems: `center`,
              }}
            >
              <br />
              <p>
                We plan to use any financial gifts towards a trip together
                someplace exciting sometime in the year following our wedding.
                We have discussed Patagonia, Japan, New Zealand, or Costa Rica
                as possibilities. With a shared love of the Earth and adventure,
                we are making it a part of our commitment to one other that we
                will put time aside and travel somewhere together on a
                honeymoon. Your gift can simply be a contribution to the fund
                that makes this possible. We have made it convenient and simple
                for you to do so.
              </p>
              <p>Begin by clicking the word &apos;Contribute&apos; below.</p>
              <details
                style={{ backgroundColor: `inherit`, border: `inherit` }}
              >
                <summary>Contribute</summary>

                <Checkout />
              </details>
            </div>
          </details>
        </li>
        <hr />
      </ul>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Registry
