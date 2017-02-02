const fetch = require('node-fetch');

const authors = [
  { id: 1, firstName: 'Tom', lastName: 'Coleman' },
  { id: 2, firstName: 'Sashko', lastName: 'Stubailo' },
];

const posts = [
  { id: 1, authorId: 1, title: 'Introduction to GraphQL', votes: 2 },
  { id: 2, authorId: 2, title: 'GraphQL Rocks', votes: 3 },
  { id: 3, authorId: 2, title: 'Advanced GraphQL', votes: 1 },
];

const BASE_URL = 'https://jsonplaceholder.typicode.com';

function fetchResponseByURL(relativeURL) {
  return fetch(`${BASE_URL}${relativeURL}`).then(res => res.json());
}

function fetchUsers() {
  return fetchResponseByURL('/users').then(json => json);
}
function fetchUser(id) {
  return fetchResponseByURL(`/users/${id}`).then(json => json);
}
function fetchPosts() {
  return fetchResponseByURL('/posts').then(json => json);
}
function fetchPost(id) {
  return fetchResponseByURL(`/posts/${id}`).then(json => json);
}
function fetchPostByUser(userId) {
  return fetchResponseByURL(`/posts?userId=${userId}`).then(json => json);
}


function fetchPersonByURL(relativeURL) {
  return fetchResponseByURL(relativeURL).then(json => json);
}

const resolveFunctions = {
  Query: {
    posts() {
      return fetchPosts();
    },
    post(root, { id }) {
      return fetchPost(id);
    },
    author(root, { id }) {
      return authors.find(author => author.id == id );
    },
    users() {
      return fetchUsers();
    },
    user(root, { id }) {
      return fetchUser(id);
    },
  },

  Author: {
    posts(author) {
      return posts.filter(post => post.authorId == author.id);
    },
  },
  Post: {

  },
};

module.exports = resolveFunctions;
