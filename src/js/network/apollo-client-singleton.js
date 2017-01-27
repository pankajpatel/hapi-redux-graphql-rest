import ApolloClient from 'apollo-client'

const ApolloClientSingleton = new ApolloClient({
  shouldBatch: true,
  dataIdFromObject: obj => obj.id
})
export default ApolloClientSingleton
