import React from 'react'
import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'
import fetch from 'isomorphic-fetch'
import { Mutation } from 'react-apollo'

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5555'
      : 'https://xezian-yoga-prod.herokuapp.com/',
})

const EMAIL_MUTATION = gql`
  mutation EMAIL_MUTATION(
    $email: String!
    $subjectThanks: String
    $subjectNotif: String
    $bodyThanks: String!
    $bodyNotif: String!
  ) {
    emailUsBoth(
      email: $email
      subjectThanks: $subjectThanks
      subjectNotif: $subjectNotif
      bodyThanks: $bodyThanks
      bodyNotif: $bodyNotif
    ) {
      message
    }
  }
`

// hardcoded amount (in US cents) to charge users
const cardStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
  padding: '3rem',
  boxShadow: '5px 5px 25px 0 rgba(46,61,73,.2)',
  backgroundColor: '#6d003172',
  borderRadius: '6px',
  maxWidth: '400px',
}
const buttonStyles = {
  fontSize: '13px',
  textAlign: 'center',
  color: '#fff',
  outline: 'none',
  padding: '12px 60px',
  boxShadow: '2px 5px 10px rgba(0,0,0,.1)',
  backgroundColor: '#b03045af',
  borderRadius: '6px',
  letterSpacing: '1.5px',
}

// Below is where the checkout component is defined.
// It has several functions and some default state variables.
const Checkout = class extends React.Component {
  state = {
    disabled: true,
    buttonText: 'Enter Your Info',
    paymentMessage: '<3',
    amount: '',
    email: '',
    subjectThanks: '',
    bodyThanks: '',
    subjectNotif: '',
    bodyNotif: '',
    note: '',
    name: '',
  }

  componentDidMount() {
    this.stripeHandler = window.StripeCheckout.configure({
      key: 'pk_live_evT3vHlR1NWCNGi5hXiXQ2XX',
    })
  }

  changeSomething = event => {
    event.preventDefault()
    const { name, value } = event.target
    this.setState({ [name]: value }, this.enableButton)
  }

  enableButton = () => {
    const { email, name, amount } = this.state
    if (email.length > 5 && name.length > 1 && amount >= 1) {
      this.setState({ disabled: false, buttonText: 'Contribute!' })
    }
  }

  resetFields = () => {
    this.setState({
      disabled: true,
      buttonText: 'Enter Your Info',
      paymentMessage: '<3',
      amount: '',
      email: '',
      subjectThanks: '',
      bodyThanks: '',
      subjectNotif: '',
      bodyNotif: '',
      note: '',
      name: '',
    })
  }

  openStripeCheckout(event, sendEmails) {
    event.preventDefault()
    const amount = this.state.amount * 100
    const { email, note, name } = this.state

    this.setState({ disabled: true, buttonText: 'Contibuting...' })
    this.stripeHandler.open({
      name: 'Wedding Gift Payment',
      amount: amount,
      email: email,
      description: 'We appreciate you',
      token: token => {
        fetch(
          `https://s9aypr3tb2.execute-api.us-east-1.amazonaws.com/dev/checkout`,
          {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify({
              token,
              amount,
            }),
            headers: new Headers({
              'Content-Type': 'application/json',
            }),
          }
        )
          .then(async res => {
            await this.setState(
              {
                paymentMessage: 'Success! Thank you <3',
                disabled: true,
                subjectThanks: 'Thank you for you Gift!',
                bodyThanks: `Thank you ${name}! <br/>We most sincerely appreiciate your contribution of $${
                  this.state.amount
                } to our Wedding Gift Fund! <br/> a reciept from Stripe should also be arriving momentarily <br/> Your Note: <br/>${note}<br/><br/> <3 Jason & Ariel`,
                subjectNotif: 'Payment Receieved - Wedding Gift Fund',
                bodyNotif: `New contribution to Wedding Gift Fund recieved! <br/> Amount: $${
                  this.state.amount
                }<br/>From: ${name}<br/>Email: ${email}<br/>Note: <br/>${note}`,
              },
              sendEmails
            )
            this.resetFields()
            return res
          })
          .catch(error => {
            console.error('Error:', error)
            this.setState({ paymentMessage: 'Payment Failed' })
          })
      },
    })
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
            <div style={cardStyles}>
              <h4 style={{ alignSelf: `center` }}>Our Wedding Gift Fund</h4>
              <p>
                is an easy way to support our shared adventures and our life
                together without having to choose a specific item to buy for us.
              </p>
              <div
                style={{
                  width: `100%`,
                  display: `flex`,
                  flexDirection: `column`,
                  alignItems: `center`,
                }}
              >
                <label htmlFor="amount">
                  Amount: $
                  <input
                    name="amount"
                    type="number"
                    max="2500"
                    value={this.state.amount}
                    onChange={this.changeSomething}
                    style={{
                      width: `45px`,
                      height: `20px`,
                      lineHeight: `0px`,
                      backgroundColor: `#d1e6ef`,
                      borderRadius: `7px`,
                      marginBottom: `10px`,
                      textAlign: `center`,
                    }}
                  />
                </label>
                <label htmlFor="email">
                  Your Email:{' '}
                  <input
                    name="email"
                    type="email"
                    max="2500"
                    value={this.state.email}
                    onChange={this.changeSomething}
                    style={{
                      width: `auto`,
                      height: `20px`,
                      lineHeight: `0px`,
                      backgroundColor: `#d1e6ef`,
                      borderRadius: `7px`,
                      marginBottom: `10px`,
                      textAlign: `center`,
                    }}
                  />
                </label>
                <label htmlFor="name">
                  Your Name:{' '}
                  <input
                    name="name"
                    type="text"
                    max="2500"
                    value={this.state.name}
                    onChange={this.changeSomething}
                    style={{
                      width: `auto`,
                      height: `20px`,
                      lineHeight: `0px`,
                      backgroundColor: `#d1e6ef`,
                      borderRadius: `7px`,
                      marginBottom: `10px`,
                      textAlign: `center`,
                    }}
                  />
                </label>
                <details
                  style={{
                    width: `90%`,
                    border: `inherit`,
                    backgroundColor: `inherit`,
                    borderRadius: `3px`,
                  }}
                >
                  <summary>Optional Note</summary>
                  <br />
                  <div
                    style={{
                      display: `flex`,
                      flexDirection: `column`,
                      alignItems: `center`,
                    }}
                  >
                    <label htmlFor="note">Note: </label>
                    <textarea
                      content-editable="true"
                      name="note"
                      value={this.state.note}
                      onChange={this.changeSomething}
                      style={{
                        width: `90%`,
                        resize: `vertical`,
                        border: `3px solid #b03045af`,
                        verticalAlign: `top`,
                        height: `80px`,
                        backgroundColor: `#d1e6ef`,
                        boxShadow: '5px 5px 25px 0 rgba(46,61,73,.2)',
                        borderRadius: `7px`,
                        margin: `auto`,
                        marginBottom: `10px`,
                      }}
                    />
                  </div>
                </details>
                <br />
                <button
                  style={buttonStyles}
                  onClick={event => this.openStripeCheckout(event, sendEmails)}
                  disabled={this.state.disabled}
                >
                  {this.state.buttonText}
                </button>
                <br />
                {this.state.paymentMessage}
              </div>
            </div>
          )
        }}
      </Mutation>
    )
  }
}

export default Checkout
export { EMAIL_MUTATION, cardStyles, buttonStyles, client }
