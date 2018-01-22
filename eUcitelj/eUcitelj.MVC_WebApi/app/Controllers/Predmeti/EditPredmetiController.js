app.controller("EditPredmetiController", function ($scope, $stateParams, $http, $window, $location) {

    $scope.find = function () {
        var id = $stateParams.PrId;
        $http.get('/api/Predmeti/getP?Id=' + id).then(function (data) {
            $scope.data = data;
        }).error(function (data) {
            $window.alert("Greška prilikom pretrage! " + data.Message);
        });

    };

    $scope.update = function () {
        var id = $stateParams.PrId;

        if ($scope.Ime_predmeta != null) {
            var updated = {
                PredmetiId: id,
                Ime_predmeta: $scope.Ime_predmeta
            };

            $http.put('/api/Predmeti/updateP', updated).then(function (data) {
                $window.alert("Promijenjeno");
                $location.path('/predmeti/predmetiIndex');
            });
        } else {
            $window.alert("Došlo je do greške prilikom popunjavanja polja.");
        }
    };
});