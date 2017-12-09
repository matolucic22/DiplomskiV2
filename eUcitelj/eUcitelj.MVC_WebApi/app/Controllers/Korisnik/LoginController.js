app.controller('LoginController', function ($scope, $http, $stateParams, $window, $state, $location, AuthenticationService, md5) {
    
        $scope.loginData = {
            Korisnicko_ime: undefined,
            Password: undefined
        }

        //fali scope... 'LOAD'

        initController();

        function initController() { //reset login status
            AuthenticationService.CheckIsStoraged();
        };

        $scope.doStuff = function () {
            var userToLogin = {
                Korisnicko_ime: $scope.Korisnicko_ime,
                Password: undefined
            }

            userToLogin.Password = md5.createHash($scope.Password || '');
            //emmit?

            AuthenticationService.Login(userToLogin.Korisnicko_ime, userToLogin.Password, function (result) {

                if (result == true) {
                    $window.alert("Dobro došli u sustav."); //osvi stavi za dalje
                    $location.path('/predmeti');
                } else if (result == 404) {
                    $window.alert("Korisničko ime nije pronađeno.");
                } else if (result == 400) {
                    $window.alert("Lozinka nije pronađena.");
                } else {
                    $window.alert("Greška prilikom logiranja.");
                }
            });
        };
    
   
});



