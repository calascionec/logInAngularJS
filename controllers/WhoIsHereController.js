LogIn.controller("WhoIsHereCtrl", function WhoIsHereCtrl($scope, StudentFactory){
  $scope.students = StudentFactory.students;
  $scope.StudentFactory = StudentFactory;
});
