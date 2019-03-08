import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { EMAIL_MUTATION, client } from './Checkout'
import styled from 'styled-components'

const ViewBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Dancing Script', cursive;
  font-size: 1.3rem;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.3);
  background-color: #efedec72;
  border-radius: 6px;
  max-width: 400px;
  margin-bottom: 20px;
  hr {
    display: block;
    height: 1px;
    width: 100%;
    border: 0;
    border-top: 1px solid #b03045af;
    margin: 1em 0;
    padding: 0;
  }
  input,
  textarea {
    font-family: 'Josefin Slab', georgia, serif;
    border: 1px solid #b03045af;
    &:focus {
      outline: 0;
      background-color: #efefef !important;
    }
  }
  details textarea {
    resize: vertical;
  }
  .radio-toolbar {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .taco {
    margin-bottom: 10px;
  }
  .hints {
    margin: 5px 0%;
    color: #b03045;
  }
  .heart {
    color: #b03045af;
  }
  button {
    font-size: 13px;
    text-align: center;
    color: #fff;
    outline: none;
    padding: 12px 60px;
    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.1);
    background-color: #b03045af;
    border-radius: 6px;
    letter-spacing: 1.5px;
    &:hover {
      box-shadow: 2px 5px 10px rgba(0, 0, 0.1, 0.2);
    }
    &:focus,
    &:active {
      box-shadow: none;
    }
  }
