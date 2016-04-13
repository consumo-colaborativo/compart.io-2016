/**
* Category.js
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
    description: {
      type: 'boolean'
    },
    slug: {
      type: 'string'
    },

    // Add a reference to Compartios
    compartios: {
      collection: 'compartio',
      via: 'category'
    }


  }
};
