import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Home = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `wedding`,
        `Jason+Leo`,
        `Ariel+Anderson`,
        `application`,
        `react`,
        `gatsby`,
      ]}
    />
    <div style={{ textAlign: `center` }}>
      <h1>Hello, friends</h1>
      <p>We will celebrate our wedding and begin our marriage this summer,</p>
      <p>June 29, 2019</p>
      <p>At Jason's mother's home in Westminster, Vermont:</p>
      <a
        href="https://www.google.com/maps/place/264+Thayer+Rd,+Westminster,+VT+05158/@43.120258,-72.4931177,17z"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontFamily: `inherit` }}
      >
        <p>
          264 Thayer Rd.
          <br />
          Westminster, VT
          <br />
          05158
          <br />
        </p>
      </a>
      <p>
        <span style={{ color: `red` }}>♡</span>,
        <br /> Jason & Ariel
      </p>
    </div>
  </Layout>
)

export default Home