`

export default class RSVP extends Component {
  state = {
    disabled: true,
    buttonText: 'RSVP',
    rsvpMessage: '♡',
    amount: '',
    vegetarian: '',
    meat: '',
    subjectThanks: '',
    bodyThanks: '',
    subjectNotif: '',
    bodyNotif: '',
    note: '',
    name: '',
    hints: false,
  }
  changeSomething = event => {
    event.preventDefault()
    const { name, value } = event.target
    this.setState({ [name]: value }, this.enableButton)
  }

  enableButton = () => {
    const { vegetarian, name, amount, meat } = this.state
    if (
      name.length > 4 &&
      vegetarian + meat <= amount &&
      amount <= 10 &&
      amount >= 1
    ) {
      this.setState({ disabled: false, buttonText: 'Répondez' })
    } else {
      this.setState({ disabled: true, hints: false, buttonText: 'RSVP' })
    }
  }

  resetFields = () => {
    this.setState({
      disabled: true,
      buttonText: 'Enter Your Info',
      rsvpMessage: '♡',
      amount: '',
      vegetarian: '',
      meat: '',
      email: '',
      subjectThanks: '',
      bodyThanks: '',
      subjectNotif: '',
      bodyNotif: '',
      note: '',
      hints: false,
      name: '',
    })
  }

  processClick = (e, sendEmails) => {
    if (this.state.disabled) {
      this.showHints(e)
    } else {
      this.processSubmit(e, sendEmails)
    }
  }

  processSubmit(e, sendEmails) {
    console.log(e)
    console.log(sendEmails)
    console.log(`hi! I'm a function that isn't built yet :)`)
  }

  showHints = () => {
    this.setState({ hints: true })
    console.log(this.state)
  }

  render() {
    const {
      email,
      subjectThanks,
      bodyThanks,
      subjectNotif,
      bodyNotif,
    } = this.state
    const variables = {
      email,
      subjectThanks,
      bodyThanks,
      subjectNotif,
      bodyNotif,
    }
    return (
      <Mutation mutation={EMAIL_MUTATION} client={client} variables={variables}>
        {(sendEmails, { error, loading }) => {
          if (error) return <div>{error}</div>
          if (loading) return <div>Loading...</div>
          return (
            <ViewBox>
              <Card>
                <h3 style={{ alignSelf: `center` }}>RSVP</h3>
                <p>Répondez s&apos;il vous plaît</p>
                <hr />
                <div className="radio-toolbar">
                  <label htmlFor="radio1">
                    <input
                      type="radio"
                      id="radio1"
                      name="radios"
                      value="all"
                      checked
                    />{' '}
                    Accepts with Pleasure
                  </label>
                  <label htmlFor="radio2">
                    <input
                      type="radio"
                      id="radio2"
                      name="radios"
                      value="false"
                    />{' '}
                    Declines with Regret
                  </label>
                </div>
                <br />
                <label htmlFor="name">
                  M{' '}
                  <input
                    name="name"
                    type="name"
                    maxLength="500"
                    value={this.state.name}
                    onChange={this.changeSomething}
                    style={{
                      width: `auto`,
                      height: `30px`,
                      lineHeight: `0px`,
                      backgroundColor: `#d1e6ef`,
                      borderRadius: `7px`,
                      marginBottom: `10px`,
                      textAlign: `center`,
                    }}
                  />
                </label>
                {this.state.hints && (
                  <div className="hints">
                    {this.state.name.length <= 4 && (
                      <>Please use a name of 5 characters or more</>
                    )}
                  </div>
                )}
                <label htmlFor="amount">
                  Number of Guests:
                  <input
                    name="amount"
                    type="number"
                    max="10"
                    value={this.state.amount}
                    onChange={this.changeSomething}
                    style={{
                      width: `45px`,
                      height: `30px`,
                      lineHeight: `0px`,
                      backgroundColor: `#d1e6ef`,
                      borderRadius: `7px`,
                      marginBottom: `10px`,
                      textAlign: `center`,
                    }}
                  />
                </label>
                {this.state.hints && (
                  <div className="hints">
                    <>
                      {this.state.amount < 1 && (
                        <>Please enter at least 1 for Number of Guests</>
                      )}
                      {this.state.amount > 10 && (
                        <>Please enter not more than 10 for Number of Guests</>
                      )}
                    </>
                  </div>
                )}
                <hr />
                <span className="taco">🌮 Taco preference 🌮</span>
                <label htmlFor="vegetarian">
                  Vegetarian:
                  <input
                    name="vegetarian"
                    type="number"
                    max="10"
                    value={this.state.vegetarian}
                    onChange={this.changeSomething}
                    style={{
                      width: `45px`,
                      height: `30px`,
                      lineHeight: `0px`,
                      backgroundColor: `#d1e6ef`,
                      borderRadius: `7px`,
                      marginBottom: `10px`,
                      textAlign: `center`,
                    }}
                  />
                </label>
                <label htmlFor="meat">
                  Chicken / Carnitas:
                  <input
                    name="meat"
                    type="number"
                    max="10"
                    value={this.state.meat}
                    onChange={this.changeSomething}
                    style={{
                      width: `45px`,
                      height: `30px`,
                      lineHeight: `0px`,
                      backgroundColor: `#d1e6ef`,
                      borderRadius: `7px`,
                      marginBottom: `10px`,
                      textAlign: `center`,
                    }}
                  />
                </label>
                {this.state.hints && (
                  <div className="hints">
                    {this.state.meat + this.state.vegetarian >
                      this.state.amount && (
                      <>
                        Please enter no more diet preferences than there are
                        Guests! ;)
                      </>
                    )}
                  </div>
                )}
                <hr />
                <details>
                  <summary>Optional Note</summary>
                  <br />
                  <label htmlFor="note">
                    Note:{' '}
                    <textarea
                      content-editable="true"
                      name="note"
                      value={this.state.note}
                      onChange={this.changeSomething}
                      style={{
                        width: `100%`,
                        verticalAlign: `top`,
                        height: `80px`,
                        backgroundColor: `#d1e6ef`,
                        borderRadius: `7px`,
                        margin: `auto`,
                        marginBottom: `10px`,
                      }}
                    />
                  </label>
                </details>
                <br />
                <button onClick={event => this.processClick(event, sendEmails)}>
                  {this.state.buttonText}
                </button>
                <br />
                <span className="heart">{this.state.rsvpMessage}</span>
              </Card>
            </ViewBox>
          )
        }}
      </Mutation>
    )
  }
}
