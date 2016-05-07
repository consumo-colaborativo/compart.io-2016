/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	signup: function(req, res) {
    if (_.isUndefined(req.param('email'))) {
      return res.badRequest('An email address is required!');
		}

		if (_.isUndefined(req.param('password'))) {
    	return res.badRequest('A password is required!');
		}

		if (req.param('password').length < 6) {
    	return res.badRequest('Password must be at least 6 characters!');
  	}

		if (_.isUndefined(req.param('username'))) {
    	return res.badRequest('A username is required!');
		}

		var user = {
    	email: req.param('email'),
			username: req.param('username'),
			password: req.param('password')
		};

		return res.json(user);
		}
		
};
