var app = angular.module('app', ['ui.router', 'angularUtils.directives.dirPagination']);

app.config(function ($stateProvider, $urlRouterProvider)
{
    $urlRouterProvider.otherwise('/predmeti');

    $stateProvider
        .state('predmeti', {
        url: '/predmeti',
        controller: 'PredmetiController',
        views: {
            "root": {
                templateUrl: 'app/Views/Predmeti/IndexPredmeti.html'
            }
        }
    });//dodati ostale !!!
});