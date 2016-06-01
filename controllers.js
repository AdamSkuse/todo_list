toDoApp.controller('ToDoController', ['ToDoFactory', function(ToDoFactory) {

  var self = this;
  self.todos = [
    {task: "ToDo1", done: true},
    {task: "Kill Cat", done: false}];

  self.addToDo = function(todoText){
    self.todos.push(new ToDoFactory(todoText));
  };

  self.removeToDo = function(){
    self.todos.pop();
  };

}]);
