app.controller("PredmetiController", function ($scope, $http) {

    $scope.predmeti = [];
    $http.get('api/Predmeti/getAllP')
        .then(function (response) {
            $scope.predmeti = response.data;
        }, function () {
            console.log("Can't get response.");
        });
});