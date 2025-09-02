import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://1jzxj51pg8.execute-api.eu-west-3.amazonaws.com/default/grenade-backend",
  }),
  cache: new InMemoryCache(),
})

export default client
