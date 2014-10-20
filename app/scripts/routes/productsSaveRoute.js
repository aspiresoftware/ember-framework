EmberDemo.ProductsSaveRoute = Ember.Route.extend({
    model: function(){
        return Ember.Map.create({});
    },
    renderTemplate: function(){
        this.render('products.edit', {
            controller: 'productsSave'
        });
    }
});