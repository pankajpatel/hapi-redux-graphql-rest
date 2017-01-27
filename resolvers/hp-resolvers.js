const authors = [
  { id: 1, firstName: 'Tom', lastName: 'Coleman' },
  { id: 2, firstName: 'Sashko', lastName: 'Stubailo' },
];

const posts = [
  { id: 1, authorId: 1, title: 'Introduction to GraphQL', votes: 2 },
  { id: 2, authorId: 2, title: 'GraphQL Rocks', votes: 3 },
  { id: 3, authorId: 2, title: 'Advanced GraphQL', votes: 1 },
];

const resolveFunctions = {
  Query: {
    posts() {
      return posts;
    },
    author(root, { id }) {
      return authors.find(author => author.id == id );
    },
  },

  Author: {
    posts(author) {
      return posts.filter(post => post.authorId == author.id);
    },
  },
  Post: {
    author(post) {
      return authors.find(author => author.id == post.authorId );
    },
  },
};

module.exports = resolveFunctions;
