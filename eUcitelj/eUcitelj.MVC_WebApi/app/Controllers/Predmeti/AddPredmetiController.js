app.controller("AddPredmetiController", function ($scope, $http, $location, $window) {

    var KorisnikIds = {
        KorisnikId:undefined
    };

    var Predmeti = [];

    var PredmetiI = [];

    $http.get('/api/Korisnik/getAllKorId').then(function (response) {
        KorisnikIds = response.data;

        if (KorisnikIds.length == 0) {
            var addK = {
                Ime_korisnika: 'Test',
                Prezime_korisnika: 'Test',
                Korisnicko_ime: 'Test',
                Password: 'Test',
                ConfirmPassword: 'Test',
                Potvrda: "Da",
                Role: "ucenik"
            };
            $http.post('/api/Korisnik/addK', addK)
        .then(function (data) {
            $scope.response = data;
            $window.alert("Učenika trenutno nemate u bazi. Kako bi ste mogli dodati predmete kreiran je testni učenik. Predmeti se obavezno moraju pridružiti učenicima. Kada se registrira barem jedan učenik, slobodno možete obrisati testnog. Predmeti će ostati pohranjeni. Vratite se nazad i ponovno upišite predmet.");

        }
            , function (jqXHR) {

                window.alert("Greška prilikom stvaranja testnog korisnika.");
            });
     }
                  

    });
        

    $scope.addPredmeti = function () {

        $http.get('api/Predmeti/getAllP').then(function (response) {
            Predmeti = response.data;
            for (i = 0; i < Predmeti.length; i++)
            {
                PredmetiI[i] = Predmeti[i].Ime_predmeta;
            }

            
            if (PredmetiI.indexOf($scope.Ime_predmeta) == -1) {
                for (i = 0; i < KorisnikIds.length; i++) {
                    var objAdd = {
                        KorisnikId: KorisnikIds[i].KorisnikId,
                        Ime_predmeta: $scope.Ime_predmeta
                    };

                    $http.post('api/Predmeti/addP', objAdd).then(function (data) {
                        $scope.response = data;
                        //$window.alert("Dodano");
                        $location.path('/predmeti/predmetiIndex');
                    });
                }
            }else
            {
                $window.alert("Predmet već postoji u bazi.");
            }
        });

        //$http.get('api/Korisnik/getK?Id='+KorisnikIds[0].KorisnikId).then(function (response) {
        //    Korisnik1 = response.data;
        //    Korisnik2 = Korisnik1.PredmetiId;
        //   // Predmeti = Korisnik2.Ime_predmeta;
        //    $http.get('api/Predmeti/getP?Id=' + Korisnik2).then(function (response) {

        //        Predmeti = response.data;
        //        if (Predmeti.indexOf($scope.Ime_predmeta) != -1) {
        //            $window.alert("Sadrzi");
        //        }

        //    });


            



        //    if (Predmeti.length == 0)
        //    {
                //for (i = 0; i < KorisnikIds.length; i++) {
                //    var objAdd = {
                //        KorisnikId: KorisnikIds[i].KorisnikId,
                //        Ime_predmeta: $scope.Ime_predmeta
                //    };

                //    $http.post('api/Predmeti/addP', objAdd).then(function (data) {
                //        $scope.response = data;
                //        //$window.alert("Dodano");
                //        $location.path('/predmeti/predmetiIndex');
                //    });
                //}
        //}
        //else
        //    {
        //    for (var j = 0; j < Predmeti.length; j++)
        //    {
        //        try{
        //            if( Predmeti[j].Ime_predmeta==$scope.Ime_predmeta)
        //            {
        //                $window.alert("Predmet sa tim imenom već postoji");

        //                //$location.path('/predmeti/predmetiIndex');
                        
        //                //return $state.go('home', {}, { reload: true });
        //                //$window.reload();//NAPRAVI BREAK
        //                throw Error();
        //                // return false;
        //                break;
        //                //$(selector).stop(stopAll, goToEnd);
                        
        //            }else
        //            {
        //                for (i = 0; i < KorisnikIds.length; i++) {
        //                    var objAdd = {
        //                        KorisnikId: KorisnikIds[i].KorisnikId,
        //                        Ime_predmeta: $scope.Ime_predmeta
        //                    };

        //                    $http.post('api/Predmeti/addP', objAdd).then(function (data) {
        //                        $scope.response = data;
        //                        // $window.alert("Dodano");
        //                        $location.path('/predmeti/predmetiIndex');
        //                    });
        //                }
        //            }
        //        }
        //        catch (Exception)
        //        {
        //            $window.alert("Operacija prekinuta");
        //            break;
        //        }

        //        }
        //    }
        //});
       
    };
});