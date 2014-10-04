var app = angular.module('toDo');

app.controller('mainCtrl', function($scope, mainService){

    $scope.addItem = function(){
        mainService.addItem($scope.addTodoItem);
        $scope.addTodoItem = "";
    };

    $scope.removeItem = function(){
        mainService.removeItem($scope.removeTodoItem);
    }

    var getItem = function(){
        $scope.items = mainService.getItem();
    }

    getItem();
});
