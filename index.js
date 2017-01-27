'use strict';

const Hapi = require('hapi');
require('dotenv').load();

const Package = require('../package.json');
const config = require('./config');

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

], errorHandler);

// Add the route

server.route([
  { // path:/all
    method: 'GET',
    path: '/all',
    config: {
      description: 'All Paths',
      notes: 'This will list all the route registered on server',
      tags: ['api', 'debug']
    },
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
  }, { // psth:/
    method: 'GET',
    path: '/',
    config: {
      description: 'Hello World',
      notes: 'Hello WOrld',
      auth: false
    },
    handler: function (request, reply) {
      return reply('Server is Up');
    }
  }]);

// Start the server

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});