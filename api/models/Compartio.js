// Compartio.js
module.exports = {
  connection: 'localDiskDb',
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    description: {
      type: 'text'
    },
    slug: {
      type: 'string'
    },
    is_donation: {
      type: 'boolean'
    },
    url_image: {
      type: 'string'
    },    
    status: {
      type: 'string',
      enum: ['publicado', 'entregado', 'cancelado']
    },
    condition: {
      type: 'string',
      enum: ['nuevo', 'usado', 'roto']
    },
    city:{
      model: 'city'
    },
    category:{
      model: 'category'
    },
    address:{
      model: 'address'
    },
    publisher:{
      model: 'user'
    },
    donations:{
      collection: 'donation',
      via: 'compartio'
    },
    needers: {
      collection: 'user',
      via: 'needs'
    },
    comments:{
      collection: 'comment',
      via: 'compartio'
    }
  }
};
