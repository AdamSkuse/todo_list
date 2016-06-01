toDoApp.service('ToDoService', ['$http', 'ToDoFactory', function($http, ToDoFactory) {

  this.getAll = function() {
    var todos = []
    _callAPI(todos)
    return todos

  };

  function _callAPI(todos){
    $http.get('http://quiet-beach-24792.herokuapp.com/todos.json').then(function(response) {
      return _loopyLoopDoop(response, todos)

    });
  };

  function _loopyLoopDoop(response, todos){
    response.data.forEach(function (item) {
      todos.push(new ToDoFactory(item.text, item.completed));

    });
    return todos;
  };

}]);
