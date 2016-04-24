/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	connection: 'localDiskDb',
    schema: true,
	attributes: {
    	username: {
    		type: 'string',
				unique: true
    	},
    	password: {
    		type: 'string'
    	},
    	email: {
    		type: 'string',
				email: true,
				required: true,
				unique: true
    	},
    	aboutme: {
    		type: 'string'
    	},
    	avatar_url: {
    		type: 'string'
    	},
    	user_type: {
    		type: 'string'
    	},
    	screen_name: {
    		type: 'string'
    	},
    	karma: {
    		type: 'integer'
    	},
    	last_sign_in_stamp: {
    		type: 'integer'
    	},
    	facebook_access_token: {
    		type: 'integer'
    	},
    	google_access_token: {
    		type: 'integer'
    	},

			// Add a reference to Compartios
    	compartios: {
      	collection: 'compartio',
      	via: 'publisher'
    	},
			// Add a reference to Comments
    	comments: {
      	collection: 'comment',
      	via: 'published'
    	},

			// Add a reference to Compartios needed
    	needs: {
      	collection: 'compartio',
      	via: 'needers',
        dominant: true
    	}


	}
};
