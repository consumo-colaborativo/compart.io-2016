// Donation.js
module.exports = {
  connection: 'localDiskDb',
  schema: true,
  attributes: {
    donation_date: {
      type: 'datetime'
    },
    giver: {
      model: 'user'
    },
    receiver: {
      model: 'user'
    },
    compartio: {
      model: 'compartio'
    }
  }
};