LogIn.controller("SignInCtrl", function SignInCtrl($scope, StudentFactory){
  $scope.students = StudentFactory.students;
  $scope.StudentFactory = StudentFactory;
});
