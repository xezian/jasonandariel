import fetch from 'isomorphic-fetch'
import ApolloClient from 'apollo-boost'

export const client = new ApolloClient({
  fetch,
  uri:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5555'
      : 'https://xezian-yoga-prod.herokuapp.com/',
})
