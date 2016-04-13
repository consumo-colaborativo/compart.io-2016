/**
* City.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  connection: 'localDiskDb',
  attributes: {
    name: {
      type: 'string'
    },
    slug: {
      type: 'string'
    },
    is_active: {
      type: 'boolean'
    },
    // Add a reference to Compartios
    compartios: {
      collection: 'compartio',
      via: 'city'
    }
  }
};
