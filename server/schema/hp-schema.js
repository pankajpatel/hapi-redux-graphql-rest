module.exports = `

type Post {
  id: Int!
  title: String
  userId: Int
  body: String
}

type Address {
  street: String
  suite: String
  city: String
  zipcode: String
  geo: GeoLocation
}

type GeoLocation {
  lat: String
  lng: String
}

type Company {
  name: String
  catchPhrase: String
  bs: String
}

type User {
  id: Int!
  name: String
  username: String
  email: String
  address: Address
  phone: String
  website: String
  company: Company
}

type Query {
  posts: [Post],
  users: [User],
  user(id: Int!): User,
  post(id: Int!): Post
}

schema {
  query: Query
}
`;
