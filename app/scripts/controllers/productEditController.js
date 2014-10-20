EmberDemo.ProductsEditController = Ember.ObjectController.extend({
	actions: {
        save: function(){
            var product = this.get('model');
            //a method to save the changes on to the server side
            product.save();
		    this.transitionToRoute('products');
        }
    } 
});
