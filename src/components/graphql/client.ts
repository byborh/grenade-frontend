import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
    uri: 'https://1jzxj51pg8.execute-api.eu-west-3.amazonaws.com/default/grenade-backend',
    cache: new InMemoryCache()
})