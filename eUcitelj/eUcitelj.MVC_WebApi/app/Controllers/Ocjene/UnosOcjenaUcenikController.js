app.controller('UnosOcjenaUcenikController', function ($scope, $http, $stateParams) {
    $scope.korisnikP = [];
    id = $stateParams.KoId;
    $http.get('api/Korisnik/getK?id='+id)
        .then(function (response) {
            korisnik = response.data;
            $scope.korisnikP = korisnik.Predmeti;
        }, function () {
            console.log("Can't get response.");
        });
    $scope.sort = function (keyname) {
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;//if true make it false and vice versa
    };
});