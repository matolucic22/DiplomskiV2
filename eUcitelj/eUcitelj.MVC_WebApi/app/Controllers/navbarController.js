app.controller('navbarController', function navbarController($scope, $http, $stateParams, $window, $state, $localStorage, AuthenticationService) {

    //checkIfLogged();

    //function checkIfLogged() {
    //    AuthenticationService.CheckIsStoraged();
    //    if (AuthenticationService.Check()) {
    //        $scope.isLogged = false;
    //    } else {
    //        $scope.isLogged = true;
    //    }
    //}

    //$scope.Check = function () {
    //    $scope.isLogged = false;
    //    AuthenticationService.CheckIsStoraged();
    //    if (AuthenticationService.Check()) {
    //        $scope.isLogged = false;
    //    }
    //    else {
    //        $scope.isLogged = true;
    //    }
    //};

    $scope.LogOut = function () {
        AuthenticationService.Logout();
        $window.location.href = '/#/korisnik/login';
        $window.location.reload();       
    };

    $scope.upitnik = function () {
        var korisnik = angular.fromJson($window.localStorage['ngStorage-currentUser']).Role;
        if (korisnik == '???') {
            return true;
        }
    };

    $scope.ucitelj = function () {
        var korisnik = angular.fromJson($window.localStorage['ngStorage-currentUser']).Role;
        if (korisnik == 'ucitelj') {
            return true;
        }
    };

    $scope.roditelj = function () {
        var korisnik = angular.fromJson($window.localStorage['ngStorage-currentUser']).Role;
        if (korisnik == 'roditelj') {
            return true;
        }
    };

    $scope.ucenik = function () {
        var korisnik = angular.fromJson($window.localStorage['ngStorage-currentUser']).Role;
        if (korisnik == 'ucenik') {
            return true;
        }
    };

});