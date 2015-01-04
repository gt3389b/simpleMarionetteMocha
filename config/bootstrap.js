/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {
	// This will extend our app.locals with those provided in config.http
	_.extend(sails.hooks.http.app.locals, sails.config.http.locals);

	locals = sails.hooks.http.app.locals;

	// TODO:  Would like to read these from a configuration file or environment settings
	var configObj = {
		company_name: "Kabaddi International, Inc.",
		company_description: "The A-team, the top 10%",
		auth_method: "local"  // local authentication
	}

	// TODO:  Would also like to update (if specified) the configuration from 
	//  a file (i.e. if the database already has data)
	App.find(function(err, data) {
		if(err) console.log("ERROR accessing app_config");

		if(data && data.length) {
			locals.app_config = _.clone(data);
		} else if (data && !data.length) {
			App.create(configObj, function userCreated(err, configObj) {
				locals.app_config = _.clone(configObj);
			});		
		}
	});

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
