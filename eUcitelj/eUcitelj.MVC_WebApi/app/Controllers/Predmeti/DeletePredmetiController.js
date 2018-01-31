app.controller("DeletePredmetiController", function ($stateParams, $http, $window, $location, $scope) {

    predmeti = [];
    var ime = $stateParams.PrIme;
    var i = 0;

    $scope.find = function () {
        $http.get('api/Predmeti/getAllP')
             .then(function (response) {
                 predmeti = response.data;
             }, function () {
                 console.log("Can't get response.");
             }); 
    };

    $scope.Da = function () {
        for (i = 0; i < predmeti.length; i++) {
            if (predmeti[i].Ime_predmeta == ime) {
                $http.delete('/api/Predmeti/deleteP?Id=' + predmeti[i].PredmetiId).then(function (data) {
                    //$window.alert("Obrisano");
                    $location.path('/predmeti/predmetiIndex');
                        });
                    }
                }
    };

    $scope.Ne = function () {
        $location.path('/predmeti/predmetiIndex');
    };


    //var poruka = prompt("Brisanjem predmeta, automatski brišete i svim korisnicima sve ocjene toga predmeta. Ako želite nastaviti upišite 'Da' u suprotnom upišite 'Ne':", "");
    //var porukaLower = poruka.toString().toLowerCase();
    //if (porukaLower == 'da')
    //{
        //predmeti = [];
        //var ime = $stateParams.PrIme;
        //var i = 0;
    //    //$scope.delete = function () {
    //    $http.get('api/Predmeti/getAllP')
    //     .then(function (response) {
    //         predmeti = response.data;
    //     }, function () {
    //         console.log("Can't get response.");
    //     });

    //    for (i = 0; i < predmeti.length; i++) {
    //        if (predmeti[i].Ime_predmeta == ime) {
    //            $http.delete('/api/Predmeti/deleteP?Id=' + predmeti[i].PredmetiId).then(function (data) {
    //                $window.alert("Obrisano");
    //                $location.path('/predmeti/predmetiIndex');
    //            });
    //        }
    //    }
    //    //};
    //}else
    //{
    //    $location.path('/predmeti/predmetiIndex');
    //}

    ///PRVA SOLUCIJA///
    //var id = $stateParams.PrId;
    //$http.delete('/api/Predmeti/deleteP?Id=' + id).then(function (data) {
    //    $window.alert("Obrisano");
    //    $location.path('/predmeti/predmetiIndex');
    //})
});