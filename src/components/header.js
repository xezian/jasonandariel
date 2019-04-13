import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import moment from 'moment'
import Heart from './heart'
import cutout from '../images/desert.svg'

export default class Header extends Component {
  state = {
    now: moment(),
    intervalId: '',
  }
  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState({
        now: moment(),
      })
    }, 1000)
    this.setState({ intervalId })
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }
  whenExactly = start => {
    const { now } = this.state
    if (moment.duration(start.diff(now)).asSeconds() > 0) {
      const diff = moment.duration(start.diff(now))
      return (
        <>
          {diff.months() > 0 && <>{diff.months()} months, </>}
          {diff.weeks() > 0 && <>{diff.weeks()} weeks, </>}
          {diff.days() - diff.weeks() * 7 > 0 && (
            <>{diff.days() - diff.weeks() * 7} days, </>
          )}
          {diff.hours() > 0 && <>{diff.hours()} hours, </>}
          {diff.minutes() > 0 && <>{diff.minutes()} minutes, and </>}
          {diff.seconds()} seconds to go!
        </>
      )
    } else {
      clearInterval(this.state.intervalId)
      return <>🎊 It&apos;s begun! 🎊</>
    }
  }
  render() {
    const { bride, groom, eventStart } = this.props
    const start = moment(eventStart)
    return (
      <>
        <div
          style={{
            background: `#052f46`,
            height: `670px`,
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
              {start.format('MM/DD/YYYY')} - {start.format('h:mm a')}
              <br />
              <span
                style={{
                  fontSize: `.5em`,
                }}
              >
                ({this.whenExactly(start)})
              </span>
            </h3>
          </div>
        </div>
      </>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  bride: PropTypes.string,
  groom: PropTypes.string,
  eventStart: PropTypes.string,
}
