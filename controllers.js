toDoApp.controller('TodoListController', function(){
  this.todos = [
    {task: "ToDo1", done: true},
    {task: "Kill Cat", done: false}];
     
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
