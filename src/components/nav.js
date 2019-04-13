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
  @media screen and (max-width: 792px) {
    flex-direction: column;
    padding-left: 2.5vw;
    padding-right: 2.5vw;
    padding: ${props => props.navPad};
  }
  button {
    position: absolute;
    display: none;
    align-self: center;
    top: ${props => props.top};
    background-color: #eeeeee29;
    border-radius: 50%;
    font-family: 'Major Mono Display', monospace;
    font-size: 20px;
    height: 30px;
    width: 30px;
    :focus {
      outline: none;
    }
    :active {
      background-color: #eeeeee69;
    }
    @media screen and (max-width: 792px) {
      display: inline-block;
      top: ${props => props.top};
    }
  }
  a {
    white-space: nowrap;
    letter-spacing: 2px;
    font-weight: lighter;
    text-align: center;
    line-height: 20px;
    height: 35px;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 10px;
    color: #d1e6ef;
    background-color: #052f46;
    border-radius: 3px;
    border: 1px solid #6d0031;
    @media screen and (max-width: 792px) {
      display: ${props => props.displayAs};
      padding: 5px;
      line-height: 30px;
      margin-right: 2.5vw;
      margin-left: 2.5vw;
    }
  }
`

export default class Nav extends Component {
  state = {
    displayLetter: 'V',
    displayAs: 'none',
    navPad: '0px',
    top: '689px',
  }
  openSesame = e => {
    e.preventDefault()
    if (this.state.displayLetter === 'V') {
      this.setState({
        displayLetter: 'A',
        displayAs: 'inline-block',
        navPad: '2vh 5vw',
        // top: '895px', // 4 buttons
        top: '940px', // 5 buttons
        // top: '985px', // 6 buttons
        // top: '1030px', // 7 buttons
      })
    } else if (this.state.displayLetter === 'A') {
      this.setState({
        top: '689px',
        displayLetter: 'V',
        navPad: '0px',
        displayAs: 'none',
      })
    }
  }
  render() {
    return (
      <NavStyles
        displayAs={this.state.displayAs}
        navPad={this.state.navPad}
        top={this.state.top}
      >
        <button onClick={this.openSesame}>{this.state.displayLetter}</button>
        <Link to="/places-2-stay/">Places to Stay</Link>
        <Link to="/things-2-do/">Things to Do</Link>
        <Link to="/registry/">Gift Registry</Link>
        <Link to="/where/">Where?</Link>
        <Link to="/rsvp/">RSVP</Link>
        {/* <Link to="/posts/">Posts</Link> */}
        {/* <Link to="/photos/">Photos</Link> */}
      </NavStyles>
    )
  }
}
