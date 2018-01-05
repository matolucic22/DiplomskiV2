app.controller('PotvrdaKorisnikaController', function ($scope, $http, $stateParams, $window, $location) {  //!!!***NERIJEŠENO***!!!

    $scope.korisnici = [];
    $scope.myVal = [];

    $http.get('/api/Korisnik/getAllK').then(function (response) {

        $scope.korisnici = response.data;       

    }, function ()
    {
        console.log("Greška prilikom preuzimanja korisnika iz baze.");
    });


    $scope.Da = function (KorisnikId) {               
        
        var rola = prompt("Upišite ulogu potvrđenog korisnika (Ucitelj/Ucenik/Roditelj):", "");
        var rolaLower = rola.toString().toLowerCase();
        
        if (rolaLower == "ucitelj" || rolaLower == "ucenik" || rolaLower == "roditelj") {
            $http.get('/api/Korisnik/getK?id=' + KorisnikId).then(function (response) {
                var Korisnik = response.data;
                var Korisnik2 = {
                    KorisnikId: Korisnik.KorisnikId,
                    Ime_korisnika: Korisnik.Ime_korisnika,
                    Prezime_korisnika: Korisnik.Prezime_korisnika,
                    Korisnicko_ime: Korisnik.Korisnicko_ime,
                    Password: Korisnik.Password,
                    Potvrda: "Da",
                    Role: rola
                };

                $http.put('api/Korisnik/updateK', Korisnik2).then(function (data) {
                    $window.alert("Promijenjeno");
                    $window.location.reload();
                }, function () {
                    console.log("Greška prilikom postavljanja promjene u bazu.");
                });

            }, function () {

                console.log("Greška prilikom dohvata podataka iz baze");
            });
        }else
        {
            alert("U prazno polje upišite ulogu potvrđenog korisnika. Pazite da unos bude kao što je predloženo.");
        }
        
    };

    $scope.Ne = function (KorisnikId) {

        $http.get('/api/Korisnik/getK?id=' + KorisnikId).then(function (response) {
            var Korisnik = response.data;
            var Korisnik2 = {
                KorisnikId: Korisnik.KorisnikId,
                Ime_korisnika: Korisnik.Ime_korisnika,
                Prezime_korisnika: Korisnik.Prezime_korisnika,
                Korisnicko_ime: Korisnik.Korisnicko_ime,
                Password: Korisnik.Password,
                Potvrda: "Ne",
                Role: "???"
            };

            $http.put('api/Korisnik/updateK', Korisnik2).then(function (data) {
                $window.alert("Promijenjeno");
                $window.location.reload();
            }, function () {
                console.log("Greška prilikom postavljanja promjene u bazu.");
            });

        }, function () {

            console.log("Greška prilikom dohvata podataka iz baze");
        });
        
    };

    $scope.DeleteK = function (KorisnikId)
    {
        //var id = $stateParams.KorisnkId;
        $http.delete('/api/Korisnik/deleteK/?Id=' + KorisnikId).then(function (response) {
            $window.alert("Korisnik uklonjen.");
            $window.location.reload();
        }, function () {

            alert("Greska prilikom uklanjanja iz baze");

        });
    };
   
});