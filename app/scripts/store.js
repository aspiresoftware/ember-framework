/*EmberDemo.ApplicationAdapter =  DS.RESTAdapter.extend({
	host: 'http://192.168.1.20:9000',
	primaryKey: '_id'
});*/	
/*EmberDemo.ApplicationSerializer = DS.RESTSerializer.extend({
  primaryKey: '_id'
});*/
/*EmberDemo.ProductAdapter = DS.RESTAdapter.extend({
  normalizePayload: function(payload) {
  		delete payload.result;
  		return payload;	
  }
});
*/
//EmberDemo.Store = DS.Store.extend();

EmberDemo.ApplicationAdapter =  DS.FixtureAdapter;
