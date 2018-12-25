import React, { Component } from 'react'

export default class AirbnbForm extends Component {
  state = {
    from: '2019-06-28',
    to: '2019-06-30',
    adults: 1,
    children: 0,
  }
  onChange = e => {
    const { name, value } = e.target
    e.preventDefault()
    this.setState({ [name]: value })
  }
  seeListings = e => {
    e.preventDefault()
    const url = `https://www.airbnb.com/s/Westminster--VT--United-States/homes?adults=${
      this.state.adults
    }&children=${this.state.children}&checkin=${this.state.from}&checkout=${
      this.state.to
    }`
    window.open(url, '_blank')
  }
  render() {
    return (
      <details>
        <summary style={{ fontFamily: `'Major Mono Display', monospace` }}>
          Airbnb
        </summary>
        <br />
        <form>
          from:
          <br />
          <input
            style={{ border: `1px solid silver`, textAlign: `center` }}
            name="from"
            type="date"
            value={this.state.from}
            onChange={this.onChange}
          />
          <br />
          to:
          <br />
          <input
            style={{ border: `1px solid silver`, textAlign: `center` }}
            name="to"
            type="date"
            value={this.state.to}
            onChange={this.onChange}
          />
          <br />
          <br />
          # Adults:
          <br />
          <input
            style={{
              width: `55px`,
              border: `1px solid silver`,
              textAlign: `center`,
            }}
            name="adults"
            type="number"
            value={this.state.adults}
            onChange={this.onChange}
          />
          <br />
          # Children:
          <br />
          <input
            style={{
              width: `55px`,
              border: `1px solid silver`,
              textAlign: `center`,
            }}
            name="children"
            type="number"
            value={this.state.children}
            onChange={this.onChange}
          />
        </form>
        <button onClick={this.seeListings}>See Listings</button>
        <br />
        <br />
        <hr />
      </details>
    )
  }
}
