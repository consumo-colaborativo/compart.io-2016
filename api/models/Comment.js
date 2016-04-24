/**
* Comment.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  connection: 'localDiskDb',
  schema: true,
  attributes: {
    date: {
      type: 'datetime'
    },
    content: {
      type: 'string'
    },
    url_image:{
      type: 'string'
    },

    // Add a reference to Compartios
    compartio: {
      model: 'compartio'
    },

    // Add a reference to User
    published: {
      model: 'user'      
    }

  }
};
