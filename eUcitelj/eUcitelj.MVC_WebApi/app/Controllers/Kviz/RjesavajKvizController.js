app.controller('RjesavajKvizController', function ($scope, $http, $stateParams, $window) {
    idPredmet = $stateParams.UcPrId;
    var Predmet = [];
    //var TO = [];
    //$scope.Pitanja = [];
    
    $http.get('api/Predmeti/getP?id=' + idPredmet).then(function (response) {
        Predmet = response.data;
        $scope.Pitanja = Predmet.Kviz;
        //TO = $scope.Pitanja[0].Tocan_odgovor;
        // $window.alert(TO);
        //for (var i = 0; i < $scope.Pitanja.length; i++) {
        //    TO[i] = $scope.Pitanja[i].Tocan_odgovor;
        //}
    }, function ()
    {
        $window.alert("Greška prilikom pronalasa kviza");
    });

    $scope.Snimi = function () {
        var a = 0;
        var b = 0;
        var odgDiv = document.getElementsByClassName('Odg');
        var OdgV = [];
        var OdgN = [];
        for (var i = 0; i < odgDiv.length; i++) {
            if (odgDiv[i].checked) {
                OdgV[a] = odgDiv[i].value;

                a++;
            }
        }

        for (var j = 0; j < odgDiv.length; j++) {
            if (odgDiv[j].checked) {
                OdgN[b] = odgDiv[j].name;

                b++;
            }
        }

        var e = 0;
            for (var d = 0; d < OdgN.length; d++)
            {
                if(OdgV[d]==OdgN[d])
                {
                    e++;
                }
            }
   
            //$scope.e;
            document.getElementById("TocanOdgovor").innerHTML = e;
            var button = document.getElementById("button");
            button.parentNode.removeChild(button);


    //$window.alert("Broj tocnih odgovora: "+e);






        
        //POKUSAJ2

        //var odgDiv = document.getElementsByName('Odg');
        
        //var k = 0;
        //var l = 0;
        //var Odg=[];
        //for (var i = 0; i < odgDiv.length; i++) {
        //    if (odgDiv[i].checked) {
        //        Odg[l] = odgDiv[i].value;
              
        //        l++;
        //    }
        //}

        //for(var i=0;i<Odg.length;i++)
        //{
        //    for (var j = 0; j < TO.length; j++)
        //    {
        //        if(Odg[i]==TO[j])
        //        {
        //            k++;
                    
        //        }
        //    }
        //}
        //$window.alert("Br bodova: " + k);

        //var test = document.getElementsByName('Pitanje');

        //var sizes = test.length;
        //alert(sizes);

        //for (i = 0; i < $scope.Pitanja.length; i++)
        //{
        //    $window.alert(document.querySelector('input[name=Odg]:checked').value);
        //}
         

        //$window.alert(document.querySelector('input[name=Odg]:checked').value);

    };
});