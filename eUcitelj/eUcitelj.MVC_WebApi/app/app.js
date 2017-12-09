var app = angular.module('app', ['ui.router', 'angularUtils.directives.dirPagination', 'angular-md5', 'LocalStorageModule', 'ngStorage']);

app.config(function ($stateProvider, $urlRouterProvider)
{
    $urlRouterProvider.otherwise('/korisnik/login');

    $stateProvider
        .state('predmeti', {
            url: '/predmeti',
            controller: 'PredmetiController',
            views: {
                "root": {
                    templateUrl: 'app/Views/Predmeti/IndexPredmeti.html'
                }
            }
        }).state('register', {
            url: '/korisnik/registracija',
            controller: 'RegisterController',
            views: {
                "root": {
                    templateUrl: 'app/Views/Korisnik/Register.html'
                }
            }
        }).state('login', {
            url: '/korisnik/login',
            controller: 'LoginController',
            views: {
                "root": {
                    templateUrl: 'app/Views/Korisnik/Login.html'
                }
            }
        })
});