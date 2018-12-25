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
      <p>
        316 Thayer Rd.
        <br />
        Westminster, VT
        <br />
        05158
        <br />
      </p>
      <p>
        <span style={{ color: `red` }}>♡</span>,
        <br /> Jason & Ariel
      </p>
    </div>
  </Layout>
)

export default Home
