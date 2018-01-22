app.controller("DeletePredmetiController", function ($stateParams, $http, $window, $location) {
    var id = $stateParams.PrId;
    $http.delete('/api/Predmeti/deleteP?Id=' + id).then(function (data) {
        $window.alert("Obrisano");
        $location.path('/predmeti/predmetiIndex');
    })
});