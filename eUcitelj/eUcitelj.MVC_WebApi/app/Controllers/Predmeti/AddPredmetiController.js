app.controller("AddPredmetiController", function ($scope, $http, $location, $window) {

    $scope.addPredmeti = function () {
        var objAdd = {
            //KorisnikId: $scope.KorisnikId,
            Ime_predmeta: $scope.Ime_predmeta
        };

        $http.post('api/Predmeti/addP', objAdd).then(function (data) {
            $scope.response = data;
            $window.alert("Dodano");
            $location.path('/predmeti/predmetiIndex');
        });

    };
});