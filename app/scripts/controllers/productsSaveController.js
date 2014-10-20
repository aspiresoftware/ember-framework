EmberDemo.ProductsSaveController = Ember.ObjectController.extend({
  actions: {
    save: function(){
      // create a record and save it to the store
      var newProduct = this.store.createRecord('product', this.get('model'));
      //a call to make the changes on the server side
      newProduct.save();
      this.transitionToRoute('products');
    }
  }
});
