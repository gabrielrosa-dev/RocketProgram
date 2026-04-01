const apikey = "51d6baff4063de191d129a2d584a2f19"
const lang = "pt_br"
const units = "metric"

const app = angular.module("weatherApp", [])

app.controller("weatherController", function($scope, $http) {
    $scope.cidade = localStorage.getItem("ultimaCidade") || "";
    $scope.dados = null;
    $scope.erro = "";

    $scope.buscar = function() {
        if (!$scope.cidade) return;

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${$scope.cidade}&appid=${apikey}&units=${units}&lang=${lang}`;

        $http.get(url).then(function(response) {
            $scope.dados = response.data;
            $scope.erro = "";
            
            localStorage.setItem("ultimaCidade", $scope.cidade);
            
            const icon = $scope.dados.weather[0].icon;
            $scope.iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
            
        }).catch(function(error) {
            console.error("Erro na busca:", error);
            $scope.dados = null;
            $scope.erro = "Cidade não encontrada.";
        });
    };

    if ($scope.cidade) {
        $scope.buscar();
    }
});