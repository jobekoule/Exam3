(function(){
	var app = angular.module('joHotels', ['ngRoute', 'ui.bootstrap']);

	app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl :'angular-app/main/main.html',
		name : 'main',
		controller : 'mainController'
	})
  .when('/corinthia.html', {
		templateUrl :'angular-app/corinthia/corinthia.html',
		name : 'corinthia',
		controller : 'mainController'
	})
  .when('/carlton.html', {
    templateUrl :'angular-app/carlton/carlton.html',
    name : 'carlton',
    controller : 'mainController'
  })
  .when('/palentino.html', {
    templateUrl :'angular-app/palentino/palentino.html',
    name : 'palentino',
    controller : 'mainController'
  })

	.when('/seconnecter.html', {
    templateUrl :'angular-app/connexion/seconnecter.html',
    name : 'seconnecter*',
    controller : 'mainController'
  })

	.when('/senregistrer.html', {
    templateUrl :'angular-app/enregistrer/senregistrer.html',
    name : 'senregistrer',
    controller : 'mainController'
  })
}]);
///////////////////////////////////////////////////////////////////////
app.controller('corinthiaController', function(){
});
app.controller('carltonController', function(){
});
app.controller('palentinoController', function(){
});
//CONTROLLER GERANT L4ENSEMBLE DE LA HOME, DES PAAGES
app.controller('mainController', function($scope){
$scope.dernierHotel = {};
$scope.dernierHotel.liste =[
	{
	name :"Hôtel de la Rive",
	stars : "4",
	description :"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	photos:"img/newHotel/new2.jpg"
},
{
name :"Hôtel du Pays",
stars : "4",
description :"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
photos:"img/newHotel/newH3.jpg"
},
{
name :"Grand Hôtel",
stars : "4",
description :"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
photos:"img/newHotel/newH5.jpg"
},
{
name :"Hôtel Akwa Palace",
stars : "4",
description :"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
photos:"img/newHotel/new2.jpg"
}
];

$scope.dernierCommentaire = {};
$scope.dernierCommentaire.liste = [
{
	name : "blackMan",
	nameHotel :"La Roseraie",
	review : "Séjour de rêve. Je ne regrette rien.",
	rating :"6"
},
{
	name : "blackMan",
	nameHotel :"La Roseraie",
	review : "Séjour de rêve. Je ne regrette rien.",
	rating :"6"
},
{
	name : "blackMan",
	nameHotel :"La Roseraie",
	review : "Séjour de rêve. Je ne regrette rien.",
	rating :"6"
},
{
	name : "blackMan",
	nameHotel :"La Roseraie",
	review : "Séjour de rêve. Je ne regrette rien.",
	rating :"6"
}
];
//////////////////HOTEL CORIANTHIA/////////////////////
$scope.hotelCorenthia = {};
$scope.hotelCorenthia.Rooms =[{
  type: "Supérieur Double",
  number: "20",
  description: "Parfait pour dormir avec son anaconda",
  photos:	"img/room/corinthiahotelbudapest/1.jpg",
  price: "730"
  },{
		type: "Chambre Double de luxe",
		number: "50",
		description: "il se dit que un maitre shaolin à dormis ici !",
		photos:"img/room/corinthiahotelbudapest/1.jpg",
		price: "730"
		    }
];

});///Fin main controller


	/* LES DIRECTIVES HEADER et FOOTER */

	app.directive('header', function(){
		return{
			restrict : 'A',
			name : 'header',
			templateUrl : 'angular-app/commun/header.html'
		}
	});

	app.directive('footer', function(){
		return{
			restrict : 'A',
			name : 'footer',
			templateUrl : 'angular-app/commun/footer.html'
		}
	});


})();/////////////:fin function app revision
