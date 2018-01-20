var app = angular.module('app', ['ui.router', 'angularUtils.directives.dirPagination', 'angular-md5', 'LocalStorageModule', 'ngStorage']);

app.config(function ($stateProvider, $urlRouterProvider, localStorageServiceProvider)
{
    localStorageServiceProvider.setPrefix('app');
    localStorageServiceProvider.setStorageType('localStorage');
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

        }).state('home', {
            url: '/korisnik/home',
            controller: 'HomeController',
            views: {
                "root": {
                    templateUrl: 'app/Views/Korisnik/Home.html'
                }
            }

        }).state('potvrdaKorisnika', {
            url: '/korisnik/potvrdaKorisnika',
            controller: 'PotvrdaKorisnikaController',
            views: {
                "root": {
                    templateUrl: 'app/Views/Korisnik/PotvrdaKorisnika.html'
                }
            }

        }).state('potvrdaKorisnikaPotvrdeno', {
            url: '/korisnik/potvrdaKorisnikaPotvrdeno',
            controller: 'PotvrdaKorisnikaController',
            views: {
                "root": {
                    templateUrl: 'app/Views/Korisnik/PotvrdaKorisnikaPotvrdeno.html'
                }
            }

        }).state('potvrdaKorisnikaOdbijeno', {
            url: '/korisnik/potvrdaKorisnikaOdbijeno',
            controller: 'PotvrdaKorisnikaController',
            views: {
                "root": {
                    templateUrl: 'app/Views/Korisnik/potvrdaKorisnikaOdbijeno.html'
                }
            }

        });
});

