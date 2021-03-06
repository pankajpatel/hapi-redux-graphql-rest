'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const { graphqlHapi, graphiqlHapi } = require('graphql-server-hapi');
const { makeExecutableSchema } = require('graphql-tools')
require('dotenv').load();

const config = require('../config');

const Schema = require('./schema/hp-schema');
const Resolvers = require('./resolvers/hp-resolvers');

const executableSchema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers
});

// Create a server with a host and port

const server = new Hapi.Server();
server.connection(config.server);


const errorHandler = err => {
  if (err) {
    console.error(err);
  }
};


// Register/Add the plugins/modules
server.register([
  {
    register: graphqlHapi,
    options: {
      path: '/graphql',
      graphqlOptions: {
        schema: executableSchema,
      },
      route: {
        cors: true
      }
    },
  },{
    register: graphiqlHapi,
    options: {
      path: '/query',
      graphiqlOptions: {
        endpointURL: '/graphql',
      },
    },
  },
  Inert
], errorHandler);


// Add the routes

server.route([
  { // path:/all
    method: 'GET',
    path: '/all',
    handler: function (request, reply) {
      var table = server.table();
      let paths = [];
      let plugins = [];
      for (let prop in server.registrations) {
        let plugin = server.registrations[prop];
        plugins.push({
          name: plugin.name,
          version: plugin.version,
          dependencies: plugin.attributes.dependency ? plugin.attributes.dependency.length : 0
        });
      }

      table.forEach(function (server) {
        server.table.forEach(route => {
          paths.push({path: route.path, method: route.method.toUpperCase()});
        });
      });

      return reply({paths, plugins});
    }
  },
  {
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: '.',
        redirectToSlash: true,
        index: true
      }
    }
  }
]);

// Start the server

server.start((err) => {
  if (err) {
    throw err;
  }
  server.connections.forEach(connection => {
      console.log('Server started at: ' + connection.info.uri);
  });
});
