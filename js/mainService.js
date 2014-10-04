var app = angular.module('toDo');

app.service('mainService', function(){

    var items = [
        "Pick up Dry Cleaning",
        "Go to Gym"
    ];

    this.addItem = function(item){
      items.push(item);
    };

    this.removeItem = function(item){
        for(var i = 0; i < items.length; i++) {
            if (items[i] === item) {
                items.splice(i, 1);
            }
        }
    };

    this.getItem = function(){
        return items;
    };

});