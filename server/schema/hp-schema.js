module.exports = `
type Author {
  id: Int! # the ! means that every author object _must_ have an id
  firstName: String
  lastName: String
  posts: [Post] # the list of Posts by this author
}

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

# the schema allows the following query:
type Query {
  posts: [Post],
  author(id: Int!): Author,
  users: [User]
  user(id: Int!): User
  post(id: Int!): Post
}

# we need to tell the server which types represent the root query
# and root mutation types. We call them RootQuery and RootMutation by convention.
schema {
  query: Query
}
`;
