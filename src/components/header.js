import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Heart from './heart'
import cutout from '../images/desert.svg'

const Header = ({ bride, groom, eventStart }) => (
  <>
    <div
      style={{
        background: `#052f46`,
        height: `625px`,
      }}
    >
      <div
        style={{
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `#d1e6ef`,
              textAlign: `center`,
              textDecoration: `none`,
              fontWeight: `lighter`,
              fontSize: `50px`,
              whiteSpace: `nowrap`,
              fontFamily: `'Dancing Script', cursive`,
            }}
          >
            <p>
              {bride}
              <br />&<br />
              {groom}
            </p>
          </Link>
        </h1>
        <div
          style={{
            maxWidth: `400px`,
            marginBottom: `.1rem`,
            marginTop: `.2rem`,
            marginLeft: `auto`,
            marginRight: `auto`,
          }}
        >
          <img src={cutout} alt="jasonandariel" />
        </div>
        <h3
          style={{
            color: `#d1e6ef`,
            textAlign: `center`,
            position: `relative`,
            bottom: `0`,
          }}
        >
          <Link to="/">
            <Heart />
          </Link>
          <br />
          {eventStart}
          <br />
        </h3>
      </div>
    </div>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
