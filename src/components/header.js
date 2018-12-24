import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import cutout from '../images/desert.svg'

const Header = ({ siteTitle, eventStart }) => (
  <>
    <div
      style={{
        background: `#123456`,
        height: `70vh`,
      }}
    >
      <div
        style={{
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
              fontWeight: `lighter`,
              fontSize: `50px`,
              whiteSpace: `nowrap`,
              fontFamily: `'Dancing Script', cursive`,
            }}
          >
            {siteTitle}
            <div
              style={{
                maxWidth: `400px`,
                marginBottom: `1.45rem`,
                marginTop: `1.45rem`,
                marginLeft: `auto`,
                marginRight: `auto`,
              }}
            >
              <img src={cutout} alt="jasonandariel" />
            </div>
          </Link>
        </h1>
      </div>
    </div>
    <h3
      style={{
        textAlign: `center`,
      }}
    >
      {eventStart}
    </h3>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
