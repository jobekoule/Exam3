  // DECLARATION DE ANGULAR
(function(){
 var app = angular.module('myApp',['ngRoute']);

  // DECLARATION DU CONTROLLER
  app.controller("joCtrl", function(){
      this.hotel = obj;
});

// DECLARATION DES DIRECTIVES
  app.directive('header',function(){
    return{
      restrict:'A',
      templateUrl:'partials/common/header.html'
  }
  });
  app.directive('footer',function(){
    return{
      restrict:'A',
      templateUrl:'partials/common/footer.html'
  }
  });

  app.directive('home',function(){
    return{
      restrict:'A',
      templateUrl:'partials/home/home.html'
    }
  });

  app.directive('seconnecter',function(){
    return{
      restrict:'A',
      templateUrl:'partials/seconnecter/seconnecter.html'
    }
  });

  app.directive('Contact',function(){
    return{
      restrict:'A',
      templateUrl:'partials/contact/Contact.html'
    }
  });

// Declaration Des Routes

  app.config(["$routeProvider",function($routeProvider){
    $routeProvider
      .when("/",{
          templateUrl:'partials/home/home.html'
  });

      .when("/seconnecter",{
          templateUrl:'partials/seconnecter/seconnecter.html'
  });
      .when("/contact",{
          templateUrl:'partials/contact/contact.html'
  });

  }]);

// VARIABLE DU CONTROLLER

  var obj = {
  name: 'Corinthia Hotel Budapest',
  stars: 50,
  description: 'Hotel 5 étoiles de charmes (et oui nous sommes à Budapest !)',
  photos: ['"/photos/hotel/corinthiahotelbudapest/1.jpg","/photos/hotel/corinthiahotelbudapest/2.jpg","/photos/hotel/corinthiahotelbudapest/3.jpg"'],
  currency: '€',
  rooms: 'joseph',
  type: 'Supérieur Double',
  description: 'Parfait pour dormir avec son anaconda'
  photos: ["/photos/room/corinthiahotelbudapest/1.jpg",
  "/photos/room/corinthiahotelbudapest/5.jpg],
  price: '750'

    };

  })();
