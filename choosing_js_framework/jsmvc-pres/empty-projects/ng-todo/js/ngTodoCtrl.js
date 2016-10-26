ngTodo.controller('NgTodoCtrl', function NgTodoCtrl($scope) {
  $scope.todos = [
    { val: "Apples", completed: false },
    { val: "Bananas", completed: true },
    { val: "Oranges", completed: true },
    { val: "Pears", completed: false} ,
    { val: "Berries", completed: false }
  ];

  $scope.addNewTask = function() {
    $scope.todos.unshift({ completed: false, val: $scope.newTask });
    $scope.newTask = '';
  };

  $scope.clearCompleted = function() {
    $scope.todos = $scope.todos.filter(function(el) {
      return !el.completed;
    });
  };

  $scope.removeTask = function(idx) {
    $scope.todos.splice(idx, 1);
  };


});