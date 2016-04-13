// Donation.js
module.exports = {
  connection: 'compartioMySQL',
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