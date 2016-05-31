toDoApp.controller('TodoListController', function(){
  // var self = this;
  this.todos = [
    {task: "ToDo1", done: true},
    {task: "Kill Cat", done: false}];

  this.addToDo = function(todoText){
    this.todos.push({task: todoText, done: false});
  };

  this.removeToDo = function(){
    this.todos.pop();
  };
  
});


// {
//     var todoList = this;
//     todoList.todos = [
//       {text:'learn angular', done:true},
//       {text:'build an angular app', done:false}];
//
//     todoList.addTodo = function() {
//       todoList.todos.push({text:todoList.todoText, done:false});
//       todoList.todoText = '';
//     };
