import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavStyles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  a {
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;
    line-height: 20px;
    height: 35px;
    margin: 10px;
    padding: 10px;
    margin-right: 5vw;
    color: white;
    background-color: #123456;
    @media screen and (max-width: 767px) {
      margin: 5px;
      padding: 5px;
      margin-right: 2.5vw;
    }
  }
`

export default class Nav extends Component {
  render() {
    return (
      <NavStyles>
        <Link to="/places-2-stay/">Places to Stay</Link>
        <Link to="/registry/">Gift Registry</Link>
        <Link to="/places-2-stay/">RSVP</Link>
      </NavStyles>
    )
  }
}
