toDoApp.service('ToDoService', ['$http', 'ToDoFactory', function($http, ToDoFactory) {

  this.getAll = function() {
    var todos = []
    $http.get('http://quiet-beach-24792.herokuapp.com/todos.json').then(function(response) {
      response.data.forEach(function (item) {
        todos.push(new ToDoFactory(item.text, item.completed));
      });
    });
    return todos

  };

}]);
