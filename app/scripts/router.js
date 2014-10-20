EmberDemo.Router.map(function () {
  this.resource('products', function(){
    this.route('edit', { path:'/edit/:product_id' });
    this.route('save');
    this.route('delete',{ path:'/delete/:product_id' });
  }); 
  this.route('login');
});