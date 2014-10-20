EmberDemo.ProductsDeleteController = Ember.ObjectController.extend({
	actions: {
        delete: function(){
            this.get('model').deleteRecord();
           	//a method to save the changes onto the server side
            this.get('model').save();
		    this.transitionToRoute('products');
        }
    } 
});
