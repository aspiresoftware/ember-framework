EmberDemo.IndexController = Ember.Controller.extend({
    actions:{
            login: function(controller) {
        /*  $.post("/login", {
              username: this.get("username"),
              password: this.get("password")
            }).then(function() {
              document.location = "/welcome";
            }, function() {
              this.set("loginFailed", true);
            }.bind(this));*/
              var loginFailed=false;
              var userName=this.get("userName");
              var password=this.get("password")
              console.log("username:"+this.get("userName")+"password:"+this.get("password"));
            this.store.find('index',1).then(function(index){
              console.log("database username:"+index.get("userName")+"database password:"+index.get("password"));
              if(userName==index.get('userName') && password==index.get('password')){
                document.location = "/#login";
              }else{
                loginFailed=true;
                index.set('loginFailed',true);
                controller.set('loginFailed', "true");
                document.location = "/#";
              }
            });
          }
    }
});
