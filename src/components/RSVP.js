import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { EMAIL_MUTATION, client } from './Checkout'
import styled from 'styled-components'
import { navigate } from 'gatsby'

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
  width: 600px;
  margin-bottom: 20px;
  @media screen and (max-width: 725px) {
    width: 100vw;
  }
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
  textarea,
  div.name {
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
  div.name {
    min-width: 200px;
    position: relative;
    word-break: break-all;
    width: auto;
    min-height: 30px;
    background-color: #d1e6ef;
    border-radius: 7px;
    margin-bottom: 10px;
    text-align: center;
  }
  .namelabel {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
  .radio-toolbar,
  .tacos {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
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
  constructor(props) {
    super(props)
    this.state = {
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
      email: '',
      rsvp: 'accept',
      hints: false,
      name: '',
    }
  }

  changeSomething = event => {
    const { name, value } = event.target
    this.setState({ [name]: value }, this.enableButton)
  }

  enableButton = () => {
    const { vegetarian, name, amount, meat, email } = this.state
    if (
      name.length > 4 &&
      vegetarian + meat <= amount &&
      amount <= 10 &&
      amount >= 1 &&
      email.length > 5
    ) {
      this.setState({ disabled: false, buttonText: 'Répondez' })
    } else {
      this.setState({ disabled: true, hints: false, buttonText: 'RSVP' })
    }
  }

  processClick = (e, sendEmails) => {
    if (this.state.disabled) {
      this.showHints(e)
    } else {
      this.processSubmit(e, sendEmails)
    }
  }

  changeName = async e => {
    await this.setState({ name: e.target.innerHTML.toString() })
  }

  processSubmit = async (e, sendEmails) => {
    if (this.state.radios === 'decline') {
      await this.setState(
        {
          rsvpMessage: 'Success! Thank you <3',
          disabled: true,
          subjectThanks: 'Thanks for for your RSVP!',
          bodyThanks: `Thank you!<br/><br/>We appreiciate your timely response.<br/><br/>
          We are sorry to hear you won't be joining us, but the next time you see us...<br/>
          We'll be married. So I mean, we are stoked. And we look forward to it!<br/>
          <br/>Really no worries :)</br><br/>
          Name(s): ${this.state.name}<br/>
          Number in Party: ${this.state.amount}<br/><br/>
          <3 Jason & Ariel`,
          subjectNotif: `RSVP Receieved - ${this.state.name}`,
          bodyNotif: `<h2>New RSVP Action Alert!</h2><br/>
          <h3>Waaaaaaaaahhh!!!!!</h3>
          <p>Someone declined :( Hopefully they had a good reason</p>
          Who? ${this.state.name}<br/>
          ${
            this.state.note.length > 1
              ? 'Note: ' + this.state.note + '<br/>'
              : null
          }
          On the bright side <3 they saved us money! <3 <3 <3`,
        },
        sendEmails
      )
    } else {
      await this.setState(
        {
          rsvpMessage: 'Success! Thank you <3',
          disabled: true,
          subjectThanks: 'Thanks for for your RSVP!',
          bodyThanks: `Thank you!<br/><br/>We appreiciate your timely response!<br/><br/>
          We will personally be in touch soon via the email you address provided to confirm. (${
            this.state.email
          })
          <br/><br/>Your details:</br>
          Name(s): ${this.state.name}<br/>
          Number in Party: ${this.state.amount}<br/>
          ${this.state.vegetarian > 0 &&
            'Number Vegetarian: ' + this.state.vegetarian + '<br/>'}
          ${this.state.meat > 0 &&
            'Number Carnivorous: ' + this.state.meat + '<br/>'}
          <br/><3 Jason & Ariel`,
          subjectNotif: `RSVP Receieved - ${this.state.name}`,
          bodyNotif: `<h2>New RSVP Action Alert!</h2><br/>
          <h3>Yaaaayyyyyyyyyy!!!!!</h3>
          <p>Someone accepted :)</p>
          Who? ${this.state.name}<br/>
          How Many? ${this.state.amount}<br/>
          Vegetarians? ${this.state.vegetarian}<br/>
          Meat Eaters? ${this.state.meat}<br/>
          ${
            this.state.note.length > 1
              ? 'Note: ' + this.state.note + '<br/>'
              : null
          }
          Love <3 is in the air <3 <3 <3`,
        },
        sendEmails
      )
    }
    navigate('/thainq/')
  }

  showHints = () => {
    this.setState({ hints: true })
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
                      name="rsvp"
                      value="accept"
                      onChange={this.changeSomething}
                      checked={this.state.rsvp === 'accept'}
                    />{' '}
                    Accepts with Pleasure
                  </label>
                  <label htmlFor="radio2">
                    <input
                      type="radio"
                      id="radio2"
                      name="rsvp"
                      value="decline"
                      onChange={this.changeSomething}
                      checked={this.state.rsvp === 'decline'}
                    />{' '}
                    Declines with Regret
                  </label>
                </div>
                <br />
                <label className="namelabel" htmlFor="name">
                  M{' '}
                  <div
                    contentEditable
                    className="name"
                    id="name"
                    name="name"
                    type="text"
                    maxLength="500"
                    autoComplete="off"
                    onBlur={this.changeName}
                  />
                </label>
                {this.state.hints && (
                  <div className="hints">
                    {this.state.name.length <= 4 && (
                      <>Please use a name of 5 characters or more</>
                    )}
                  </div>
                )}
                <label htmlFor="email">
                  Email:
                  <input
                    name="email"
                    type="email"
                    max="10"
                    value={this.state.email}
                    onChange={this.changeSomething}
                    autoComplete="off"
                    style={{
                      width: `170px`,
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
                      {this.state.email.length <= 5 && (
                        <>Please enter a valid email address</>
                      )}
                    </>
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
                <div className="tacos">
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
                </div>
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
