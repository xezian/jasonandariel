import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hello, friends</h1>
    <p>We will celebrate our wedding and begin our marriage this summer,</p>
    <p>June 29, 2019</p>
    <p>At Jason's mother's home in Westminster, VT:</p>
    <p style={{ textAlign: `center` }}>
      316 Thayer Rd.
      <br />
      Westminster, VT
      <br />
      05158
      <br />
    </p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
