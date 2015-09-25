LogIn.factory("StudentFactory", function StudentFactory() {
  var factory = {};
  factory.students = [{firstName: "Bob",
                       lastName: "Smith",
                       signedIn: false},
                       {firstName: "Sam",
                       lastName: "White",
                       signedIn: true},
                       {firstName: "Sarah",
                       lastName: "Daniels",
                       signedIn: true},
                       {firstName: "Moriah",
                       lastName: "Glenn",
                       signedIn: true},
                       {firstName: "Markus",
                       lastName: "Clark",
                       signedIn: true},];


  return factory;
});
