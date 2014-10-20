//Model for product with 2 properties name and description

/*EmberDemo.Product = DS.Model.extend({
  result	   : DS.attr(),
  products    : DS.attr('productList'), //the datatype of the object which values are there inside this array or list
});*/

EmberDemo.Product = DS.Model.extend({
	  name         : DS.attr(),
	  description  : DS.attr(),
});
//working json

/*EmberDemo.Product.FIXTURES =[{
	"id":1,	
	"result":"success",
	"products":[{
				"id": 1,
				"name": "Nexus 5",
				"description": "test Dell product"
				},
				{
				"id": 2,
				"name": "Dell Laptop",
				"description": "test"
			}]
}];*/

EmberDemo.Product.FIXTURES =[{
				"id": 1,
				"name": "Nexus 5",
				"description": "test Dell product"
				},
				{
				"id": 2,
				"name": "Dell Laptop",
				"description": "test"
}];