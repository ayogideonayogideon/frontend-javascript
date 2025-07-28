"use strict";
var Subjects;
(function (Subjects) {
    // Create and export constants for subjects
    Subjects.cpp = new Subjects.Cpp();
    Subjects.java = new Subjects.Java();
    Subjects.react = new Subjects.React();
    // Create and export cTeacher with experienceTeachingC = 10
    Subjects.cTeacher = {
        firstName: "Alice",
        lastName: "Smith",
        experienceTeachingC: 10
    };
    // Cpp subject
    console.log("C++");
    Subjects.cpp.setTeacher(Subjects.cTeacher);
    console.log(Subjects.cpp.getRequirements()); // Expected: Here is the list of requirements for Cpp
    console.log(Subjects.cpp.getAvailableTeacher()); // Expected: Available Teacher: Alice
    // Java subject
    console.log("Java");
    Subjects.java.setTeacher(Subjects.cTeacher);
    console.log(Subjects.java.getRequirements()); // Expected: Here is the list of requirements for Java
    console.log(Subjects.java.getAvailableTeacher()); // Expected: No available teacher
    // React subject
    console.log("React");
    Subjects.react.setTeacher(Subjects.cTeacher);
    console.log(Subjects.react.getRequirements()); // Expected: Here is the list of requirements for React
    console.log(Subjects.react.getAvailableTeacher()); // Expected: No available teacher
})(Subjects || (Subjects = {}));
