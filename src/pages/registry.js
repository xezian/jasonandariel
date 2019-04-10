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
          <details open>
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
                For anyone inclined to gift in the form of cash, we have created
                a convenient, secure, and simple way to do so right here on our
                website:
              </p>
              <p>To open the form, click &apos;Contribute&apos; below.</p>
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
