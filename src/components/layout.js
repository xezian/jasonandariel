import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Nav from './nav'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            eventStart
            bride
            groom
          }
        }
      }
    `}
    render={data => (
      <>
        <Header
          eventStart={data.site.siteMetadata.eventStart}
          bride={data.site.siteMetadata.bride}
          groom={data.site.siteMetadata.groom}
        />
        <div
          style={{
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `space-between`,
            alignItems: `center`,
            padding: `1.45rem 1.0875rem`,
            paddingTop: 0,
          }}
        >
          <Nav />
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
