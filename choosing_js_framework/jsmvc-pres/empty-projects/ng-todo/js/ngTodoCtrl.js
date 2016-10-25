ngTodo.controller('NgTodoCtrl', function NgTodoCtrl($scope) {
  $scope.todos = [
    { val: "Apples", completed: false },
    { val: "Bananas", completed: true },
    { val: "Oranges", completed: true },
    { val: "Pears", completed: false} ,
    { val: "Berries", completed: false }
  ];
});