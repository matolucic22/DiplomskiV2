app.controller('RegisterController', function ($scope, $http, md5) {//singup
    var modal = document.getElementById('successModal');
    
    $scope.doStuff = function () {
        var addObj = {
            Ime_korisnika: $scope.Ime_korisnika,
            Prezime_korisnika: $scope.Prezime_korisnika,
            Korisnicko_ime: $scope.Korisnicko_ime,
            Password: $scope.Password,
            ConfirmPassword: $scope.ConfirmPassword,
            Potvrda: "Ne",
            Role:"???"
        };

        if (addObj.Ime_korisnika == null || addObj.Prezime_korisnika == null || addObj.Korisnicko_ime == null || addObj.Password == null) {
            window.alert("Niste upisali sve tražene podatke.");

        }
        else if (addObj.Password != addObj.ConfirmPassword) {
            window.alert("Potvrđena lozinka se ne podudara sa glavnom lozinkom.");
        }
        else {
            addObj.Password = md5.createHash($scope.Password || '');
            $http.post('/api/Korisnik/addK', addObj)
                .then(function (data) {
                    $scope.response = data;
                    modal.style.display = "block";
                }
            , function (jqXHR) {
                
                window.alert("Unešeno korisničko ime već postoji.");
                
            });
        };


        //linkClose.click(function ()
        //{
        //    errorWindow.hidden();
        //});

        $scope.close = function () {
            modal.style.display = "none";
        };

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
});

    

