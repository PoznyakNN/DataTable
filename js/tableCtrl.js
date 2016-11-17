/**
 * Created by RAZZKO on 30.10.2016.
 */
app.controller('tableCtrl', tableCtrl);
    function tableCtrl ($scope, $http) {

        $http.get("data.json").success(function (response) {
            $scope.responseHeaders = response;
            $scope.responseItems = $scope.responseHeaders.splice(1);
        })

    };