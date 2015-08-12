//function InitController(){
//    console.log('InitController');
//}

angular.module('mainApp', [])
    .controller("InitController", function($scope, $http) {
        $http.get('/itemList')
            .success(function(response){
                console.log('/itemList success');
                $scope.itemList = response;
        });
});
