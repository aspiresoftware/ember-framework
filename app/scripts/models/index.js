EmberDemo.Index = DS.Model.extend({
	  userName         : DS.attr(),
	  password		   : DS.attr(),
	  loginFailed	   : DS.attr(),
});

EmberDemo.Index.FIXTURES =[{
				"id": 1,
				"userName": "admin",
				"password": "admin"
				},
				{
				"id": 2,
				"userName": "admin",
				"password": "admin"
}];