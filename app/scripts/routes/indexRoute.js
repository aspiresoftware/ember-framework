EmberDemo.IndexRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
	setupController: function(controller) {
    // Set the `title` on the index page
//    	controller.set('loginFailed', "true");
  	}
});
