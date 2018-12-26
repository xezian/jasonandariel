import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavStyles = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  background-color: #6d003172;
  justify-content: space-between;
  padding: 2vh 5vw;
  border-top: 17px ridge #b03045af;
  border-bottom: 17px groove #b03045af;
  margin-bottom: 20px;
  @media screen and (max-width: 790px) {
    flex-direction: column;
    padding-left: 2.5vw;
    padding-right: 2.5vw;
  }
  a {
    white-space: nowrap;
    letter-spacing: 2px;
    font-weight: lighter;
    text-align: center;
    line-height: 20px;
    height: 35px;
    margin: 5px;
    padding: 10px;
    margin-right: 5vw;
    margin-left: 5vw;
    color: #d1e6ef;
    background-color: #052f46;
    border-radius: 3px;
    border: 1px solid #6d0031;
    @media screen and (max-width: 790px) {
      padding: 5px;
      line-height: 30px;
      margin-right: 2.5vw;
      margin-left: 2.5vw;
    }
  }
`

export default class Nav extends Component {
  render() {
    return (
      <NavStyles>
        <Link to="/places-2-stay/">Places to Stay</Link>
        <Link to="/things-2-do/">Things to Do</Link>
        <Link to="/registry/">Gift Registry</Link>
        {/* <Link to="/rsvp/">RSVP</Link> */}
      </NavStyles>
    )
  }
}
